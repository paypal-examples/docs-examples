import logging
import os
import base64
import json

from flask import Flask, request
from paypalserversdk.http.auth.o_auth_2 import ClientCredentialsAuthCredentials
from paypalserversdk.logging.configuration.api_logging_configuration import (
    LoggingConfiguration,
    RequestLoggingConfiguration,
    ResponseLoggingConfiguration,
)
from paypalserversdk.paypal_serversdk_client import PaypalServersdkClient
from paypalserversdk.controllers.orders_controller import OrdersController
from paypalserversdk.controllers.payments_controller import PaymentsController
from paypalserversdk.models.amount_with_breakdown import AmountWithBreakdown
from paypalserversdk.models.checkout_payment_intent import CheckoutPaymentIntent
from paypalserversdk.models.order_request import OrderRequest
from paypalserversdk.models.capture_request import CaptureRequest
from paypalserversdk.models.payee import Payee
from paypalserversdk.models.money import Money
from paypalserversdk.models.shipping_details import ShippingDetails
from paypalserversdk.models.shipping_option import ShippingOption
from paypalserversdk.models.shipping_type import ShippingType
from paypalserversdk.models.purchase_unit_request import PurchaseUnitRequest
from paypalserversdk.models.payment_source import PaymentSource
from paypalserversdk.models.card_request import CardRequest
from paypalserversdk.models.card_attributes import CardAttributes
from paypalserversdk.models.card_verification import CardVerification
from paypalserversdk.models.card_verification_method import CardVerificationMethod
from paypalserversdk.api_helper import ApiHelper

app = Flask(__name__)

PAYPAL_CLIENT_ID = os.getenv("PAYPAL_CLIENT_ID")
PAYPAL_CLIENT_SECRET = os.getenv("PAYPAL_CLIENT_SECRET")
PAYPAL_SELLER_ID = "BXCWTD6FWTQEU"
PAYPAL_BN_CODE = "FLAVORsb-aw9kc33369618_MP"

paypal_client: PaypalServersdkClient = PaypalServersdkClient(
    client_credentials_auth_credentials=ClientCredentialsAuthCredentials(
        o_auth_client_id=PAYPAL_CLIENT_ID,
        o_auth_client_secret=PAYPAL_CLIENT_SECRET,
    ),
    logging_configuration=LoggingConfiguration(
        log_level=logging.INFO,
        # Disable masking of sensitive headers for Sandbox testing.
        # This should be set to True (the default if unset)in production.
        mask_sensitive_headers=False,
        request_logging_config=RequestLoggingConfiguration(
            log_headers=True, log_body=True
        ),
        response_logging_config=ResponseLoggingConfiguration(
            log_headers=True, log_body=True
        ),
    ),
)

"""
Generate Auth Assertion Header
"""
def get_auth_assertion_token(client_id, merchant_id):
    header = {"alg": "none"}
    body = {"iss": client_id, "payer_id": merchant_id}
    signature = ""

    def encode_part(part):
        return base64.urlsafe_b64encode(json.dumps(part).encode()).decode().rstrip("=")

    jwt_parts = [header, body, signature]
    encoded_parts = [encode_part(part) if part else "" for part in jwt_parts]
    auth_assertion = ".".join(encoded_parts)

    return auth_assertion


"""
Health check
"""
@app.route("/", methods=["GET"])
def index():
    return {"message": "Server is running"}


orders_controller: OrdersController = paypal_client.orders
payments_controller: PaymentsController = paypal_client.payments


"""
Create an order to start the transaction.

@see https://developer.paypal.com/docs/api/orders/v2/#orders_create
"""
@app.route("/api/orders", methods=["POST"])
def create_order():
    request_body = request.get_json()
    # use the cart information passed from the front-end to calculate the order amount detals
    cart = request_body["cart"]
    order = orders_controller.orders_create(
        {
            "body": OrderRequest(
                intent=CheckoutPaymentIntent.CAPTURE,
                purchase_units=[
                    PurchaseUnitRequest(
                        amount=AmountWithBreakdown(
                            currency_code="USD",
                            value="100",
                        ),
                        payee=Payee(merchant_id=PAYPAL_SELLER_ID),
                        shipping=ShippingDetails(
                            options=[
                                ShippingOption(
                                    id="001",
                                    label="Free Shipping",
                                    mtype=ShippingType.SHIPPING,
                                    amount=Money(currency_code="USD", value=0),
                                    selected=True,
                                ),
                                ShippingOption(
                                    id="002",
                                    label="Priority Shipping",
                                    mtype=ShippingType.SHIPPING,
                                    amount=Money(currency_code="USD", value=100),
                                    selected=False,
                                ),
                            ]
                        ),
                    )
                ],
            ),
            "paypal_partner_attribution_id": PAYPAL_BN_CODE,
        }
    )
    return ApiHelper.json_serialize(order.body)


"""
Capture payment for the created order to complete the transaction.

@see https://developer.paypal.com/docs/api/orders/v2/#orders_capture
"""
@app.route("/api/orders/<order_id>/capture", methods=["POST"])
def capture_order(order_id):
    order = orders_controller.orders_capture(
        {
            "id": order_id,
            "paypal_auth_assertion": get_auth_assertion_token(
                client_id=PAYPAL_CLIENT_ID, merchant_id=PAYPAL_SELLER_ID
            ),
            "prefer": "return=representation",
        }
    )
    return ApiHelper.json_serialize(order.body)


"""
Authorize payment for the created order to complete the transaction.
@see https://developer.paypal.com/docs/api/orders/v2/#orders_authorize
"""
@app.route("/api/orders/<order_id>/authorize", methods=["POST"])
def authorize_order(order_id):
    order = orders_controller.orders_authorize(
        {
            "id": order_id,
            "paypal_auth_assertion": get_auth_assertion_token(
                client_id=PAYPAL_CLIENT_ID, merchant_id=PAYPAL_SELLER_ID
            ),            
            "prefer": "return=minimal"
        }
    )
    return ApiHelper.json_serialize(order.body)


"""
Captures an authorized payment, by ID.
@see https://developer.paypal.com/docs/api/payments/v2/#authorizations_capture
"""
@app.route("/api/orders/<authorization_id>/captureAuthorize", methods=["POST"])
def capture_authorize(authorization_id):
    order = payments_controller.authorizations_capture(
        {
            "authorization_id": authorization_id,
            "prefer": "return=minimal",
            "body": CaptureRequest(final_capture=False),
        }
    )
    return ApiHelper.json_serialize(order.body)


"""
Refund an authorized payment, by ID.
@see https://developer.paypal.com/docs/api/payments/v2/#captures_refund
"""
@app.route("/api/payments/refund", methods=["POST"])
def refundCapture():
    request_body = request.get_json()
    order = payments_controller.captures_refund(
        {
            "capture_id": request_body.get("capturedPaymentId"),
            "paypal_auth_assertion": get_auth_assertion_token(
                client_id=PAYPAL_CLIENT_ID, merchant_id=PAYPAL_SELLER_ID
            ),
            "prefer": "return=minimal",
        }
    )
    return ApiHelper.json_serialize(order.body)
