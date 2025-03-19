import logging
import os

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
from paypalserversdk.models.amount_breakdown import AmountBreakdown
from paypalserversdk.models.amount_with_breakdown import AmountWithBreakdown
from paypalserversdk.models.checkout_payment_intent import CheckoutPaymentIntent
from paypalserversdk.models.order_request import OrderRequest
from paypalserversdk.models.capture_request import CaptureRequest
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
from paypalserversdk.models.item import Item
from paypalserversdk.models.item_category import ItemCategory
from paypalserversdk.models.payment_source import PaymentSource
from paypalserversdk.models.paypal_wallet import PaypalWallet
from paypalserversdk.models.paypal_wallet_experience_context import (
    PaypalWalletExperienceContext,
)
from paypalserversdk.models.shipping_preference import ShippingPreference
from paypalserversdk.models.paypal_experience_landing_page import (
    PaypalExperienceLandingPage,
)
from paypalserversdk.models.paypal_experience_user_action import (
    PaypalExperienceUserAction,
)
from paypalserversdk.exceptions.error_exception import ErrorException
from paypalserversdk.api_helper import ApiHelper

app = Flask(__name__)


paypal_client: PaypalServersdkClient = PaypalServersdkClient(
    client_credentials_auth_credentials=ClientCredentialsAuthCredentials(
        o_auth_client_id=os.getenv("PAYPAL_CLIENT_ID"),
        o_auth_client_secret=os.getenv("PAYPAL_CLIENT_SECRET"),
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
                            breakdown=AmountBreakdown(
                                item_total=Money(currency_code="USD", value="100")
                            ),
                        ),
                        items=[
                            Item(
                                name="T-Shirt",
                                unit_amount=Money(currency_code="USD", value="100"),
                                quantity="1",
                                description="Super Fresh Shirt",
                                sku="sku01",
                                category=ItemCategory.PHYSICAL_GOODS,
                            )
                        ],
                        shipping=ShippingDetails(
                            options=[
                                ShippingOption(
                                    id="001",
                                    mtype=ShippingType.SHIPPING,
                                    label="ground",
                                    selected=True,
                                    amount=Money(currency_code="USD", value="0"),
                                ),
                                ShippingOption(
                                    id="002",
                                    mtype=ShippingType.SHIPPING,
                                    label="Expedite",
                                    selected=False,
                                    amount=Money(currency_code="USD", value="100"),
                                ),
                            ]
                        ),
                    )
                ],
            )
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
        {"id": order_id, "prefer": "return=representation"}
    )
    return ApiHelper.json_serialize(order.body)
