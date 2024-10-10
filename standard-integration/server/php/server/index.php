<?php
require __DIR__ . '/../vendor/autoload.php';

use GuzzleHttp\Client;

$PAYPAL_CLIENT_ID = getenv('PAYPAL_CLIENT_ID');
$PAYPAL_CLIENT_SECRET = getenv('PAYPAL_CLIENT_SECRET');
$base = "https://api-m.sandbox.paypal.com";

/**
 * Generate an OAuth 2.0 access token for authenticating with PayPal REST APIs.
 * @see https://developer.paypal.com/api/rest/authentication/
 */
function generateAccessToken()
{
    global $PAYPAL_CLIENT_ID, $PAYPAL_CLIENT_SECRET, $base;

    if (!$PAYPAL_CLIENT_ID || !$PAYPAL_CLIENT_SECRET) {
        throw new Exception("MISSING_API_CREDENTIALS");
    }

    $auth = base64_encode($PAYPAL_CLIENT_ID . ":" . $PAYPAL_CLIENT_SECRET);

    // Disabling certificate validation for local development
    $client = new Client(['verify' => false]);
    $response = $client->post("$base/v1/oauth2/token", [
        'form_params' => [
            'grant_type' => 'client_credentials'
        ],
        'headers' => [
            'Authorization' => "Basic $auth"
        ]
    ]);

    $data = json_decode($response->getBody(), true);
    return $data['access_token'];
}

/**
 * Create an order to start the transaction.
 * @see https://developer.paypal.com/docs/api/orders/v2/#orders_create
 */
function createOrder($cart)
{
    global $base;

    $accessToken = generateAccessToken();

    // Disabling certificate validation for local development
    $client = new Client(['verify' => false]);
    $payload = [
        'intent' => 'CAPTURE',
        'purchase_units' => [
            [
                'amount' => [
                    'currency_code' => 'USD',
                    'value' => '100.00'
                ]
            ]
        ],
    ];

    $response = $client->post("$base/v2/checkout/orders", [
        'headers' => [
            'Content-Type' => 'application/json',
            'Authorization' => "Bearer $accessToken"
        ],
        'json' => $payload
    ]);

    return handleResponse($response);
}

/**
 * Capture payment for the created order to complete the transaction.
 * @see https://developer.paypal.com/docs/api/orders/v2/#orders_capture
 */
function captureOrder($orderID)
{
    global $base;

    $accessToken = generateAccessToken();

    // Disabling certificate validation for local development
    $client = new Client(['verify' => false]);
    $response = $client->post("$base/v2/checkout/orders/$orderID/capture", [
        'headers' => [
            'Content-Type' => 'application/json',
            'Authorization' => "Bearer $accessToken"
        ]
    ]);

    return handleResponse($response);
}

function handleResponse($response)
{
    $jsonResponse = json_decode($response->getBody(), true);
    return [
        'jsonResponse' => $jsonResponse,
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