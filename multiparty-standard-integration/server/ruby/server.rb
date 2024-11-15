require "paypal_server_sdk"
require "sinatra"
require "sinatra/json"
require "base64"
require "json"

include PaypalServerSdk

set :port, 8080

PAYPAL_CLIENT_ID = ENV["PAYPAL_CLIENT_ID"]
PAYPAL_CLIENT_SECRET = ENV["PAYPAL_CLIENT_SECRET"]
PAYPAL_SELLER_PAYER_ID = ENV["PAYPAL_SELLER_PAYER_ID"]
PAYPAL_BN_CODE = ENV["PAYPAL_BN_CODE"]

paypal_client = PaypalServerSdk::Client.new(
  client_credentials_auth_credentials: ClientCredentialsAuthCredentials.new(
    o_auth_client_id: PAYPAL_CLIENT_ID,
    o_auth_client_secret: PAYPAL_CLIENT_SECRET,
  ),
  environment: Environment::SANDBOX,
  logging_configuration: LoggingConfiguration.new(
    mask_sensitive_headers: false,
    log_level: Logger::INFO,
    request_logging_config: RequestLoggingConfiguration.new(
      log_headers: true,
      log_body: true,
    ),
    response_logging_config: ResponseLoggingConfiguration.new(
      log_headers: true,
      log_body: true,
    ),
  ),
)

def get_auth_assertion_token(client_id, merchant_id)
  header = { alg: "none" }
  body = { iss: client_id, payer_id: merchant_id }

  jwt_parts = [
    Base64.strict_encode64(header.to_json),
    Base64.strict_encode64(body.to_json),
    "",
  ]

  joined_jwt_parts = jwt_parts.join(".")
  joined_jwt_parts
end

# Health Check
get "/" do
  json :message => "Server is running"
end

# Create an order to start the transaction.
#
# @see https://developer.paypal.com/docs/api/orders/v2/#orders_create
post "/api/orders" do
  # use the cart information passed from the front-end to calculate the order amount detals
  cart = JSON.parse request.body.read
  order_response = paypal_client.orders.orders_create({
    "body" => OrderRequest.new(
      intent: CheckoutPaymentIntent::CAPTURE,
      purchase_units: [
        PurchaseUnitRequest.new(
          amount: AmountWithBreakdown.new(
            currency_code: "USD",
            value: "100",
          ),
          payee: Payee.new(
            merchant_id: PAYPAL_SELLER_PAYER_ID,
          ),
          shipping: ShippingDetails.new(
            options: [
              ShippingOption.new(
                id: "001",
                label: "Free Shipping",
                selected: true,
                type: ShippingType::SHIPPING,
                amount: Money.new(
                  currency_code: "USD",
                  value: "100",
                ),
              ),
              ShippingOption.new(
                id: "002",
                label: "Priority Shipping",
                selected: false,
                type: ShippingType::SHIPPING,
                amount: Money.new(
                  currency_code: "USD",
                  value: "100",
                ),
              ),
            ],
          ),
        ),
      ],
    ),
    "paypal_partner_attribution_id" => PAYPAL_BN_CODE,
    "prefer" => "return=representation",
  })

  json order_response.data
end

#  Capture payment for the created order to complete the transaction.
#
#  @see https://developer.paypal.com/docs/api/orders/v2/#orders_capture
post "/api/orders/:order_id/capture" do |order_id|
  capture_response = paypal_client.orders.orders_capture({
    "id" => order_id,
    "paypal_auth_assertion" => get_auth_assertion_token(PAYPAL_CLIENT_ID, PAYPAL_SELLER_PAYER_ID),
    "prefer" => "return=representation",
  })
  json capture_response.data
rescue ErrorException => e
end

#  Authorize payment for the created order to complete the transaction.
#
#  @see https://developer.paypal.com/docs/api/orders/v2/#orders_authorize
post "/api/orders/:order_id/authorize" do |order_id|
  capture_response = paypal_client.orders.orders_authorize({
    "id" => order_id,
    "paypal_auth_assertion" => get_auth_assertion_token(PAYPAL_CLIENT_ID, PAYPAL_SELLER_PAYER_ID),
    "prefer" => "return=representation",
  })
  json capture_response.data
rescue ErrorException => e
end

#  Captures an authorized payment, by ID.
#
#  @see https://developer.paypal.com/docs/api/payments/v2/#authorizations_capture
post "/api/orders/:authorization_id/captureAuthorize" do |authorization_id|
  authorize_response = paypal_client.payments.authorizations_capture({
    "authorization_id" => authorization_id,
    "prefer" => "return=representation",
    "body" => CaptureRequest.new(
      final_capture: false,
    ),
  })
  json authorize_response.data
rescue ErrorException => e
end

#  Refunds a captured payment, by ID.
#
#  @see https://developer.paypal.com/docs/api/payments/v2/#captures_refund
post "/api/payments/refund" do
  payment = JSON.parse request.body.read
  refund_response = paypal_client.payments.captures_refund({
    "id" => payment.capturedPaymentId,
    "paypal_auth_assertion" => get_auth_assertion_token(PAYPAL_CLIENT_ID, PAYPAL_SELLER_PAYER_ID),
    "prefer" => "return=representation",
  })
  json refund_response.data
rescue ErrorException => e
end
