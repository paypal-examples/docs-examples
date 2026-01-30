https://docs.google.com/spreadsheets/d/1YXfK8bpXNbXUhRtH1hZAaZGdDPyM-ppoKuh6hoLC3Cs/edit?gid=0#gid=0
https://drive.google.com/file/d/15msTKr9GAP-vm0d5C_q6i1cg2fSaac22/view?usp=drivesdk
"> ## Documentation Index
> Fetch the complete documentation index at: https://docs.paypal.ai/llms.txt
> Use this file to discover all available pages before exploring further.

# Integrate PayPal Checkout with PayPal's JavaScript SDK v6

This guide demonstrates how to integrate one-time payments using the JavaScript SDK v6 in your web application, including PayPal, Pay Later, and PayPal Credit options.

<Note>Merchants with strict security or compliance requirements can use this integration in a [sandboxed iframe](/developer/how-to/sdk/js/v6/iframe).</Note>

## Integration overview

The PayPal one-time payment integration supports multiple payment methods:

1. [PayPal](https://www.paypal.com/us/home) - Standard PayPal payments
2. [Pay Later](https://www.paypal.com/us/digital-wallet/ways-to-pay/buy-now-pay-later) - Buy now, pay later financing options
3. [PayPal Credit](https://www.paypal.com/us/digital-wallet/ways-to-pay/credit-services/paypal-credit) - Credit-based payment option

The integration consists of four main steps:

1. **Initialize the SDK** with payment components
2. **Check eligibility** for each payment method
3. **Create payment sessions** with callback handlers
4. **Start payment flow** with presentation mode configuration

## Prerequisites

* Complete the steps in [Get started](/developer/how-to/api/get-started) to get your:
  * Personal and business sandbox account credentials
  * PayPal client ID and secret
* Ensure your application has permissions enabled for JavaScript SDK v6
* In your project root folder, create a `.env` file with your PayPal credentials:

```bash  theme={null}
PAYPAL_SANDBOX_CLIENT_ID=your_client_id
PAYPAL_SANDBOX_CLIENT_SECRET=your_client_secret
```

* [Set up the SDK](/developer/how-to/sdk/js/v6/configuration)

## Set up your frontend

This is the **recommended approach** for most implementations. It includes all payment methods with eligibility logic and automatic fallback handling.

### Key components

The following are key components of the integration.

#### PayPal SDK instance

* **Purpose**: Main entry point for PayPal functionality
* **Components**: Includes `paypal-payments` component
* **Authentication**: Requires client token from server

#### Eligibility check

* **Purpose**: Determines available payment methods
* **Factors**: User location, currency, account status, device type
* **Implementation**: Always check before showing payment buttons

#### Payment sessions

* **PayPal**: Standard PayPal payments
* **Pay Later**: Financing options with specific product codes
* **PayPal Credit**: Credit-based payments with country-specific configuration

#### Web components

* `<paypal-button>`: Standard PayPal payment button
* `<paypal-pay-later-button>`: Pay Later financing button
* `<paypal-credit-button>`: PayPal Credit button

### Build an HTML page

```html expandable lines theme={null}
<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <title>One-Time Payment - Recommended Integration - PayPal JavaScript SDK</title>
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <style>
      .buttons-container {
        display: flex;
        flex-direction: column;
        gap: 12px;
      }
    </style>
  </head>
  <body>
    <h1>One-Time Payment Recommended Integration</h1>

    <div class="buttons-container">
      <!-- All buttons are hidden until eligibility is confirmed -->
      <paypal-button type="pay" hidden></paypal-button>
      <paypal-pay-later-button hidden></paypal-pay-later-button>
      <paypal-credit-button hidden></paypal-credit-button>
    </div>
    
    <script src="app.js"></script>

    <!-- Load PayPal SDK -->
    <script
      async
      src="https://www.sandbox.paypal.com/web-sdk/v6/core"
      onload="onPayPalWebSdkLoaded()"
    ></script>
  </body>
</html>
```

### Build the JavaScript

```javascript expandable lines theme={null}
async function onPayPalWebSdkLoaded() {
  try {
    // Get client token for authentication
    const clientToken = await getBrowserSafeClientToken();
    
    // Create PayPal SDK instance
    const sdkInstance = await window.paypal.createInstance({
      clientToken,
      components: ["paypal-payments"],
      pageType: "checkout",
    });

    // Check eligibility for all payment methods
    const paymentMethods = await sdkInstance.findEligibleMethods({
      currencyCode: "USD",
    });

    // Set up PayPal button if eligible
    if (paymentMethods.isEligible("paypal")) {
      setUpPayPalButton(sdkInstance);
    }

    // Set up Pay Later button if eligible
    if (paymentMethods.isEligible("paylater")) {
      const payLaterPaymentMethodDetails = paymentMethods.getDetails("paylater");
      setUpPayLaterButton(sdkInstance, payLaterPaymentMethodDetails);
    }

    // Set up PayPal Credit button if eligible
    if (paymentMethods.isEligible("credit")) {
      const paypalCreditPaymentMethodDetails = paymentMethods.getDetails("credit");
      setUpPayPalCreditButton(sdkInstance, paypalCreditPaymentMethodDetails);
    }
  } catch (error) {
    console.error("SDK initialization error:", error);
  }
}

// Shared payment session options for all payment methods
const paymentSessionOptions = {
  // Called when user approves a payment 
  async onApprove(data) {
    console.log("Payment approved:", data);
    try {
      const orderData = await captureOrder({
        orderId: data.orderId,
      });
      console.log("Payment captured successfully:", orderData);
    } catch (error) {
      console.error("Payment capture failed:", error);
    }
  },
  
  // Called when user cancels a payment
  onCancel(data) {
    console.log("Payment cancelled:", data);
  },
  
  // Called when an error occurs during payment
  onError(error) {
    console.error("Payment error:", error);
  },
};

// Set up standard PayPal button
async function setUpPayPalButton(sdkInstance) {
  const paypalPaymentSession = sdkInstance.createPayPalOneTimePaymentSession(
    paymentSessionOptions,
  );

  const paypalButton = document.querySelector("paypal-button");
  paypalButton.removeAttribute("hidden");

  paypalButton.addEventListener("click", async () => {
    try {
      await paypalPaymentSession.start(
        { presentationMode: "auto" }, // Auto-detects best presentation mode
        createOrder(),
      );
    } catch (error) {
      console.error("PayPal payment start error:", error);
    }
  });
}

// Set up Pay Later button
async function setUpPayLaterButton(sdkInstance, payLaterPaymentMethodDetails) {
  const payLaterPaymentSession = sdkInstance.createPayLaterOneTimePaymentSession(
    paymentSessionOptions
  );

  const { productCode, countryCode } = payLaterPaymentMethodDetails;
  const payLaterButton = document.querySelector("paypal-pay-later-button");

  // Configure button with Pay Later specific details
  payLaterButton.productCode = productCode;
  payLaterButton.countryCode = countryCode;
  payLaterButton.removeAttribute("hidden");

  payLaterButton.addEventListener("click", async () => {
    try {
      await payLaterPaymentSession.start(
        { presentationMode: "auto" },
        createOrder(),
      );
    } catch (error) {
      console.error("Pay Later payment start error:", error);
    }
  });
}

// Set up PayPal Credit button
async function setUpPayPalCreditButton(sdkInstance, paypalCreditPaymentMethodDetails) {
  const paypalCreditPaymentSession = sdkInstance.createPayPalCreditOneTimePaymentSession(
    paymentSessionOptions
  );

  const { countryCode } = paypalCreditPaymentMethodDetails;
  const paypalCreditButton = document.querySelector("paypal-credit-button");

  // Configure button with PayPal Credit specific details
  paypalCreditButton.countryCode = countryCode;
  paypalCreditButton.removeAttribute("hidden");

  paypalCreditButton.addEventListener("click", async () => {
    try {
      await paypalCreditPaymentSession.start(
        { presentationMode: "auto" },
        createOrder(),
      );
    } catch (error) {
      console.error("PayPal Credit payment start error:", error);
    }
  });
}
```

### Advanced

For advanced use cases, you can choose specific presentation modes and implement your own fallback logic by leveraging the `isRecoverable` error property.

```javascript lines expandable theme={null}
// Alternatively, set up a standard PayPal button with a custom order of presentation modes
async function setUpPayPalButton(sdkInstance) {
  const paypalPaymentSession = sdkInstance.createPayPalOneTimePaymentSession(
    paymentSessionOptions,
  );

  const paypalButton = document.querySelector("paypal-button");
  paypalButton.removeAttribute("hidden");

  paypalButton.addEventListener("click", async () => {
    const createOrderPromiseReference = createOrder();
    const presentationModesToTry = ["payment-handler", "popup", "modal"];

    for (const presentationMode of presentationModesToTry) {
      try {
        await paypalPaymentSession.start(
          { presentationMode },
          createOrderPromiseReference,
        );
        // Exit early when start() successfully resolves
        break;
      } catch (error) {
        // Try another presentationMode for a recoverable error
        if (error.isRecoverable) {
          continue;
        }
        throw error;
      }
    }
  });
}
```

### Key difference between v6 and previous versions

For more control over order details:

```javascript lines theme={null}
// In v6, this must return an object with a signature of { orderId: "YOUR_ORDER_ID" }
  return fetch("/paypal-api/checkout/orders/create", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(orderPayload),
  })
    .then(response => response.json())
    .then(data => ({ orderId: data.id })); /// <-- Important! 
}
```

### Choose a presentation mode

The JavaScript SDK v6 supports multiple presentation modes:

#### Auto mode (recommended)

```javascript  theme={null}
{ presentationMode: "auto" }
```

* Automatically selects the best presentation mode
* Tries popup first, falls back to modal if popups are blocked
* Best for most use cases

#### Popup mode

```javascript  theme={null}
{ presentationMode: "popup" }
```

* Opens PayPal in a popup window
* Provides seamless user experience
* May be blocked by popup blockers

#### Modal mode

```javascript  theme={null}
{ presentationMode: "modal" }
```

* Opens PayPal in an overlay modal
* This is only recommended for Webview scenarios
* Do not use in desktop web scenarios as this integration has limitations on cookies, which can affect user authentication

#### Redirect mode

```javascript  theme={null}
{ presentationMode: "redirect" }
```

* Full-page redirect to PayPal
* Best for mobile devices
* Requires return/cancel URL configuration

#### Payment handler mode (experimental)

```javascript  theme={null}
{ presentationMode: "payment-handler" }
```

* Uses the browser's Payment Handler API
* Modern browsers only
* Provides native payment experience

## Set up your backend

Make sure you [get the client token for the SDK](/developer/how-to/sdk/js/v6/configuration#get-client-token).

Set up your backend to call the following endpoints for one-time checkout with PayPal.

### 1. Create order

Creating an order initializes a payment request and reserves the funds, but doesn't transfer money. After the buyer authorizes an order, you capture the funds.

* Replace `YOUR_ACCESS_TOKEN` with your [API access token](/developer/how-to/api/get-started#2-get-an-access-token).

* You can send the `id` value in the response back to the client (JavaScript) side.

* The following example creates an order with 2 items and details, and includes the total amounts with shipping costs.

<Info>**Endpoint:** [`/v2/checkout/orders`](/reference/api/rest/orders/create-order)</Info>

```bash lines expandable theme={null}
curl -s -X POST https://api-m.sandbox.paypal.com/v2/checkout/orders \
  -H  "Authorization: Bearer YOUR_ACCESS_TOKEN" \
  -H "Content-Type: application/json" \
  -d '{
   "intent" : "CAPTURE",
   "purchase_units" : [
      {
         "amount" : {
            "breakdown" : {
               "item_total" : {
                  "currency_code" : "USD",
                  "value" : "220.00"
               },
               "shipping" : {
                  "currency_code" : "USD",
                  "value" : "10.00"
               }
            },
            "currency_code" : "USD",
            "value" : "230.00"
         },
         "items" : [
            {
               "category" : "PHYSICAL_GOODS",
               "description" : "Super Fresh Shirt",
               "image_url" : "https://example.com/static/images/items/1/tshirt_green.jpg",
               "name" : "T-Shirt",
               "quantity" : "1",
               "sku" : "sku01",
               "unit_amount" : {
                  "currency_code" : "USD",
                  "value" : "20.00"
               },
               "upc" : {
                  "code" : "123456789012",
                  "type" : "UPC-A"
               },
               "url" : "https://example.com/url-to-the-item-being-purchased-1"
            },
            {
               "category" : "PHYSICAL_GOODS",
               "description" : "Running, Size 10.5",
               "image_url" : "https://example.com/static/images/items/1/shoes_running.jpg",
               "name" : "Shoes",
               "quantity" : "2",
               "sku" : "sku02",
               "unit_amount" : {
                  "currency_code" : "USD",
                  "value" : "100.00"
               },
               "upc" : {
                  "code" : "987654321012",
                  "type" : "UPC-A"
               },
               "url" : "https://example.com/url-to-the-item-being-purchased-2"
            }
         ]
      }
   ]
}' 
```

<Accordion title="Sample 200 response">
  ```json lines theme={null}
  {
     "id" : "9N088525UW155274K",
     "links" : [
        {
           "href" : "https://api.sandbox.paypal.com/v2/checkout/orders/9N088525UW155274K",
           "method" : "GET",
           "rel" : "self"
        },
        {
           "href" : "https://www.sandbox.paypal.com/checkoutnow?token=9N088525UW155274K",
           "method" : "GET",
           "rel" : "approve"
        },
        {
           "href" : "https://api.sandbox.paypal.com/v2/checkout/orders/9N088525UW155274K",
           "method" : "PATCH",
           "rel" : "update"
        },
        {
           "href" : "https://api.sandbox.paypal.com/v2/checkout/orders/9N088525UW155274K/capture",
           "method" : "POST",
           "rel" : "capture"
        }
     ],
     "status" : "CREATED"
  }
  ```
</Accordion>

Call your server endpoint from the client side.

```javascript lines expandable theme={null}
async function createOrder() {
  const response = await fetch("/paypal-api/checkout/orders/create", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      cart: [{
        id: "YOUR_PRODUCT_ID_1",
        quantity: "YOUR_PRODUCT_QUANTITY",
      }, {
        id: "YOUR_PRODUCT_ID_2",
        quantity: "YOUR_PRODUCT_QUANTITY",
      }],
    }),
  });
  const {
    id
  } = await response.json();
  return {
    orderId: id
  };
}
```

### 2. Capture order

After a buyer authorizes payment, capture an order to transfer funds from the buyer to the merchant account.

Replace `YOUR_ACCESS_TOKEN` with your API access token.

* For more details on order captures, see the [Capture order endpoint](/reference/api/rest/orders/capture-payment-for-order).

```bash lines theme={null}
curl -X POST https://api-m.sandbox.paypal.com/v2/checkout/orders/{ORDER_ID}/capture \
  -H "Content-Type: application/json" \
  -H "Authorization: Bearer YOUR_ACCESS_TOKEN" \
  -d '{}'
```

<Accordion title="Sample 200 response">
  ```json lines theme={null}
  {
    "id": "9N088525UW155274K",
    "links": [{
      "href": "https://api.sandbox.paypal.com/v2/checkout/orders/9N088525UW155274K",
      "method": "GET",
      "rel": "self"
    }],
    "payer": {
      "address": {
        "country_code": "US"
      },
      "email_address": "test-buyer@yahoo.com",
      "name": {
        "given_name": "test",
        "surname": "buyer"
      },
      "payer_id": "3XSHM8HDUW9QC"
    },
    "payment_source": {
      "paypal": {
        "account_id": "3XSHM8HDUW9QC",
        "account_status": "VERIFIED",
        "address": {
          "country_code": "US"
        },
        "email_address": "test-buyer@yahoo.com",
        "name": {
          "given_name": "test",
          "surname": "buyer"
        }
      }
    },
    "purchase_units": [{
      "payments": {
        "captures": [{
          "amount": {
            "currency_code": "USD",
            "value": "230.00"
          },
          "create_time": "2025-10-22T22:32:27Z",
          "final_capture": true,
          "id": "05C30509S82176912",
          "links": [{
            "href": "https://api.sandbox.paypal.com/v2/payments/captures/05C30509S82176912",
            "method": "GET",
            "rel": "self"
          }, {
            "href": "https://api.sandbox.paypal.com/v2/payments/captures/05C30509S82176912/refund",
            "method": "POST",
            "rel": "refund"
          }, {
            "href": "https://api.sandbox.paypal.com/v2/checkout/orders/9N088525UW155274K",
            "method": "GET",
            "rel": "up"
          }],
          "seller_protection": {
            "dispute_categories": ["ITEM_NOT_RECEIVED", "UNAUTHORIZED_TRANSACTION"],
            "status": "ELIGIBLE"
          },
          "seller_receivable_breakdown": {
            "gross_amount": {
              "currency_code": "USD",
              "value": "230.00"
            },
            "net_amount": {
              "currency_code": "USD",
              "value": "221.48"
            },
            "paypal_fee": {
              "currency_code": "USD",
              "value": "8.52"
            }
          },
          "status": "COMPLETED",
          "update_time": "2025-10-22T22:32:27Z"
        }]
      },
      "reference_id": "default",
      "shipping": {
        "address": {
          "address_line_1": "1 Main St",
          "admin_area_1": "CA",
          "admin_area_2": "San Jose",
          "country_code": "US",
          "postal_code": "95131"
        },
        "name": {
          "full_name": "test buyer"
        }
      }
    }],
    "status": "COMPLETED"
  }
  ```
</Accordion>

Then, call your server endpoint from the client side to capture the order:

```javascript lines theme={null}
async function captureOrder({ orderId }) {
  const response = await fetch(
    `/paypal-api/checkout/orders/${orderId}/capture`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
    },
  );
  const data = await response.json();
  return data;
}
```

## Best practices

Keep sensitive operations server-side and validate all payment data. Provide clear feedback to users throughout the payment flow.

### Security

* Obtain client tokens from your secure server
* Never expose PayPal client secrets in frontend code
* All payment processing happens through PayPal's secure servers
* Never pass up item total from browser - this can be manipulated
* Validate order details on your server before capture

### User experience

* Always check eligibility before showing payment buttons
* Provide clear loading states during payment processing
* Handle popup blockers gracefully with `{ presentationMode:auto }`
* Show appropriate error messages for different failure scenarios

### Performance

* Initialize the SDK early, but avoid blocking page load
* Cache client tokens appropriately
* Use presentation mode fallback strategies

## Testing

* Test across different browsers and devices
* Verify popup blocker handling
* Test all callback scenarios (approve, cancel, error)
* Validate eligibilit
# api credenciales Paypal edgarplasticos3@hotmail.com
ARTh1JcgB4texLdbwWliMcjMNR_ljfg-yODyHKcjwlAdR4K8YAhLV3Pm1mwzXKbkEKTHDQSn1Qt0XJhO
AUkLH8bV5AwJU6bfzKviRlWcPZFzuM2UqxBad5-qWiWAJp068W-MeKHAOA8W_BNlN0PZr9jfJ884UCWh
ASAL8-_MIaL8lKA_1s-rE7ChGQMSR-UkbH1YeibD5X71nWO2aZx7mvoljjADs2umtw8WwA5lD2o7FG1L
Adww38aCRh2z_NH5SzxYWhialjWzALkE5GxQNdtBZCbqLeVmbYX21hri-r3bWOWDDgZ_BzPbNsvjbTXD
AfnF0uJLQiG7c1EOGvzssvG221wCVOHSgjicvHn6YT08W_HviKSrquLEtexTtuvd65j9UUtom0BUwB1z
INSERT INTO ?:payment_processors (processor, processor_script, processor_template, admin_template, callback, type, addon) VALUES ('Website Payments Pro', 'paypal_pro.php', 'views/orders/components/payments/cc.tpl', 'paypal_pro.tpl', 'Y', 'P', 'paypal');
INSERT INTO ?:payment_processors (processor, processor_script, processor_template, admin_template, callback, type, addon) VALUES ('PayPal', 'paypal.php', 'views/orders/components/payments/cc_outside.tpl', 'paypal.tpl', 'Y', 'P', 'paypal');
INSERT INTO ?:payment_processors (processor, processor_script, processor_template, admin_template, callback, type, addon) VALUES ('PayFlow Pro', 'payflow_pro.php', 'views/orders/components/payments/cc.tpl', 'payflow_pro.tpl', 'Y', 'P', 'paypal');
INSERT INTO ?:payment_processors (processor, processor_script, processor_template, admin_template, callback, type, addon) VALUES ('PayPal Express Checkout', 'paypal_express.php', 'addons/paypal/views/orders/components/payments/paypal_express.tpl', 'paypal_express.tpl', 'Y', 'B', 'paypal');
INSERT INTO ?:payment_processors (processor, processor_script, processor_template, admin_template, callback, type, addon) VALUES ('PayPal Advanced', 'paypal_advanced.php', 'views/orders/components/payments/cc_outside.tpl', 'paypal_advanced.tpl', 'N', 'P', 'paypal');
<?php
/***************************************************************************
 *                                                                          *
 *   (c) 2004 Vladimir V. Kalynyak, Alexey V. Vinokurov, Ilya M. Shalnev    *
 *                                                                          *
 * This  is  commercial  software,  only  users  who have purchased a valid *
 * license  and  accept  to the terms of the  License Agreement can install *
 * and use this program.                                                    *
 *                                                                          *
 ****************************************************************************
 * PLEASE READ THE FULL TEXT  OF THE SOFTWARE  LICENSE   AGREEMENT  IN  THE *
 * "copyright.txt" FILE PROVIDED WITH THIS DISTRIBUTION PACKAGE.            *
 ****************************************************************************/

use Tygh\Addons\PaypalCheckout\Enum\WebhookEventType;
use Tygh\Addons\PaypalCheckout\Payments\PaypalCheckout;
use Tygh\Addons\PaypalCheckout\ServiceProvider;
use Tygh\Addons\PaypalCheckout\Webhook\PaymentFinishedEvent;

defined('BOOTSTRAP') or die('Access denied');

if ($mode === 'webhook') {
    $payload_body = file_get_contents('php://input');

    fn_log_event(
        'general',
        'runtime',
        [
            'message' => __('paypal_checkout.webhook', ['[payload]' => $payload_body]),
        ]
    );

    $event = json_decode($payload_body, false);
    if (
        !isset($event->event_type)
        || !in_array($event->event_type, WebhookEventType::getCaptureTypes(), true)
    ) {
        die('err_event');
    }

    if ($event->event_type !== WebhookEventType::PAYMENT_CAPTURE_REFUNDED) {
        $event = new PaymentFinishedEvent($event);
    } else {
        die('handler not implemented');
    }
    $order_info = $event->getCapture()->getOrderInfo();
    if (!$order_info) {
        die('err_order');
    }

    if ($event->isProcessed()) {
        die('err_processed');
    }

    $capture = $event->getCapture();

    if (!fn_check_payment_script(PaypalCheckout::getScriptName(), $capture->getOrderId())) {
        die('err_order');
    }

    $processor = ServiceProvider::getProcessorFactory()->getByPaymentId(
        $order_info['payment_id'],
        $order_info['payment_method']['processor_params']
    );
    $pp_response = $event->handle($processor);

    fn_update_order_payment_info($capture->getOrderId(), $pp_response);
    fn_change_order_status($capture->getOrderId(), $pp_response['order_status']);
}

return [CONTROLLER_STATUS_NO_CONTENT];

<?php

namespace PayPal\Core;

use PayPal\Log\PayPalLogFactory;
use Psr\Log\LoggerInterface;

/**
 * Simple Logging Manager.
 * This does an error_log for now
 * Potential frameworks to use are PEAR logger, log4php from Apache
 */
class PayPalLoggingManager
{
    /**
     * @var array of logging manager instances with class name as key
     */
    private static $instances = array();

    /**
     * The logger to be used for all messages
     *
     * @var LoggerInterface
     */
    private $logger;

    /**
     * Logger Name
     *
     * @var string
     */
    private $loggerName;

    /**
     * Returns the singleton object
     *
     * @param string $loggerName
     * @return $this
     */
    public static function getInstance($loggerName = __CLASS__)
    {
        if (array_key_exists($loggerName, PayPalLoggingManager::$instances)) {
            return PayPalLoggingManager::$instances[$loggerName];
        }
        $instance = new self($loggerName);
        PayPalLoggingManager::$instances[$loggerName] = $instance;
        return $instance;
    }

    /**
     * Default Constructor
     *
     * @param string $loggerName Generally represents the class name.
     */
    private function __construct($loggerName)
    {
        $config = PayPalConfigManager::getInstance()->getConfigHashmap();
        // Checks if custom factory defined, and is it an implementation of @PayPalLogFactory
        $factory = array_key_exists('log.AdapterFactory', $config) && in_array('PayPal\Log\PayPalLogFactory', class_implements($config['log.AdapterFactory'])) ? $config['log.AdapterFactory'] : '\PayPal\Log\PayPalDefaultLogFactory';
        /** @var PayPalLogFactory $factoryInstance */
        $factoryInstance = new $factory();
        $this->logger = $factoryInstance->getLogger($loggerName);
        $this->loggerName = $loggerName;
    }

    /**
     * Log Error
     *
     * @param string $message
     */
    public function error($message)
    {
        $this->logger->error($message);
    }

    /**
     * Log Warning
     *
     * @param string $message
     */
    public function warning($message)
    {
        $this->logger->warning($message);
    }

    /**
     * Log Info
     *
     * @param string $message
     */
    public function info($message)
    {
        $this->logger->info($message);
    }

    /**
     * Log Fine
     *
     * @param string $message
     */
    public function fine($message)
    {
        $this->info($message);
    }

    /**
     * Log Debug
     *
     * @param string $message
     */
    public function debug($message)
    {
        $config = PayPalConfigManager::getInstance()->getConfigHashmap();
        // Disable debug in live mode.
        if (array_key_exists('mode', $config) && $config['mode'] != 'live') {
            $this->logger->debug($message);
        }
    }
}
 <?php
namespace PayPal\Transport;

use PayPal\Core\PayPalHttpConfig;
use PayPal\Core\PayPalHttpConnection;
use PayPal\Core\PayPalLoggingManager;
use PayPal\Rest\ApiContext;

/**
 * Class PayPalRestCall
 *
 * @package PayPal\Transport
 */
class PayPalRestCall
{


    /**
     * Paypal Logger
     *
     * @var PayPalLoggingManager logger interface
     */
    private $logger;

    /**
     * API Context
     *
     * @var ApiContext
     */
    private $apiContext;


    /**
     * Default Constructor
     *
     * @param ApiContext $apiContext
     */
    public function __construct(ApiContext $apiContext)
    {
        $this->apiContext = $apiContext;
        $this->logger = PayPalLoggingManager::getInstance(__CLASS__);
    }

    /**
     * @param array  $handlers Array of handlers
     * @param string $path     Resource path relative to base service endpoint
     * @param string $method   HTTP method - one of GET, POST, PUT, DELETE, PATCH etc
     * @param string $data     Request payload
     * @param array  $headers  HTTP headers
     * @return mixed
     * @throws \PayPal\Exception\PayPalConnectionException
     */
    public function execute($handlers = array(), $path, $method, $data = '', $headers = array())
    {
        $config = $this->apiContext->getConfig();
        $httpConfig = new PayPalHttpConfig(null, $method, $config);
        $headers = $headers ? $headers : array();
        $httpConfig->setHeaders($headers +
            array(
                'Content-Type' => 'application/json'
            )
        );

        // if proxy set via config, add it
        if (!empty($config['http.Proxy'])) {
            $httpConfig->setHttpProxy($config['http.Proxy']);
        }

        /** @var \Paypal\Handler\IPayPalHandler $handler */
        foreach ($handlers as $handler) {
            if (!is_object($handler)) {
                $fullHandler = "\\" . (string)$handler;
                $handler = new $fullHandler($this->apiContext);
            }
            $handler->handle($httpConfig, $data, array('path' => $path, 'apiContext' => $this->apiContext));
        }
        $connection = new PayPalHttpConnection($httpConfig, $config);
        $response = $connection->execute($data);

        return $response;
    }

RUN edgarplasticos3@hotmail.com}


# PayPal Developer Docs Example Code

Examples from the official [PayPal Developer Docs](https://developer.paypal.com/).

## Introduction and Overview

This repository contains two directories:

- [Standard integration](./standard-integration/)
  - Set up standard payments on your checkout page for your buyers.
- [Advanced integration](./advanced-integration/)
  - Build and customize a card payment form to accept debit and credit cards.

**Not sure where to start?** Choose the [standard integration](./standard-integration/).

### The PayPal JavaScript SDK

These examples use the [PayPal JavaScript SDK](https://developer.paypal.com/sdk/js/) to display PayPal supported payment methods and provide a seamless checkout experience for your buyers.

The SDK has several [configuration options](https://developer.paypal.com/sdk/js/configuration/) available. The examples in this repository provide the most minimal example possible to complete a successful transaction.

## Know before you code

### Setup a PayPal Account

To get started with standard checkout, you'll need a developer, personal, or business account.

[Sign Up](https://www.paypal.com/signin/client?flow=provisionUser) or [Log In](https://www.paypal.com/signin?returnUri=https%253A%252F%252Fdeveloper.paypal.com%252Fdeveloper%252Fapplications&intent=developer)

You'll then need to visit the [Developer Dashboard](https://developer.paypal.com/dashboard/) to obtain credentials and to
make sandbox accounts.

### Create an Application

Once you've setup a PayPal account, you'll need to obtain a **Client ID** and **Secret**. [Create a sandbox application](https://developer.paypal.com/dashboard/applications/sandbox/create).

### Have Node.js installed

These examples will ask you to run commands like `npm install` and `npm start`.

You'll need a version of node >= 16 which can be downloaded from the [Node.js website](https://nodejs.org/en/download/).


## PayPal Codespaces 

PayPal codespaces require a client ID and client secret for your app. 

### Link to codespaces 

| Application | Codespaces Link |
| ---- | ---- |
| Advanced Integration v2 | [![Open in GitHub Codespaces](https://github.com/codespaces/badge.svg)](https://codespaces.new/paypal-examples/docs-examples?devcontainer_path=.devcontainer%2Fadvanced-integration-v2%2Fdevcontainer.json)|
| Advanced Integration v1 | [![Open in GitHub Codespaces](https://github.com/codespaces/badge.svg)](https://codespaces.new/paypal-examples/docs-examples?devcontainer_path=.devcontainer%2Fadvanced-integration-v1%2Fdevcontainer.json)|
| Standard Integration | [![Open in GitHub Codespaces](https://github.com/codespaces/badge.svg)](https://codespaces.new/paypal-examples/docs-examples?devcontainer_path=.devcontainer%2Fstandard-integration%2Fdevcontainer.json)|

### Learn more 

You can read more about codespaces in the [PayPal Developer Docs](https://developer.paypal.com/api/rest/sandbox/codespaces).

### Feedback

* To report a bug or suggest a new feature, create an [issue in GitHub](https://github.com/paypal-examples/paypaldevsupport/issues/new/choose). 
* To submit feedback, go to [PayPal Developer Docs](https://developer.paypal.com/api/rest/sandbox/codespaces) and select the "Feedback" tab.
by Edgar Manuel Ruiz Arias 
"EX-10.1 2 d538539dex101.htm EX-10.1
Exhibit 10.1





December 21, 2023

Gabrielle Rabinovitch

Dear Gabrielle:

This letter agreement (“Transition Agreement” or “Agreement”) sets forth the transition benefits for which you are eligible if you timely sign and do not timely revoke, (i) this Transition Agreement within the time frame provided in Section 25 of this Agreement, (ii) a waiver and general release of claims, in the form provided by the Company (the “Release”), on or within forty-five (45) days after the Transition End Date (as defined herein) and (iii) attestation(s), to the extent applicable pursuant to the terms of this Transition Agreement. Please note that the Transition Agreement and the Release each contain a waiver and release of claims against PayPal, Inc., PayPal Holdings, Inc. and their respective subsidiaries and affiliates (collectively, “PayPal” or the “Company”). The “Parties” collectively refers to you and the Company. Your last date of employment as a Senior Vice President with the Company is December 31, 2023 (“Transition Start Date”), subject to Section 6 herein. For our mutual benefit, to promote a smooth transition for both you and the Company and to permit you to maintain certain benefits of continued employment, you will transition from full- to part-time employment with the Company on January 1, 2024 and provide transition services to the Company in accordance with Section 2 during the period commencing on January 1, 2024 until and inclusive of January 31, 2024 (such period, the “Transition Period” and the last day of the Transition Period, the “Transition End Date”) and your employment with the Company shall terminate effective as of the Transition End Date. This letter confirms the details of your employment from the Transition Start Date through the Transition Period and other matters relating to your termination of employment.



1.        
TRANSITION BENEFITS. As good and valuable consideration in exchange for your timely execution and non-revocation of the general release of claims set forth in Sections 17 and 18 of this Agreement in accordance with Section 25 herein, the Company will (a) pay you a lump sum of $100, within seven calendar days following the date that the release of claims in this Agreement becomes fully effective pursuant to Section 25 herein, (b) continue to employ you with your regular salary and benefits through the Transition Start Date, except as so limited by Section 6 herein, during which time you will perform such duties as are given to you by the Company and (c) engage you to provide certain transition services during the Transition Period in accordance with Section 2 herein. Further, in exchange for timely signing and not timely revoking each of this Agreement and the Release and contingent upon (a) you complying with the policies and responsibilities of your position as a Senior Vice President through the Transition Start Date in all material respects, as determined by the Company, (b) you complying with your obligations set forth in this Agreement, and (c) your continued employment with the Company through the Transition Start Date and transition services to the Company during the Transition Period in accordance with Section 2, following the Transition End Date, you will be eligible for the benefits set forth in Sections 3 and 4. You understand and agree that the compensation and benefits provided under this Agreement constitute all the compensation and benefits to which you are entitled, and you agree to waive any and all rights, benefits and privileges to severance or transition benefits you might otherwise be entitled to receive under any other Company policy, plan, agreement or arrangement, including, without limitation, the Company’s Executive Change in Control and Severance Plan, as amended and restated, effective as of September 27, 2021 and as may be further amended from time to time (the “Severance Plan”). You understand that the payments and benefits described in this Agreement are not for wages the Company concedes it owes you and are consideration for you timely signing and not timely revoking this Agreement or the Release. All payments under this Agreement will be subject to applicable taxes and withholdings.

2.        
TRANSITION SERVICES. Provided you timely sign and do not timely revoke this Transition Agreement, during the Transition Period, the Company agrees to retain you as an officer on a part-time basis to provide transition assistance, to complete projects, and to provide such advice, expertise or knowledge with respect to your former duties prior to the Transition Start Date or other matters in which you were involved (collectively, the “Transition Services”) as may be reasonably requested in writing by the Company’s Chief Financial Officer. As a continuing officer, you will be covered by such directors and officers’ insurance coverage as in place for other directors and officers of the Company during the Transition Period. Except to the extent otherwise reasonably requested by the Company, the services you provide during the Transition Period shall be provided offsite. If you provide satisfactory Transition Services during the Transition Period, as reasonably determined by the Company in good faith, the Company will compensate you for the Transition Services by paying you a lump sum cash amount equal to $150,000 no later than sixty (60) days following the Transition End Date. During the Transition Period, to the extent the Company determines it necessary to your performance of the Transition Services, you will retain access to your Company email account and other Company electronic communications system accounts and retain use of Company Property.



3.        
ADDITIONAL LUMP SUM PAYMENT. Provided you timely sign and do not timely revoke this Transition Agreement and timely execute and do not timely revoke the Release, and contingent upon complying with the policies and responsibilities of your position in all material respects as reasonably determined by the Company in good faith through the Transition End Date, the Company will make the following lump sum payment to you: $234,375, which is the cash portion of your 2023 bonus incentive under the 2023 PayPal Annual Incentive Plan (“AIP”) with your individual performance deemed achieved at the target level. You will receive this payment at the later of (x) at or around the time that other participants of the 2023 AIP receive their 2023 AIP payout and (y) when the Release becomes effective in accordance with its terms. In addition, your AIP performance-based restricted stock units (“AIP PBRSUs”) granted on February 15, 2023 shall remain outstanding and shall vest on February 15, 2024 on the same basis and to the same extent as determined for the Company’s executive officers and shall settle at or around the same time that 2023 AIP PBRSUs settle with respect to other participants in the 2023 AIP, provided that the Release becomes effective in accordance with its terms.

You understand that the payment described in this Section is not for wages the Company concedes it owes you and is consideration for you signing and not re
PK�����!�4a›\��*���[Content_Types].xml ¢( ���������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������´”ËNÃ0E÷Hüƒå-JÜ²@5í‚Ç*Q>Àµ'­…c[öôõ÷LÒ6B¨4ˆ¶›HÉÌ½÷Œ•ñ`´®,[BLÆ»‚÷ógà”×ÆÍ
þ1yÉî9K(–Ö;(ø
¯¯“M€ÄHíRÁçˆáAˆ¤æPÉ”û�Ž*¥•Dz3¤ú”3·½ÞPÞ!8Ì°öàÃÁ”ra‘=¯éó–$‚Mœ=në¬‚Ë¬Q©.–NÿHÉv	9)›ž47!ÝPgâ`DSú5a/|£Ã‰FËˆ¯²¢6±òQíÕ¢"i~Üç�©/K£ Õ×n!z)Ñ©W6o+•4®àW„éü[ß?ä").A°sîfXÁôýbßÌ»IJ
žÈ©…ós´ÖÝH‹ÛgÿdÆæh&µŽ£‰6;þcðýêÖêŒFÑtüzm$yŸ<!Ô·‚}(\47Ýð��ÿÿ�PK�����!�*£{ð���Q���_rels/.rels ¢( ���������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������¬’ÁjÃ0@ïƒýƒÑ½QÚÁ£N/cÐÛÙ[ILÛØj×þý<Û]éaGËÒÓ“ÐzsœFuà”]ð–U
Š½	Öù^Ã[û¼x�•…¼¥1xÖpâ›æöfýÊ#I)Êƒ‹YŠÏ‘øˆ˜ÍÀå*Döå§i")ÏÔc$³£žqU×÷˜~3 ™1ÕÖjH[{ª=E¾†ºÎ~
f?±—3-ÂÞ²]ÄTê“¸2j)õ,l0/%œ‘b¬
žWZ]¯ô÷¸8±%!4!ñe¡ÏŒ‹FËÿ\Ò<ãGç=$‹ö+ü­ƒ³Ch>���ÿÿ�PK�����!�™Üºõ���6���word/_rels/document.xml.rels ¢( �����������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������¬’ËjÃ0E÷…þƒ˜}-;}PBälJ!ÛÖý�E?¨,	Íôá¿¯HiêÐ`ºðr®˜sÏ€6ÛÏÁŠwŒÔ{§ ÈrèŒ¯{×*x©¯îAkWkë*‘`[^^lžÐjNKÔõD¢8RÐ1‡µ”d:4e> K/ƒæ4ÆVm^u‹r•çw2NPž0Å®Vwõ5ˆjø¶ošÞàƒ7o:>S!?pÿŒÌé8JX[d“0KDò¼ÉjIú£ñ“Ì:‹:ðhqjp˜gûo—ìç´‹¿õ‡ñ;,f%n–”h¼ãJïíDä-äÉo/¿���ÿÿ�PK�����!�”Õs£ðo��
Þ����word/document.xmlì}sG~çÿ¿ª{SÊmvSµûù‰ÈòÃ*%Û*ÉJr—½Êö#‰0�(Ú[÷â¯gÀ€–ÌFaÕ©õí²Éæ°1„ÐŸîþLÏoºÿá¾š7ïÒj=[.¾xDŸGMZ„eœ-.¾xôæ§o›GÍzãÑÍ—‹ôÅ£_ÒúÑ?~ùßÿÛ?ÜžÇe¸¹J‹MSN±XŸß^‡/]n6×çggëp™®ÜúÉÕ,¬–ëeÞ<	Ë«³eÎ³În—«xÆ%]îzµi½.ï™[¼sëGÛÓ…Ÿ;[\¹Ûòâö„â,\ºÕ&ý<œƒž|yfÏÌû'bNTþ…Œ¾*~ò©ÔYû®Þ;‘˜t¢ò®Þ;“œv¦üãÔ´3±÷Ï¤§‰¿&3íLïátõ>àËë´(¿ÌËÕ•Û”WgWnõöæúq9ñµÛÌül>ÛüRÎIÔî4n¶x;á•WíÏpÅãÉgÐgWË˜æ<îÎ²üâÑÍjq¾}ýãýëÛ·~Þ¿~ûmÿŠ4?îÏ–?gÏÒÏ›ùz³{íê˜Ï®ù×ÛŽ¥ûÔÎVi^>Çåb}9»Þ÷WSÏV~y¹;É»û>€wWó]¹ÛkzdSû­®íë¾†óö·uw5ïßùýg¤äˆÚlO±Å1oáîßÜ½“«Bðð‡'}4.=²óÙ€½wÒ‘ƒÅîf{Ž³0´îö<³#›Õî<}­´ç™
,=²üõ›98Á:nâåIga»Ïõ¬}­Û¸K·ÞƒÞž1ö¦äþt¿\|F××¾[-o®‡³Í>îlÏ‡.ñ¶•“ÎµmP‡|ýqoæõ¥».=åU8~±X®œŸ—wTšGSoºh¿PÚo]6ýÜoëºiû˜G_«òËøKûýº¹=/V_}ñˆlÓ£Ý¡—«öà×_i­žî~²»™oÞÿÍËƒCÝ™_®ºo¯7¿ÌË{:çJ¯þSé­—åŸÑ·þå£æ¬-³ê‹®¾].6ëRÔ­Ã¬ÔÙ³åÍj–VÍé¶ý#—Oë÷†õ¯ug\ÿu÷©ÙzÖžûðàÙöOŸíßíêƒÿöÿÞãíùæËïw 4ÿ:[Äåíºù÷éº¡ä	yB-ò	'œþïöu›þÕý¿•ý‰UöÂß5C…?[®®Kko
åIót^>äW)\nRón¹òéÒÍ7iñ•þ‰Wz;Hœ¯¯](}úõ*­Óê]zôå7_÷ôUóýÓÞ|ó¢yõæùÿjž¾zþôuƒêþÔÛø³ó?¿)•¼þ³‹W³Åß^lþþâµú©×ê¿.Wo›urWó¢ló_šÛÙæ²ùn¶ùÓoòjyÕl.SSTïÊ-b3Ÿ-:îO¾ÎS¼pås[Ü¤ùêfö×ë¹[ofa¹þ§‹r;oÅþ]‘ý/ø?].7»ß¡þ?õúóúéwß «ô¯¦¹¸lþv¾ùûmŸÝŽÓÝÏëxèßóÜ]¬qé5J>”O°‡{öã«ošg?~_®C¾~
Æ+íéÜÍæò¼Ù¦§å‡´(ºâ6©í[_½˜m… T
‚_-o×i‹Â×iÑ]µ¬Òuù¤7ËÕ/Í¬?Ò—[ƒJ9Ë˜ºÃ-
Ï–‹E
›f³ìú‚b>î¢½”ÝYƒ‚Zx¶Þì‡…ïûjo¡Æk­ñÙz}³ëþw5ÞC•×ZåËÕÅ¾ïª¼s‹Ù_ûÐÔ|¥5½*~Wó×7óyñ½ÿ,-Ý|µ5¿Jóävž¿­ùí1Tz½•~½üµÍí¯ìf¨xÌ`V9ƒùÝóŸþôæ«æé³ŸžÿøÃkÌeVßÍÝ,­ù—YºmbÚ¸Ù|Ý8¿¼Ù4·ËÕÛ<_Þ¶³ÅEùu[‡ˆ«©ˆ]…wT|�ˆmŒÆÓÐ]íì‹c<ÄxXa+ùòé×_?o‡Â§/0ÖÞõ¹ùÌ­w£á³UjïèíBÐÖ—ËÕ&Üà*¿ÞÚ¿žÎì½M[t·zwwwã~ì{ù|7é*¥¡}ftžZÇ)P|—iÕöëË4Ÿü®Y‡ÕìBÅ,òl7ã¿êÝôš4åãn^-�å3M‹öé±–ÝMÝËá0š~µ·ó¯/¿M¿Ü™õÿîåwM9¶Æ,Hå•?w>Íug¿;†ö^k•¯“[…]\çëî‡np?¼éóÇmxÇ›öšw?.Â*í»vã@!Øÿ
U_mÕ¯/ßS€×¯ÿø,*ã67»éÀ—«ÙbÓì>áöº¯¿Ò†¼sí¯¶ãÂ1¡&ËÍ,·3HÝ
×®V°F(Áç€Ð;·šµ‹ÏtÝ:v÷ÏvE�îŸUØ2¾üÓ7/^6?ýøòù3Ü7«öÎIß—õCå‹rå´Ûà€6fäpq‡mÇ*…!-ÞÍVËE»ÌãyóÍðÃ0Ò5›K·i‚[4>57ë{>0‰^ñ$ú¬]ü2¦¶ø¦üÐ?×W¾ÿU_oÕ÷æ¦Œ¥ê¿ÝÿÐ,¯{ÿmgØþùõ?4íB™”ëåª½ÓÞ-,ªÅâª\No¶+Íó÷.«oÖ-#—ýÈðýlñÓOÿ,TÊÂ*å´J‹þéé§]tÅ*]¶·Wßµ\lÙ,sãæóŠmL—Ì6“/¿}ñô;\,×ÚÛ=~|™æ×Û»Œ—ËÛ¦û±Õ m·†š¯¶æ·›»ìj¾eÛ#¨sŒdŽdßüÛÓï_¾øƒY­]Úÿhû°îÖgºç%PÓ5×t{Óº	íîcåëì¬üú®¹¾¯‹”^¦ð¶’áŒ¢²a)ZÊ‹ož¾ú¡ùþÇWX›ºÖÞìÍ:5¿?nêþúü÷ÝùÕr•>ôåv—êO�L¥À¼J.vK·¶Û¸yã6M»!Ùúü¬µž'³Íåï¶"ë�Ø{§½yß]<öÍõår³\<¾¼¹Xî›ÇíííaóˆÁ­—wÖE3ùä‰(ußÞ›-6Ëæ÷}­þþÉŒ„Ÿ|ÍÞºU[³çå*?ÎV)ta›¡aÿf£n›ûêÿÓ®ÿvË¥WiS©ý—î"}µJîmÿºÍ—«tµÜ¤6œïæª]¡àñÿ§0²>o¨f‚È?6q‰Mº*èvu]ÎµøUEò»æJI{Ö~ù;TyuUÞFÞt;(ÿºÖ™¡ü¬ý‚Z¯­Ö*#ù|Û‹7ˆi¾q
R—š^¥.BWq­ö¿aœ–ß”+æ··¿¦Jj¡šÒìÝÐéÏ|Ö+/}ulANÄ“ò–¾Ÿ}Õüß†>a¬Íž­à‘�âCù[å«´^Î»ÖÑµ·¡qÅ¬>ë¿¡®¥ºß\Ç^§ólÞ>ÑW¶eŒŸµ_PÑèì*¦ÿýéÅ·“Š ÄWOüŸ{Ö[ðÁ{µUnVóæñ?7_4üÐtê»«[·JÛÙÔ³v‘3*;kï2Ï6ë³d£ ‘ò$3gÌFsòBSjæ,mŒŠ'×nðÌ\­÷¤·½ToÚl]®¾×ü[N«Ø4Oß¥U·@Ñu*‡›æ§ÙUjËî¾o3ÏnV«´ÀÂÅµR2’¾ž/]¡ãÍuÿ}T¡f±i¼HyÓý˜ð$J­Œ…îë‡³ß?>ïþû@¦+�H>uq¡¤T63š5íôÃ.{ÈW¬;þ+xÀ‡ò	6’‡³{+9•I+=‹ÙÎ
e:(íLð^êd¬ÎØ}$ÁîAÉtJFìŒÀîÉ�ÉvÏ45{,È9)ÿÑ!3ðÐ–°{Øý)vobAQÆµÊA˜$ªl½§ÎŠlS2{Ø}$ÁîAÉtJFìŒL³ûØ\[�Ô`÷”Haz»ßfyÐÌ¨=÷Ù=%oÁìv‚Ý‹Ä¸¡ÁñH0™;â,¥Š1š¢"–(ë‰ñs÷u»%Ó)I°{0‚¹{@2@²›»7t?wßfïÌÝ[#á¡-`÷°ûìÞXb³š#½‰Œ	æ¬PÚ¥tfŒDÇ4qv_I°{P2’‘»#°{@2@²µ{KÄÎî»ì!œp{m9ð�»‡ÝŸb÷Äñ`¼±TYax”Ž¢bÉy!©ñÅò“•v_I°{P2’‘»#°{@2@²ÌÑbk÷Ûì!Æ2¾ÇâžÈœ¶x€ÝW×Hî]súáÄ_î‚÷AQ›¸JApå’É^S–¤	¬4g
â_dPò”Œ$ˆ?ø’’Ý´¾Ü†äo³‡<0©º0ž1ñ§\#$â_c#yÀn#Q®“ÒÁx°Ô
Î<áÇIŽ1»¯‚$Ø=(™NÉH‚ÝƒØ=  éíž
Ú~²‡<P*»‰þQ»/åÀìv‚ÝG§,žžˆI$k!,™iOœS,Úì}äÜÖAì”L§d$ÁîÁìc÷‚íË¼‡¶x€ÝÃîO°{.Câ1e]äYQ™â9Ç`”šg¨5žØ}$ÁîAÉtJFìŒÀîÉ�É1vÏí€Å½‘9<Àîkl$™ÃUV)'N¢Šœ²(K5ê¥6^8âu&Eð=ÝWAì”L§d$ÁîÁìôv/,×[»ï³‡<H-öq÷÷ñÐ–°{Øý	vŸÚM­¨ˆÊkm”²R;-½HÄ©ìŒãA&îÁb™u»%Ó)I°{0»$$GØ½`v¿Xæý]Y<U»¯±‘<œÝËdOÒ+‘-‹B:oÍÆ%Á8ÍDò¬mô	‘9u»%Ó)I°{0»$$ÇØ½áG-–Ù–°{Øý	vï=kW©ŠÖÚ ”WŽG–l6‰;itQ{ˆ7NÃî« 	vJ¦S2’`÷`vHHz»7ÅÌ·vßgyÐÊe÷m9ð�»‡ÝŸb÷‘Ä,Ui:1•=£\È(|
’g§Šàádâ°û*H‚Ýƒ’é”Œ$Ø=Ý’’½Ý‹ÁîÅ]ŒáGñÐ–°{Øý)»YñèKµTÌ˜È§:™•šyÃ‹ÚËL“…ÝWAì”L§d$ÁîÁìc÷v˜»¿×î-æîa÷°ûÓæîYŽï5,F¨â$R½0ÁHI¼‰œDæÔAì”L§d$ÁîÁÈ4»ÿ@$F[�Ta÷ŒºÛ«¶Ëò@a{,î[³”°{Øý	vÏKIEf"cLˆÈ]â–ªè‰b1S"¢ã>H	»¯‚$Ø=(™NÉH‚ÝƒÌÝ’’#ìž	yÔnVm9ð�»‡ÝŸ²fc\{¥¬c–G)£0”ñdeŠÒiG‘$²¤`÷U»%Ó)I°{0»$$ÇÌÝk¾_ïþÞ¹ûR<Àîa÷'Ø½‰Ü[Ë(A(g×AÄ©Ñ„YfËéXï¾’`÷ d:%#	vF`÷€d€¤·{nè.î¾ÏÞ™»—ò»§TP`÷°ûìžûPÄÞ)ˆ!ží™4–hm
-fO¥†¨»¯ƒ$Ø=(™NÉH‚ÝƒØ=  ÙÎÝK#ws÷]ö®ÝkµÇâ¾Ý¬J9ð�»‡ÝŸ`÷‘¦âõšRÎd¹>Î‰•9‹Ö8–I6kcžª­|L†Ýƒ’qJFìŒÀîÉþOÏÝzó*-bZ¥ø²Œ_­’{Û¿n·Ñ» >{ˆ
Wl’Ÿø·å€
ÄâÊ·Jx®´'ÉebÊOÆS“¨Éi£¼ó’Á¸­ƒ$ˆ?(™NÉH‚øƒˆ?  éíž*»ÛÆ¶Ïò@5ëÂxFx0ÄíÀîkl$’O²^fc…&)¹¨QZ{á½—:±"ù‘ó`÷U»%Ó)I°{0»$$[»×b´ÓgïÚ½é|<üWð€ål$’/%k—ÂÏ‚Å¤£&+«RÖÊq®³Õ„(ê¬ƒÝWAì”L§d$ÁîÁìtvß®æ¡z»ßfx`ÌŠýRø÷ñ ©y`÷°ûS6º"’»`)gÁC”wDž‚HÂk+³ËÔÇ¤0w_I°{P2’‘»#°{@2@ÒÏÝKÑ†Ödy¼Äï~º'î¾-`÷°ûì^+ï™¤
¶OÁ$žˆ¦†ACt’¹"úEî=–Ó©ƒ$Ø=(™NÉH‚ÝƒØ=  ÙÅÝïËì³‡<PA÷‘9÷.…_ÊØ=ìþ»·Œew‰C¤Ö2Œq.Y\i’®d9ƒÝWAì”L§d$ÁîÁìlí^ÚÝÜ}Ÿ½c÷RÚ=¿m÷Z+Áìv‚Ýïh1{&×D8Ã<±T!‰UYk)2ñ™`±ÌÊÇdØ=(§d$ÁîÁìtvOKÚÚý6{ÀeÛUtÆxà” îv_c#y8»w:ÆL'É0šyl×À”Tx¤ BZGˆ*Â/`÷U»%Ó)I°ûÏ‡‘ûV9‡øƒŸÑ>f»áû=°ºì!Œ0¾Çâ¾=°J9ð�ñ‡øŸ´“ñ$¤D¥ÒJÉ˜¦Ê:¢µ²\ÐèX‚øWAÄ”L§d$AüÁìôÓúÄÊíRøÛì!Ö¨Î÷Çì¾-`÷°ûì^	K£w‰{­]òÊd£K”Ú;”÷"%^Ê+Ø}$ÁîAÉtJFìŒÀîÉ�É1s÷LµXf[<Àîa÷§,–écÐJY¦ƒ™)*$—’ä <•ÙÏDp¹û:H‚Ýƒ’é”Œ$Ø=Ý’’Þî9³vk÷}öÎÉ/åÀìv‚Ý§“ˆ6†˜ct.'’K^Ÿ1Ì{î<7,bî¾’`÷ d:%#	vF`÷€d€d»œŽ »¹û>{ÈUv¿þ}<´åÀìvŠÝKAu´^r’âž	½RÁ«D<'){’LLØÆ¶’`÷ d:%#	vF`÷€d€d7wo¶q÷Ûì¹{ÉŽâ¡-`÷°ûS–Ó	Î2b£µ>D©£BDIJFÍ­Ì3&Ë¬ƒ$Ø=(™NÉH‚ÝƒØ=  ÙÎÝ—·´›»ï²wæî
Ù/…FH¹{Ø}äáì^ÚHs.sætLTFe²ÜIJ’	NJ³ØÆ¶’`÷ d:%#	vF`÷€d€dk÷Ì²ÝwÙ;vÏ„ØcqÏš9B
`÷°ûì^L‘û¢øœ-¢Úí•†¥DSùŸ2a÷U»%£”LYæ|$AüÑÉ@üÉ�Év9JÉn9.{Ècz/þ÷ñÐ–ˆÿ)Ëé$F2³^‘Hˆ“¼
ßÑ†øìcŠˆœ¡Žzˆ$AüAÉtJFìŒÀîÉ�É1vÏEÆ3j÷¥x€ÝÃîOÙèJ¥˜²ö‰“œ‹áSË¸ã*FMŠrïrˆÄÂî« 	vJ¦S2’`÷`vHH¶A;\ïƒvºì!TªcBò»ràv»?)$_SHâ&FÍr°ÖO(ÏÞ&ZŽ*îƒfA;u»%Ó)I°{0»$$»nùÞî»ì»Wf¿ÑÕ}!ùm9ð�»‡ÝŸ²-a‰r›	cÁ¥ƒ%"å$¤ã1§”„·Tf…Å2ë 	vJ¦S2’`÷`vHHvvÏv‹eöÙ;vo$?†‡¶x€ÝÃîO‰ÌÉŠ[<£ÖE—8
®]WÇš(’sšë$ŒÒq÷u»%Ó)I°{0»$$ÇØ½VÇÄÝ[b,žª…Ý×ØHÎîƒçšÑ`xâ6e¢e,¹\Úó4&ëm¦YEÌÝ×Aì”L§d$ÁîÁìôv/-å[»ï³‡<(%÷‘9÷ñÀ´x`÷°ûìž™!:¦`e<K&÷D(™#)Š²ÁSµ•É°{P2NÉH‚ÝƒØ=  éí^µ³û>{Çî·«èŒñÐ–°{Øý)q÷Á‹ìlÊ<{Mñxé•‘o©¡ª\2§,
¶±­‚¤)‹œCüÐÐAüÁÄ|¼Óô‘:”Ú]ÐN—=ä2uÔ´~[<@ü!þ§,…/¼ž¤¬¢uQÊu°B„hR’ÔÙ ‰rÉ3ˆ$ÁîAÉtJFìŒÀîÉ�Év)|Ëån)ü.{È³Lì±¸g9¶x€ÝÃîO°ûäQJ0Íbt†{ª¥•íT>%Þ£¥TEï	Bòë 	vJ¦S2’`÷`vHHz»çLí¸í³wìÞØ£ìžJŠ|Ø}äçîµ3ªÄJýg®<	NS]Îkâm&fM°~$ÁîAÉtJFìŒÀîÉ�ÉÎîå.2§ÏòÀ%=j±Lð�»‡ÝŸºX¦Q†pÍ#a)IEŽ!Ð¨‘ÌF¡™tÆ+'a÷U»%Ó)I°{0»$$Û¸{awÜöÙC¨`ûÅ2ï›»—Z!2v_c#yÀml³:qžKÁ+šƒd!æU‚*®˜ÊŠ0»¯‚$Ø=(™NÉH‚ÝƒØ=  ÙÚ½$fg÷]öŽÝ+sÜFW¥x€ÝÃîO‰Ì‰Q¤hMÚ«ìµ V)«¨Œ>zÊwÒf¡ì¾
’`÷ d:%#	vF`÷€d€ä¨¹{ÒÅêŒÍÝ·åÀìv‚Ý›Ä¸LLE’5a™¯s œ²À5–g-MÒÀî« 	vJ¦S2’`÷`vHH¶vOôÛÝwÙ¬%b?wÝSjžª…Ý××Hî[Àü!CòI’’q%‹Ò©ƒ4BKo…ÖIZ–­N*LëWÄ”|%#	âF þ€d€¤Fg½øo³<0JÕ1âß(*!þÿÉÃÙ½–J:ÆS™I—åZ¸´÷,ø¨´IN3ì¾
’`÷ d:%#	vF`÷€d€¤³{#¬ØÚý6{Àƒ&FóÀmW<Àîa÷'Ø=SÔÒ@Sñxå²·ZÖÎå’±å?é„SØèªò1vJÆ)I°{0»$$}ÐŽàj´ÓgyàJtGFìž©1w»¯±‘<àFW!™’ã¾8=‰ÎØ$,·TX’£K*RE¨%v_I°{P2’‘»#°{@2@ÒÙ½¢L’Þî·Ù$ý;#vß•°{Øý	vOLæR[#s²J¥H]2.©‰+WÕ*Ê!q÷u»%Ó)I°{02Íî?gÝ�$5Ø}£¥ÝmcÛgïÌÝ"÷Xô°!`÷Õ7’‡³ûØî^+’ Ž£²æ:rnRt2K—<'\`÷•É°{P2NÉH‚ÝƒØ=  ÙFæ(½»ßfïØ=ïÍÝ‹®`÷°ûÓžªÕ1™‹âk¡¼
‘Åœ¼”1ÅÈMV9ãDv°û*H‚Ýƒ’é”Œ$Ø=™f÷ˆÌ©Ùîµ»¸û>{Èƒ0ü˜¸ûÆR…¸{Ø}äŸªµVå`8	Á&aˆ‘š9é˜ôÎMb
’$“ì¾
’`÷ d:%#	vF`÷€d€äˆ1…ÒûÈœ{xèÊØ=ìþ»ÏTDÏUÒVZG•§Ò[£Ñ,Xš“:Ÿ)"sê 	vJ¦S2’`÷`vHHv‘9Vî#sÚì¹{­â¡-`÷°ûS¶±•Ô'EÁ)ÁŒ6^R%µ2F&‚öNä1w_I°{P2’‘»#Óìq÷5Û½%mðÍAönß‹ÌùÐSµŒp‹ÈØ}ä!ížQN2Ñ4Hí#%ÖQáã"3Îlô:‘”†ÝWAì”L§d$ÁîÁæîÉ�ÉvÍ-vs÷}öiØ1+bvåÀìvÊŠ˜ÖE‰ÐAz¨š0%y^ÂçRžm„ÝWAì”L§d$ÁîÁæîÉ�Iw/l»¤ýAö€JÌq+b2F1w»¯±‘<àš9,8³u,+Î<^šìs2Ìfm£ŒL¨ ’…ÝWAì”L§d$ÁîÁìlãî-ßÇÝwÙC˜êgóÇæîÛràv»?e½{é‰F{\"Ô¤¤y`TH"˜KÒE¯4‘
s÷u»%Ó)I°{0»$${»·ƒÝÛ»<0¥ù‹ß¶{¦”Õàv»?ÅîcpT3!H$Ä°ÀyÖ*ÇFùÄh"[»¯‚$Ø=(™NÉH‚ÝƒØ=  éížËVØ²‡<Pi,î‰Ì)ÿ,`÷°ûì^x™´íB9,ˆ¨Yd)
!¹UŠr)…
‘—a÷U»%Ó)I°{0òQv¯a÷UA2wëÍ«´ˆi•âË2~|µJîmÿºmH>a„oCòûìi}©»ÅñÄ_•¶PøCüO*œ Â«(¤¡™M2IB•×:Ké
ç™xˆ$AüAÉtJFÄŒLÿ÷3]@ò©‹K7—ßØvÅœƒìT?Ñ`÷Ú±–#$v_c#y8»WÔhj]Tkh*‘“ãNEk•9	B‚ÝWAì”L§d$ÁîÁÈGMëi´�Ég`÷Ìè==|ÈðPÊØ=ìþ»—Ú“´òÉp!¸	™f!i`13!½R2eÍ…‚ÝWAì”L§d$ÁîÁæîÉ�Io÷”¨Ýr:}öVóÀ­bJÀîa÷56’ß´û¿i>ÚïSLB;ÇSæZ³Hm”TibU‚Y©´U,/á÷u°ôuyýW)§Ëyóèo5³õ¦)òu[0X5ÙÍ×á²¹HåkùC>-še9ŽJÿÔ+ýír±Ø¤f1—›R½ùfKÝÞ–K·´x‚êÅ ‰Aó¤A“3Xž‡ìU^{Ê?^iM²RFPâsO²UÂMš41hbÐüˆA3˜¨¥V‚™ìmù?Y^ÆH!Œ±¡/#¦7.A³–0hbÐÄ ‰AƒæÇìf$½ÎI-,å„E¥C*ƒ¥*º¬¹+‡a‚cÐ¬ƒ%š41hbÐü|Í¿ÎÔ‚¹ÈL2š·ƒ¥–0Ãbö<J*“h†Ì*HBÄ"(™NÉHBÄ"AÄ"  Ùn"¥ÞmÒeyZu›†ŒñÐ–°{Øý)‹ë¢d‚‹2ÞF¯S”+gR»	`»ˆ°v_I°{P2’‘»ÿ|¹o}Xˆ?øíc¶*)Év*uÙC¨äÝÒ#*uåÀÄâ‚ø;©Û½731Ö
c	ÞEMMYT]žBü« 	âJ¦S2’ þ`dšÝc™±ªíÞŠýB]öšýzáî
Ø–°{Øý)q®ZP’’*»O$e)™c"ûì¥‰:+«„¡Ø"¤’`÷ d:%#	vF0wHHz»g¤öƒì¹{n:ß›»°{Øý©s÷‚©OYg^¾Ï™#!¥OR0JE2¥Ufe`÷U»%Ó)I°{0‚¹{@2@²µ{ËéÎî»ì,{,îÙ"DQŽ¹{Ø}äáìžˆ uš[j„pRê ¬72IÆŒöD³ì"±XØ©’`÷ d:%#	vF>Êî1W[¥ÝS£Å.2§ËþÊî,î‹Ì)åÀìv‚Ý3*5×Qˆ¤rQy©dòÙ‰TÜdí²¡™%l�XI°{P2’‘»#°{@2@ÒÛ½¦Úní¾Ïò x‰³ýé·#s8QËéÀîkl$g÷Y†,HŽTÉ³"É,’òìu9‹¬	CdN$ÁîAÉtJFìŒL³{ÄÝWm÷Dïžªí³‡<èí*:c<´åÀìvÊæÞ,%¯SZ
ªˆ¡&1k©±‰PgbL6eÊa÷•É°{P2NÉH‚ÝƒØ=  éí^‘9}öÎõ1s÷”£ÀìvÊRøÔ+ë£uÎª”MŠF§¸,½¶µÉ;©¼ñIØ}$ÁîAÉ(%S–9It2ÓÄA;5‹?¥œïBò»ìL¿ÀÎˆøwåÀÄâ‚øû¬8‹¶4:Ñš‹˜¼ŒÖXk\VI–ƒâ_IP2’‘»#°{@2@rŒÝK3`ñÛv/•’àv_c#yÈiý¨xP‘šä¡^&™rR2Éub.‰@¤ÏØèª’`÷ d:%#	vF¦Ù=‚v*¶{Ê˜Ýíl³‡<X),î™»oËØ=ìþ»WŽ)Æ”ÓÉsO²v‚x®¹WTjŒ×9èì}„ÝWAì”L§d$ÁîÁìôs÷V[½»ï³wìžÐÎ÷Gí¾”°{Øý)ÛØ¡çÙx!¨áL%'SÒíW^G­
ŒäŒü:H‚Ýƒ’é”Œ$Ø=Ý’’mdŽ»mlûì!TÙ.VgŒ‡¶x€ÝÃîOÚÆ–yç(ÉV&%LÐ$:I… >qê—Šé¤
–Â¯ƒ$Ø=(™NÉH‚ÝƒØ=  éíž3¾[
¿ÏòÀ¹:j±Ì¶x€ÝÃîO°{š™aB¨ ³É9"J.ê -×‘Y—Bù½v_I°{P2’‘»#°{@2@rŒÝK}ÜÜ½–oÁìþs²{ðŽªEÕ~jU[®¾w}=ÿ¥Œ^³‹År•ß^Î6©“¥&Ù(H¤<ÉÌ3†Ñœ¼Ð”Z§9KDÆ£Üu`rZ}Ÿ3}ÞlVn6Ÿ-.š›'�á“Wá'Mó|±.—Äóæzv
ýÌZ¶àhÙ¸¨AëøÖ!Ð:>³¹ä¿¤Ÿ¯—«MóâÙ<}ñâ‹Giño^?yóÓ·Í£¿ Þ?³@Rt�5‚0mo†¿´Ña¾\¤Ñ›ÚOÊ/Ð]|vÝ®“ë½NþÞ½MÍæ2µ=ÀMlfWmìAù4›§ß?G
úM}µZ®Î›®!7¹´áÏ›PÞPZlÎÒâ,.Ãúñ;y6ëgKÜf¶\<¾¸™ÅtæofóØ6ùŽ‰uÿóãeaeõøÎ¡Žœí¡'WñœRpS	7LÊ–Ë¸Lëf±ÜNåž1xð¡|‚-jâ=,+9•I+=‹ÙÎ
e:(íLð^êd¬Î`‡õJ09­¾q«ZpëónÙ¸‡=BëøÍÖ{Xu‚€{Xè�Žé�pëóë�p£
}Â½}.†ë½Æªªk¸tÞ‹ÒlÏ›õÞ¤y¸L±Qm¸énH¬QÏÕÔ3¥Mé§Óºq1¾_ÑhÑ˜æ¨ÿ©w¬Q,(Ê¸öAY#D•­ÿì}ûoÇ•õ¿Òkÿ°I RU·Þ6ÀÚ‰½þ°N¿A@·ªn‘
g˜yHÖþõ_õ¦$ZT2”½1»!ÉÃžîžaÝsÎ}UWeÍÉ¶$µ¸–ÑwÀ·¹c…zÚPØTml†'­=‘–êUR>esBu"09ÎÞg¤4Nßödñ“/þüÍÐ³‰ò|{H/år½y5ðªg«ÅnÁËÅÿÊõ[ÏåU^ó¦>9ü´-‘Õ“Ã™‡™LÃ•lWý/·§Ãÿ\ÈêpÞáÚbU¯oÒ›ín¸è·êbûüú^y½Þ
ãB=²99ùüOß
ŸýÝ'*r²ëiívX¿ÍéðÙf}y¸àëoO¯¿þŒýjÑ=?êà>~yyøØCùkø´Åo‡ž~YÞîú?|üFÊºßô7_~òõoßùëoÆ³®x³[Œ3»†u»>ÚO]_žp)²Ýþ8zùÕ°ßæ{õ{lêé0Žt•‹2~æª'æ›'Ã¾x2\mÖ/µÄõ©ÃËÅîâpãºYôß¹ß
+‘ñ7[7Ÿrxûúnãü3^Œ	ÃëïØýÞ¾ê¿Úåéð_²‘ï ¸àÝáŒÛáº³ìÑ¯«}.eµïV^w¤.Ï¥ØðÕÁÅ
a‡q[ô¯W¯e•ãêÖh¼Ú¥ß¶ñáí¯ÿóËªÎ mÓI£Yô˜D,@L�™À}™@L*µd•èr¬D–zîì÷ä94"U™‚bL`09ÎÞgDÈ	ük2‡L�™À«È mÈ	�ýÿúš	(6%æ˜´O6šêXG]ª'álŽ¹Gˆ’–âwÀ;Ü	ÑpÉ¹xÄx)Öx–ØrÐ$.ê6/Á6©›LŽ³7úiSÂ»'fÿúSë7ÙÞâÜ¯^ï[»ê÷¿|‰�Y7´ð—tŠx˜w¢@ø·¿Žºü%yS>þö›ÓÓ§ýÏÍb8ç›}>Ï<Ï<}ÔéÕêü·@ÃcGÃm1Ž0¹ýƒAy„èèävfU]1A¬s©X2%éd
eeŠ)lTµLD((L&ÇÙ…ÉaŒœV²{¹Þ<ÆrBOâžŒ.=ÕÚ²âžu×1¾IºžÛ]ÏÇî¦0pÙ
cÞµ=þ²Þß¤Æ‡7ïÜúuF}}U½Íáú}÷ý3y;<»yëäæÚúìÉëcÙ®—/d<6&wÏnÎ)»å3€}T¡ÛÜB·Ê>™šµ2¢¢¨¬MÚ6
Y1{ª©å\Á³UÉqöFè6Y  t5`Dè†Ð
¡Û‘¡›qELmÊ'®¦ym*yÓZ-Ñçtä¨SÌª t›LŽ³7B·É¡Àø«#B7„nÝŽm˜ß¼41ªúj4U×mXtv!fË*‡¦º7Ï
¡Û4`rœ½ÏÈ!t›&>þxøïø›~«"XunÄ6Øôb²Ä~“Ùþþ3˜tfÜÆvOSæö÷_Ž}¾—íî‹>Œ0êÌØíPMpH.y~>ZöÓëýW={ÿ¬{¿A>;ª{éÓ¥ú×ûÕ›$ÿ’W{^bËò	õ!Üú CcP!úØ‡qm«Ï!Dï“\¶¢Ø7ŽlŠÃ^a=Õ‰Àä8{£1Y  1kb£1]b£1on£1en£1ov£1å}Pý–êèCL˜êèCLÔ¶èCüL†Æ <Bô?°á$z#.{ÛUë8GÒ-²X2º)gZH5eLŽ³7ú“úS²ç{—€?’óhQL—óhQÌÛŸ£E1en£E1ov£E1åh-
Pý–êhQL˜êhQLÔ¶hQüL†Æ <Bô?°E‘3Qr±¦”Š÷Ù³©$©E1ìbènÑ•#´(¦“ãìÕ6'„	}º^µÅù~Ã‡=_ÿø_^-‘íÌŽã&‚ã3áøg|~·Ÿnårµ\ÞÉðåhlÐ{vôvôž,½ÿt³j=<÷©í5¨=Uj<<ûëÁeÿíÌùØÍyÛ{Øþ}/Ë†ÕA›Ÿ6`èÉZGt™>ÈÒ”Gÿ‡v™ªªÍyŸL!ò-“6ÖU›¥8ÓØ÷ÈÇZvbÐešLŽ³7ºL“ºLà8ºL3ã8jUs$8ºL&8ºLs§7ºL¦7ºLs¦6ºLÓ¥6ºL2'ºLs34ºLhiÊ#„ÿ»LÁÔÜÿ_ƒóc¥htåšg(GÓc×´$t™¦“ãì.Ód€.8Ž.ÓÌ8ŽZÕ	Ž.Ó„	Ž.ÓÜé.Ó„é.Óœ©.Ót©.Ó„Ì‰.ÓÜ.ÓZƒòáÿÐg™¨YÖ1³Õ‘¤ÒÞ¨ªmÍ6–èœÊ±e±bÞD`rœ½Ñeš,z”ûÝ–Ï–œ¥(=QJ_õ%Ì83>£I
Kþš-ùÞ÷nËU‹Â�åJÜ«THÄWŠ•ˆ¬­†Å$íkVžjÓÊV6¹8‡ªÅ4`rœ½Qµ˜,Í•Ò¨ZL•Ò¨ZÌÏ¨ZÀEÃ’¿nK¢4ñ3ƒòÑÿÀÒ„#2!{Ÿ˜’©ÎU5INªãÀÊ+§*‰Gib09ÎÞ(MLˆ{æJi”&¦Ji”&fÈg”&à¢aÉ_·%Qšø™Ay„è`i"V“S"M¶XÏ‰s(¶–ªcP”(õ\fe5JÓ€ÉqöFib²@èqÏ7_ýñÓÃR°æÌhm,h=YZz!åù°hÝ¨Ï{n3,¶Ã¶û~©0ðÌ˜îP¸˜ÓWÃâr$úo‡ûåJ6œ»Íw,C4;Ê{åçàÜ?ýþ£cÿlñüúüHŽe§Kòo×¯yþ”~ÏÝ«á»«Ê»±ª½‘á?_tËsFæ>¡®Åk‘ý¤k3OÆÌÍ©24å¢ÿÍ)“K‡btVE•M™\L*„u‡´Ë6*ßÐœšLŽ³7šS“šSs¦5æÎN—ÖhNé·LÇ¬ÚY0Í)PþGÊ[4§fáÜÑœš3ÉÑœš.ÉÑœš¹o»]‹24å¢ÿ]‹ª¥»É µ!§µmbŠo†jŠL”¤b²Ø>e*09ÎÞèZLèZÌ™ÖèZÌ#çáá«×‹oÐ¸˜#Ù­ÙgAö¿ô[_ºÿÅÛá{t/æÍ{ÞÏÄÉ£1gž#˜ŸÏÑÀ˜²¹ÿ¹MÖ^?xC?ím�ñ·vèa}¡1(ýÝLÏÛl|ÈJ¸©ØŠYGÑl…Cô™³#e©`3=pÜ¹»¤¢j©f×zB”×¢£!Ûœ³BBÕ˜VÀpÜ¹óÄ§s4îsÞ,U	žtl>yiÁ³1¡¥ ”×œÜwÀ·¹“•3\’6T²ŠªGiÊ#ÅŠÍ!¹ÆMç*~Üwîp'øœ)U5&9R¢QAG­.•»Kê4êÔÉXi`"09ÎÞ˜³7Y üÛ_¿½ár]m!uøüOß
ŸýÝ'ƒÔ®—²Úÿí7§§O¯ÿžbÜ>=ßì3*2žs2žsR.xu.W/O¯Vç¿(;(nKÆúP2+Æ[”ŒB!„zO•ˆZ1,ºg.„¢)•™%¥ÂZ)î/
!„šLŽ³÷™Æ”Š¹‡PˆŸ?!~Bü„øé]ñ“Ê¬»/%Ç9(Ë‘²JÚëTò-g›ÊMá±QpÜ¹Ëµ6ÍFI$ÝL'¨8m3gµu‰•òNÜ™LŽ³7Ê·“Âs‡Ü¹ø	ñÓµ[•UÑÎo£#
Ú'N¥¦äºsÕ•I?;àÎÛÜñ6é€ŠÉ!°d[ªS&ô ´øœ­ˆ±ž<¸3
˜goä“ú@ÄÛˆ@îø	ñÓ±ÓÖs-ÁûD¡ÛÈkëŒsª›µk¹{Ö¢¬±È=&“ãìøi²@øøãáÿõÛ¬xYvK˜sn¼Æ|°éòúÓåz_O«îøÿ{}ŽETæFnlì5arój»\ŸÃ”3ã´
àôd9=zé¡ÞðõW_~3¬WÃW‡ì¶}ì¶½-IZ¬~öA†Æ <Bô?°$)µŠ­©–Újen¢ZíJV‘r6œM¤Š–îD`rœ½ñ(Ûd€’ä4ƒôcüÌýï]ûú¡q‘³:Ô”ÉE¼ÉdCÍÞ—ìEe£¤e%±
Vç›‚z\t”½ÏUßéÆEhéÌ›Üåßé’-YrÚzp-ØöqÙö¶ªaÐÒù CcP!úºBHáD*Õ”r©Î[ÒÖV§úkƒI®P&²«ë€;àÎî¸T•'æfˆCíª-WÃN÷p²°sª¶y‚;à¸ó6wºw‘Ø©Ó	dŒ
.z¸fí"‰hé5Å
î€;àÎ'…T£”½ªJ±3cô¢Ê­‡jä•m"J³Îà¸îÜYÑÇK•²ÕZçNdØx‰¤X‹×&s+U%pÜwîæ;ASQbb­ZI‰UVÚ´œzÀf¢7¹bÄlà¸sw5,E¢MjŠ¨DåCIÊJëØÔ¯‰ÍI»æ1EÜwîÆlÍ›D%“N\YŒ.<ÜR¬V˜ƒ	b£„|Üwîp§dH—hÄ$)>ÖqISn*&ÊºJÊ©éæ+ü¸îÜáE×X©P¥D¯É4G¶ç8Êz×*©¶–Q+˜
LŽ³÷™·˜%;îaæP‚óaÇíäCÂäC nèhQ´dÛ8I3­'£±;—}(U—œtÔž‚•æ"&‚;àÎÝI 6Û’•4_W«´	%Y[jqšSqÊ³dl+î€;wŸ×Ï¢¼·¨VŽ&ëà’}V™KÎùN…¢(¸îÜõ;cÑ^¨·ŸUá Sí.ˆsP9•k
“@Àpçn#;ú¨L0UQÒTµ­–¢k(ÊQª6ã˜=;pÜwîL>Œœ‚Ó˜¤d¯[qTj“êµ·ÚO¾y…íÁÉrç—Xº,×j¥&Ö²o9X•¼O^»škÖ†3»Ô¬W h5QZ=˜;QÈ8!_UOx¨QÉ¡e4Ã:&Ó‚µZ\wÀpçN*¤Ä92±:ªŽ}©ÅE\N6q‰Zö|³ð;à¸s‡;ÁyÇDÝó4r,Q›`YJÈ¹» êC°âŠÑ
ÜwÀ;sz½Nºhé,ñÜr
.Òè‡¬RãJHŽ-{´MÁpç'mÓ"Ñ‰°É1ªrLb“IÚ&Õ*‹¯Ú+”wÀpçmî¨ØŒ)º&É{©ºÇm\”Š·¾MQ©ˆ|Üwîp§Ž3
¬XÍZEß‚	Õ˜(•]ëéO6Êøè
¸3˜gï3£ñ¤	Dt6ìÀæ]@?BˆcK¦¡J,­û•`}ö¥Rm’«R+)ÝcrŽlfü‚;àÎÝ’iJ¾•hT)IlTÑbÇä2§T•â”D)à¸î¼Í¦mÍÆKH.±öY»œb ¨$Ýˆ\’›Fê:˜go¤®å²©+ÐâØY¦Ng	ÍÖRØ[Š!f§½\Ï]m	¹'®¥"üwÀŸp‡´QM]\ÈU«”Y&2¶‘¡TsÕ
v7wÀŸÌXH½V6—}ÑÖEÞ™b³µÊxcŠÖ¦%<è
î€;wÛ
TXÕ–˜š7ãBËÙÅ–›DJ-¤êzÜæ‹¬;˜go”}ÊôÙá"Øv€ïf‡;À°ãvv€`Ç=ì °ì˜
;nÛÍÛ¿ïeY.¤ö§íf€2vNØ{*7/ôÿkÂU—•·1dSX”Ž"ÁÒÖ)K,ŽköA9ÎÏ$´ûýqö>³Ø÷l¢@øËz?^u/ºÝ
»6rÕGs·îwÞùÕ°ßŽ6ßy¶««vx<ùÙPÖ——¼ª§Ã·ãñ¶XîºîÜÜcÛíÙ?v±»žÉŠóRê³'Ã³ºØþøº_9<ãåòÙéðõ~5:óÃ¥77=\ºÞï†í•”E{5¾Ý¿%oÎ÷—²ÚõOØí7«ëO»¹ÿ[ßüÈœ™D¡4U |Û9¾\^v¡êÝ°ØWë«ý’wr­Cåm³¾|[Á^=úˆò_^-’0¬;î}˜¡1(ýMíjaÈZU•ŠTŒ).%ÏT”>i±¶%,Yî€;w¸c³kÑ¥ñé*¶ª$ÕZg’÷Ú8gS©&2–]LŽ³÷¥€¤c’H~¸\žlù]m¤KÇùè÷ÃÍ'Ã³““*W²ªÛ']8duÁ«"‡×ë¼]/ewýÃÕfýbQ¯_od¬m\_²‘¿ï›ñø¯ú©2žµÝŸŸËvw¸b»ïÂ$c½cûìlèú5¦7ýß+Þð¥\W[Ö×•›ë2É¢'D×_KVe!ˆ„g¨H˜+†¸ô¸‡F¡J8Q$üîwY_­·¯Våw¿;¾½Xlo›	ãÁ‹Ízµøß±fÔ}îåz÷fðºŠÈ7UÆõJN‡O^uOz°æ“—ËîsËs>/ßô”zýrµ\síî¶;à¯«Ý—Ãíö«¥lÍ‰Wýâp}5ÈÝOŸ¾Ú-Ö«~ÇWO†îÃùPºì_•—Ûõ÷ ç'MÒ4íëþ:‚Úz¹\¿Í¼>¨ÁöZÞh¢W1?úc¢îK	‡BÂX/¸Íð{0p-cl1†*/dX/ëëdwÁ»C²ZïÆZÀnX·;ÏW¯†Ëõð™PÓóõ”fJ˜Ó<aC‹ööYƒòáÿÀ¶lµÍ¾Zu#ek”(A)ísÍ¹i*£E7
˜gï3VOß®‡¶XÕCä{(ÀÉ“a³_]OU¾>PvËÛiÊH©§ a-YÄGˆþ¹øÈëtb±:.ºZ/ªUaÃ¾¦hµkb]éñÑ$`rœ½MˆæfqÄGˆ¹U”à³Dc­‰¥éf.TY—½wÒ‚±ñÑ4`rœ½MˆæfqÄGˆý$>úxx„$Ul`6ÒLTuªNû ’¯ÖRr>$OUe‡i@ùC¿þir±>úø£a|¼HV»—›¡ñr[.†séÿöÊ²Öý8ŒþØþ|½ZídX-ÊÅ®›·íÇgÈ†—²éÿƒG„Gœ"æì
¥ž/–lJË^lî)eé¿™A5ï£Õ*·j#ŸPàááááïóˆ%ÖàÂ¸WmË©ÿ•dº´6ÆTúñîsä¢,<â€òÞˆá,á,á,á,á,ïÝ*Ôe¶Ì.Ø¤¢êC‘î$ƒõ•[0ÜEÖÀYN(ðˆðˆðˆðˆóõˆÿ y–¸R”Ìè	]IŠ"Õ–MSZ±²¾©	þÜwî¬PkW×ƒE[J#›SÍAšÕÆs”q§„q™‘\¸3
˜gï3Âzw‚>¾Xmw‡µéWÃ¸Ì]]—çý®tjN<7¦cáW„K`Ç=ì0ðƒ`Øq;4Ø1I Ü¿öà³1­,ËõJ†“<ô€q¸Øí®¶gOŸö7.öù´¬/Ÿ¾¸|Éyz‹žö7žs“i€ãœ
;Þ±Ø¦ÅZ›¶sÂR›P¹¹¡ÿ½v|0MÅ”lLV•Ì5hÒRŒJ•ª?¼Öè5L&ÇÙûŒ°‚=Dì¸‡¨@NÿTÅ•Yh6¨‡Gœ/ú˜V„`µÉÕ×îHEIsŽ˜lË-»XCóÉÛ¨±‚ÿD`rœ½‘V<”é³iÒ
¤Ð„75Á¢g9v¼Þ7I7Ð?7ô?´—gu÷$ÒB3ýß’
±*µûq–´¶µRÍG$Ýà¸ó6w”-¾h&éh-;ŠM9:qD1d¨qU	‹;àÎîvÁ„j­øÖ‰â¼“ÜbôU9obÜÆ]=ÛmL&ÇÙå¬Éáã‡O×«¶8ßoúˆ^ñ°Ýw‘X^í†±¸µ(#ÏíØ\!Øq;¬;À°ãv8°ì�;îaG�;ÀŽÙ°ãmƒç6§fè÷®;ÿº
Ñ†ÎMXo®4«ZÕÞ•b)YqR’±N›Æ¬¹5Û‚"ô'“ãì}f0ùz¢@@=l¿ËvT2÷²ÓªÁ°ã>v âv€÷±3ÀŽù°õø¹EwèÜüàÿÀ¢»HL>8«½Š:
¥¤c¥9Ö*Iš6(ºO&ÇÙûÌ¢è>Q  è¶ße»CÑ!Øq;Pt;ÀŽûØ¢;ØvÜÇÝÁŽù°ãEwÒ(ºOØÐäQt‡ÎÍ
þ,º[}Ê51'/-¶âueo\/%Éì|ŽY¼BÑÜwÞæNnÞPMÚ˜PE…`l•ìjŠ)En¾£VBIà¸îÜõ;Õ›âkOV³W:;qÒŠuŽœ	B,¶(—vÍ›LÁ÷Ùp°æÐx±”z6”þ…dµ{*«§u]¶'/ÜÓŠÛÝ†w‹õêä|¿¨òô’W|Þcû“•ì^®7ÏOÊM»ðpÒÓzóŒkžì·?½ìäp;Ùœ^Ö3­­‰@ë_¦t×uÏ=Wëõ¾ ]÷£m±Ú^IÙ'ì.äd»ãÝ~{²n·§/«çÛ“—‹ÝÅ‡Ên9‚- Êõó`	Â5ká*ëË­:âCN6Òd#«"oþ¢_µi=rßÞl¢s<)ËÅ­íÿb#ç{ÞÔè<½à¦«g¿
ˆAæŸýße‚†�
©%ðõ/’®kH™À;ß]©zäPzï€?¯Š+¨Të—CW @	¤éÿO”GH²¶è=“'ò$›¬Z`«²	&{”Ž1‡VBË¹¢E?
˜go<Gð` `P¦ÏoÁ°ì¸‡xBì�;îcG;¦	}:X¿\-×\^Õa±Úîx¹v2üéûE]ððõ~Õ}ÀoÞ’
Ì>3þðÂüÿôBÊóaÑœÿü«ï†Åv¨²“²“z:|Ã—W}´×ûÝÕ~w‹?v‹¿ãñs­ðøù„
­?ÿ KcP!üØcÅúbL‹ÙZ
ya'´¶’]a|!Õ?ŸLŽ³÷™Ñˆ„'ªcÜ£ÜCü×¼\Ÿ²Úm^ýí7»ÝÕöìéÓñØöôÅew¬rZÖ—O_l¯.d#OI‘yªÜS^­ÖûU[þ7³(×Ûw¢NÎe%^žð‹ŽÎ=»W§»Ëåo›é„Y‡(k²¶ˆ²e!ÊzO”Å–2³V-9ñ6– *;m­Êbt&ã<	Ñ#ÊšLŽ³÷™Wˆ²&	„á‡ËåÙÁ–ÿñÑÕFÆµôå£ß¿nAÈ[MˆþÓŒµõr¹~9B¡_øœÏeÛm†ïò~µÛ£"9;q@
†ì¸Ø”f^®óËZw7É«aÝ³ÏC
šå|±“Òa\ZcxÆW»“sÙ
'¯~ô¬ÏÆßö¢{Ýƒ+Í²Ûõo·ì×Ý'�—¹é†ƒnÌJ7~*
Ãó+Þì~è’Û~+'U^Œ¯7Âõ°ÆÍÏÛír|	`ÌM!0	q÷|Øñ®m0MfÂv˜%•›úØ¿Ñ"Yë‹k±µb•í¯j(!™P)±”þ¾+ý›iÀä8{£3U  L|°8 ƒì¸èßÌËu¢¸üºþÍ¼tý(Äq
þ
âîù°ý›™Ùý¨ÜìÐÿþþMg€ÿÈmüÞ…ôoÅï¿?^.z
eØÈÕ²_ò«áÓ¯û‹ÕÐCC_4“t´–Å¦8¢²
Ô¸ªd¯CE`æÑëÂ·cße1ŽæˆŠ~!Ã¢™õfq¾XñòºÎÔQÕÁ³òªæ0.P>&u±‘²[o°üøt¢£$±RtM’÷R5Kä¢\Pl|O1‹¦¨T¼Y€@ÌK G¯•
ÅåJØ®ä)6[«Œ7¦hmZºY1€@ÌK 2÷ A“ã”åHY%íŠu*ù‚³MåÖõ€@ÌP ´õòƒü ÿ,ÉÏVÛì«uQ7R¶F‰”Ò>‡ÐœËÑ˜!@  ˆ9
ÄQ“Y Ä¬‚´]
¬ßT çä£¯Êy[à6r³Z˜—@xtÑâû·ç–Sp=` ­R©ÿqlÙgÔ  ˆy
„ÍÆ‡¬„›Šý§˜uÍV8DŸ9;R–b@  óˆè+ª”è5™æÈz“•õ®Uê'ÛZZT	€@ÌQ Rò­D£JIb£Š.;&—9Ë'JqJ¢1G($â+ÅJDÖVÃb’ö5+Oµie+›\RbŽaœ#Ö17KU‚'›O^ZðlLh)(å5'†@@  ³ˆ"¦6åWÓ¼6•¼i­–ès
:rÔ)f…
# Standard Integration Example

This folder contains example code for a Standard PayPal integration using both the JS SDK and Node.js to complete transactions with the PayPal REST API.

## Instructions

1. [Create an application](https://developer.paypal.com/dashboard/applications/sandbox/create)
2. Rename `.env.example` to `.env` and update `PAYPAL_CLIENT_ID` and `PAYPAL_CLIENT_SECRET`
3. Replace `test` in [client/checkout.html](client/checkout.html) with your app's client-id
4. Run `npm install`
5. Run `npm start`
6. Open http://localhost:8888
7. Click "PayPal" and log in with one of your [Sandbox test accounts](https://developer.paypal.com/dashboard/accounts)