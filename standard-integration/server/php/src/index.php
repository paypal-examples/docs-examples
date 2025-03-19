<?php
require __DIR__ . "/../vendor/autoload.php";

use PaypalServerSdkLib\Authentication\ClientCredentialsAuthCredentialsBuilder;
use PaypalServerSdkLib\Environment;
use PaypalServerSdkLib\PaypalServerSdkClientBuilder;
use PaypalServerSdkLib\Models\Builders\OrderRequestBuilder;
use PaypalServerSdkLib\Models\CheckoutPaymentIntent;
use PaypalServerSdkLib\Models\Builders\PurchaseUnitRequestBuilder;
use PaypalServerSdkLib\Models\Builders\AmountWithBreakdownBuilder;
use PaypalServerSdkLib\Models\Builders\ShippingDetailsBuilder;
use PaypalServerSdkLib\Models\Builders\ShippingOptionBuilder;
use PaypalServerSdkLib\Models\ShippingType;

$PAYPAL_CLIENT_ID = getenv("PAYPAL_CLIENT_ID");
$PAYPAL_CLIENT_SECRET = getenv("PAYPAL_CLIENT_SECRET");


$client = PaypalServerSdkClientBuilder::init()
    ->clientCredentialsAuthCredentials(
        ClientCredentialsAuthCredentialsBuilder::init(
            $PAYPAL_CLIENT_ID,
            $PAYPAL_CLIENT_SECRET
        )
    )
    ->environment(Environment::SANDBOX)
    ->build();


function handleResponse($response)
{
    $jsonResponse = json_decode($response->getBody(), true);
    return [
        "jsonResponse" => $jsonResponse,
        "httpStatusCode" => $response->getStatusCode(),
    ];
}

$endpoint = $_SERVER["REQUEST_URI"];
if ($endpoint === "/") {
    try {
        $response = [
            "message" => "Server is running",
        ];
        header("Content-Type: application/json");
        echo json_encode($response);
    } catch (Exception $e) {
        echo json_encode(["error" => $e->getMessage()]);
        http_response_code(500);
    }
} 

/**
 * Create an order to start the transaction.
 * @see https://developer.paypal.com/docs/api/orders/v2/#orders_create
 */
function createOrder($cart)
{
    global $client;

    $orderBody = [
        "body" => OrderRequestBuilder::init("CAPTURE", [
            PurchaseUnitRequestBuilder::init(
                AmountWithBreakdownBuilder::init("USD", "100")->build()
            )
                ->items([
                    ItemBuilder::init(
                        "T-Shirt",
                        MoneyBuilder::init("usd", "100")->build(),
                        "1"
                    )
                        ->description("Super Fresh Shirt")
                        ->sku("sku01")
                        ->build(),
                ])
                ->shipping(
                    ContactModuleBuilder::init()
                        ->email("")
                        ->phoneNumber(PhoneNumberBuilder::init("", "")->build())
                        ->build(),
                    ShippingDetailsBuilder::init()
                        ->options([
                            ShippingOptionBuilder::init(
                                "1",
                                "Free Shipping",
                                true
                            )
                                ->type(ShippingType::SHIPPING)
                                ->amount(
                                    MoneyBuilder::init("USD", "0")->build()
                                )
                                ->build(),
                            ShippingOptionBuilder::init(
                                "2",
                                "Priority Shipping",
                                false
                            )
                                ->type(ShippingType::SHIPPING)
                                ->amount(
                                    MoneyBuilder::init("USD", "5")->build()
                                )
                                ->build(),
                        ])
                        ->build() 
                )
                ->build() ,
        ])->build(),
    ]; 
    $apiResponse = $client->getOrdersController()->ordersCreate($orderBody);

    return handleResponse($apiResponse);
}

if ($endpoint === "/api/orders") {
    $data = json_decode(file_get_contents("php://input"), true);
    $cart = $data["cart"];
    header("Content-Type: application/json");
    try {
        $orderResponse = createOrder($cart);
        echo json_encode($orderResponse["jsonResponse"]);
    } catch (Exception $e) {
        echo json_encode(["error" => $e->getMessage()]);
        http_response_code(500);
    }
}


/**
 * Capture payment for the created order to complete the transaction.
 * @see https://developer.paypal.com/docs/api/orders/v2/#orders_capture
 */
function captureOrder($orderID)
{
    global $client;

    $captureBody = [
        "id" => $orderID,
    ];

    $apiResponse = $client->getOrdersController()->ordersCapture($captureBody);

    return handleResponse($apiResponse);
}

if (str_ends_with($endpoint, "/capture")) {
    $urlSegments = explode("/", $endpoint);
    end($urlSegments); // Will set the pointer to the end of array
    $orderID = prev($urlSegments);
    header("Content-Type: application/json");
    try {
        $captureResponse = captureOrder($orderID);
        echo json_encode($captureResponse["jsonResponse"]);
    } catch (Exception $e) {
        echo json_encode(["error" => $e->getMessage()]);
        http_response_code(500);
    }
}


if ($endpoint === "/api/shipping-callback") {
    $data = json_decode(file_get_contents("php://input"), true);
    $response = OrderUpdateCallbackResponseBuilder::init()
                    ->id($data["id"])
                    ->purchaseUnits(
                        ShippingOptionsPurchaseUnitBuilder::init()
                            ->referenceId()
                            ->shippingOptions([
                                ShippingOptionBuilder::init(
                                    "1",
                                    "Free Shipping",
                                    true
                                )
                                    ->type(ShippingType::SHIPPING)
                                    ->amount(
                                        MoneyBuilder::init("USD", "0")->build()
                                    )
                                    ->build()
                            ])->build()
                    )->build();
    header("Content-Type: application/json");
    echo json_encode($response); 
}
