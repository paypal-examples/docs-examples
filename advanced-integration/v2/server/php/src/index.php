<?php
require __DIR__ . '/../vendor/autoload.php';

use PaypalServerSdkLib\Authentication\ClientCredentialsAuthCredentialsBuilder;
use PaypalServerSdkLib\Environment;
use PaypalServerSdkLib\PaypalServerSdkClientBuilder;
use PaypalServerSdkLib\Models\Builders\OrderRequestBuilder;
use PaypalServerSdkLib\Models\CheckoutPaymentIntent;
use PaypalServerSdkLib\Models\Builders\PurchaseUnitRequestBuilder;
use PaypalServerSdkLib\Models\Builders\AmountWithBreakdownBuilder;

$PAYPAL_CLIENT_ID = getenv('PAYPAL_CLIENT_ID');
$PAYPAL_CLIENT_SECRET = getenv('PAYPAL_CLIENT_SECRET');

$client = PaypalServerSdkClientBuilder::init()
    ->clientCredentialsAuthCredentials(
        ClientCredentialsAuthCredentialsBuilder::init(
            $PAYPAL_CLIENT_ID,
            $PAYPAL_CLIENT_SECRET
        )
    )
    ->environment(Environment::SANDBOX)
    ->build();

/**
 * Create an order to start the transaction.
 * @see https://developer.paypal.com/docs/api/orders/v2/#orders_create
 */
function createOrder($cart)
{
    global $client;

    $orderBody = [
        'body' => OrderRequestBuilder::init(
            CheckoutPaymentIntent::CAPTURE,
            [
                PurchaseUnitRequestBuilder::init(
                    AmountWithBreakdownBuilder::init(
                        'USD',
                        '100.00'
                    )->build()
                )->build()
            ]
        )->build()
    ];

    $apiResponse = $client->getOrdersController()->createOrder($orderBody);

    return handleResponse($apiResponse);
}

/**
 * Capture payment for the created order to complete the transaction.
 * @see https://developer.paypal.com/docs/api/orders/v2/#orders_capture
 */
function captureOrder($orderID)
{
    global $client;

    $captureBody = [
        'id' => $orderID
    ];

    $apiResponse = $client->getOrdersController()->captureOrder($captureBody);

    return handleResponse($apiResponse);
}

function handleResponse($response)
{
    return [
        'jsonResponse' => $response->getResult(),
        'httpStatusCode' => $response->getStatusCode()
    ];
}

$endpoint = $_SERVER['REQUEST_URI'];
if ($endpoint === '/') {
    try {
        $response = [
            "message" => "Server is running"
        ];
        header('Content-Type: application/json');
        echo json_encode($response);
    } catch (Exception $e) {
        echo json_encode(['error' => $e->getMessage()]);
        http_response_code(500);
    }
}

if ($endpoint === '/api/orders') {
    $data = json_decode(file_get_contents('php://input'), true);
    $cart = $data['cart'];
    header('Content-Type: application/json');
    try {
        $orderResponse = createOrder($cart);
        echo json_encode($orderResponse['jsonResponse']);
    } catch (Exception $e) {
        echo json_encode(['error' => $e->getMessage()]);
        http_response_code(500);
    }
}


if (str_ends_with($endpoint, '/capture')) {
    $urlSegments = explode('/', $endpoint);
    end($urlSegments); // Will set the pointer to the end of array
    $orderID = prev($urlSegments);
    header('Content-Type: application/json');
    try {
        $captureResponse = captureOrder($orderID);
        echo json_encode($captureResponse['jsonResponse']);
    } catch (Exception $e) {
        echo json_encode(['error' => $e->getMessage()]);
        http_response_code(500);
    }
}
