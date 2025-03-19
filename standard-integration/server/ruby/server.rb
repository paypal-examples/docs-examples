require "paypal_server_sdk"
require "sinatra"
require "sinatra/json"

include PaypalServerSdk

set :port, 8080

paypal_client = PaypalServerSdk::Client.new(
  client_credentials_auth_credentials: ClientCredentialsAuthCredentials.new(
    o_auth_client_id: ENV["PAYPAL_CLIENT_ID"],
    o_auth_client_secret: ENV["PAYPAL_CLIENT_SECRET"],
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
            value: "100.00",
          ),
          shipping: ShippingDetails.new(
            name: ShippingName.new,
            phone_number: PhoneNumberWithCountryCode.new,  
            options: [
              ShippingOption.new(
                id: "001",
                type: ShippingType.SHIPPING,
                label: "ground",
                selected: true,
                amount: Money(currency_code = "USD", value = "0"),
              ),
              ShippingOption.new(
                id: "002",
                type: ShippingType.SHIPPING,
                label: "Expedite",
                selected: false,
                amount: Money(currency_code = "USD", value = "100"),
              ),
            ],
          ),
        ),
      ],
      payment_source: PaymentSource.new(
        paypal: PaypalWallet.new(
          experience_context: PaypalWalletExperienceContext.new(
            shipping_preference: ShippingPreference::GET_FROM_FILE,
            return_url: "https://example.com/returnUrl",
            cancel_url: "https://example.com/cancelUrl",
            landing_page: PaypalExperienceLandingPage::LOGIN,
            user_action: PaypalExperienceUserAction::PAY_NOW,
          ),
        ),
      ),
    ),
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
    "prefer" => "return=representation",
  })
  json capture_response.data
rescue ErrorException => e
end

post "/api/shipping-callback" do 
  request = JSON.parse request.body.read
  response = OrderUpdateCallbackResponse.new(
    
  )
  json response
end
