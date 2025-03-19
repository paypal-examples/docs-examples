// @snippet:start("baseNodeJs", "baseFile")
import express from "express";
import "dotenv/config";
import {
  ApiError,
  CheckoutPaymentIntent,
  Client,
  Environment,
  LogLevel,
  OrdersController,
  PaymentsController,
  PaypalExperienceLandingPage,
  PaypalExperienceUserAction,
  ShippingPreference,
} from "@paypal/paypal-server-sdk";
import bodyParser from "body-parser";

const app = express();
app.use(bodyParser.json());

// @snippet:start("generateAccessToken", "generateAccessToken")
const { PAYPAL_CLIENT_ID, PAYPAL_CLIENT_SECRET, PORT = 8080 } = process.env;

const client = new Client({
  clientCredentialsAuthCredentials: {
    oAuthClientId: PAYPAL_CLIENT_ID,
    oAuthClientSecret: PAYPAL_CLIENT_SECRET,
  },
  timeout: 0,
  environment: Environment.Sandbox,
  logging: {
    logLevel: LogLevel.Info,
    logRequest: {
      logBody: true,
    },
    logResponse: {
      logHeaders: true,
    },
  },
});
// @snippet:end

const ordersController = new OrdersController(client);
const paymentsController = new PaymentsController(client);

// @snippet:start("createOrderServer", "createOrder")
/**
 * Create an order to start the transaction.
 * @see https://developer.paypal.com/docs/api/orders/v2/#orders_create
 */
const createOrder = async (cart) => {
  // @snippet:start("createOrderPayload", "createOrderPayload")
  const collect = {
    body: {
      intent: "{order_intent}",
      purchaseUnits: [
        {
          amount: {
            currencyCode: "{order_currency_code}",
            value: "{order_value}",
          },
          // lookup item details in `cart` from database
          items: [
            {
              name: "T-Shirt",
              unitAmount: {
                currencyCode: "{order_currency_code}",
                value: "{order_value}",
              },
              quantity: "1",
              description: "Super Fresh Shirt",
              sku: "sku01",
            },
          ],
          // @snippet:start("shippingWrapper", "shippingWrapper")
          shipping: {
            // @snippet:start("handleShippingAddress", "handleShippingAddressOptions")
            options: [
              {
                id: "001",
                type: "SHIPPING",
                label: "ground",
                selected: true,
                amount: {
                  currencyCode: "{order_currency_code}",
                  value: "0",
                },
              },
              {
                id: "002",
                type: "SHIPPING",
                label: "Expedite",
                selected: false,
                amount: {
                  currencyCode: "{order_currency_code}",
                  value: "10",
                },
              },
            ],
            // @snippet:end
            // @snippet:start("contactModule", "contactModule")
            emailAddress: "{email_address}",
            phoneNumber: {
              countryCode: "{country_code}",
              nationalNumber: "{national_number}",
            },
            // @snippet:end
          },
          // @snippet:end
          // @snippet:start("paymentSource", "createOrderPayloadPaymentSource")
          paymentSource: {
            paypal: {
              experienceContext: {
                // @snippet:start("serverSideShippingCallback", "serverSideShippingCallback")
                landingPage: PaypalExperienceLandingPage.Login,
                shippingPreference: ShippingPreference.GetFromFile,
                orderUpdateCallbackConfig: {
                  callbackEvents: ["SHIPPING_ADDRESS", "SHIPPING_OPTIONS"],
                  callbackUrl: "REPLACE_WITH_YOUR_CALLBACK_ENDPOINT",
                },
                // @snippet:end
                // @snippet:start("userAction", "userAction")
                userAction: PaypalExperienceUserAction.PayNow,
                // @snippet:end
                // @snippet:start("returnCancelUrl", "returnCancelUrl")
                returnUrl: "https://example.com/returnUrl",
                cancelUrl: "https://example.com/cancelUrl",
                // @snippet:end
                // @snippet:start("enableAppSwitch", "enableAppSwitch")
                email: "customer@example.com",
                appSwitchPreference: {
                  launchPayPalApp: true,
                },
                // @snippet:end
              },
            },
          },
          // @snippet:end
        },
      ],
    },
    prefer: "return=minimal",
  };
  // @snippet:end

  try {
    const { body, ...httpResponse } =
      await ordersController.ordersCreate(collect);
    // Get more response info...
    // const { statusCode, headers } = httpResponse;
    return {
      jsonResponse: JSON.parse(body),
      httpStatusCode: httpResponse.statusCode,
    };
  } catch (error) {
    if (error instanceof ApiError) {
      // const { statusCode, headers } = error;
      throw new Error(error.message);
    }
  }
};
// @snippet:end

// @snippet:start("captureOrder", "captureOrder")
/**
 * Capture payment for the created order to complete the transaction.
 * @see https://developer.paypal.com/docs/api/orders/v2/#orders_capture
 */
const captureOrder = async (orderID) => {
  const collect = {
    id: orderID,
    prefer: "return=minimal",
  };

  try {
    const { body, ...httpResponse } =
      await ordersController.ordersCapture(collect);
    // Get more response info...
    // const { statusCode, headers } = httpResponse;
    return {
      jsonResponse: JSON.parse(body),
      httpStatusCode: httpResponse.statusCode,
    };
  } catch (error) {
    if (error instanceof ApiError) {
      // const { statusCode, headers } = error;
      throw new Error(error.message);
    }
  }
};
// @snippet:end

app.post("/api/orders", async (req, res) => {
  try {
    // use the cart information passed from the front-end to calculate the order amount detals
    const { cart } = req.body;
    const { jsonResponse, httpStatusCode } = await createOrder(cart);
    res.status(httpStatusCode).json(jsonResponse);
  } catch (error) {
    console.error("Failed to create order:", error);
    res.status(500).json({ error: "Failed to create order." });
  }
});

app.post("/api/orders/:orderID/capture", async (req, res) => {
  try {
    const { orderID } = req.params;
    const { jsonResponse, httpStatusCode } = await captureOrder(orderID);
    res.status(httpStatusCode).json(jsonResponse);
  } catch (error) {
    console.error("Failed to create order:", error);
    res.status(500).json({ error: "Failed to capture order." });
  }
});

// @snippet:start("authorizeOrder", "authorizeOrder")
/**
 * Authorize payment for the created order to complete the transaction.
 * @see https://developer.paypal.com/docs/api/orders/v2/#orders_authorize
 */
const authorizeOrder = async (orderID) => {
  const collect = {
    id: orderID,
    prefer: "return=minimal",
  };

  try {
    const { body, ...httpResponse } =
      await ordersController.ordersAuthorize(collect);
    // Get more response info...
    // const { statusCode, headers } = httpResponse;
    return {
      jsonResponse: JSON.parse(body),
      httpStatusCode: httpResponse.statusCode,
    };
  } catch (error) {
    if (error instanceof ApiError) {
      // const { statusCode, headers } = error;
      throw new Error(error.message);
    }
  }
};

// authorizeOrder route
app.post("/api/orders/:orderID/authorize", async (req, res) => {
  try {
    const { orderID } = req.params;
    const { jsonResponse, httpStatusCode } = await authorizeOrder(orderID);
    res.status(httpStatusCode).json(jsonResponse);
  } catch (error) {
    console.error("Failed to create order:", error);
    res.status(500).json({ error: "Failed to authorize order." });
  }
});

/**
 * Captures an authorized payment, by ID.
 * @see https://developer.paypal.com/docs/api/payments/v2/#authorizations_capture
 */
const captureAuthorize = async (authorizationId) => {
  const collect = {
    authorizationId: authorizationId,
    prefer: "return=minimal",
    body: {
      finalCapture: false,
    },
  };
  try {
    const { body, ...httpResponse } =
      await paymentsController.authorizationsCapture(collect);
    // Get more response info...
    // const { statusCode, headers } = httpResponse;
    return {
      jsonResponse: JSON.parse(body),
      httpStatusCode: httpResponse.statusCode,
    };
  } catch (error) {
    if (error instanceof ApiError) {
      // const { statusCode, headers } = error;
      throw new Error(error.message);
    }
  }
};

// captureAuthorize route
app.post("/api/orders/:authorizationId/captureAuthorize", async (req, res) => {
  try {
    const { authorizationId } = req.params;
    const { jsonResponse, httpStatusCode } =
      await captureAuthorize(authorizationId);
    res.status(httpStatusCode).json(jsonResponse);
  } catch (error) {
    console.error("Failed to create order:", error);
    res.status(500).json({ error: "Failed to capture authorize." });
  }
});
// @snippet:end

// @snippet:start("callbackServer", "callbackServerNode")
app.post("/api/shipping-callback", async (req, res) => {
  const { id, purchase_units } = req.body;
  const jsonResponse = {
    id,
    purchaseUnits: purchase_units.map((unit) => {
      return [
        {
          referenceId: unit.reference_id,
          amount: {
            currencyCode: unit.amount.currency_code,
            value: unit.amount.value,
            breakdown: {
              itemTotal: {
                currencyCode: "{order_currency_code}",
                value: "{order_value}",
              },
              taxTotal: {
                currencyCode: "{order_currency_code}",
                value: "0.00",
              },
              shipping: {
                currencyCode: "{order_currency_code}",
                value: "3.00",
              },
            },
          },
          shippingOptions: [
            {
              id: "1",
              amount: {
                currencyCode: "{order_currency_code}",
                value: "0.00",
              },
              type: "SHIPPING",
              label: "Free Shipping",
              selected: true,
            },
            {
              id: "2",
              amount: {
                currencyCode: "{order_currency_code}",
                value: "7.00",
              },
              type: "SHIPPING",
              label: "USPS Priority Shipping",
              selected: false,
            },
            {
              id: "3",
              amount: {
                currencyCode: "{order_currency_code}",
                value: "10.00",
              },
              type: "SHIPPING",
              label: "1-Day Shipping",
              selected: false,
            },
          ],
        },
      ];
    }),
  };

  res.statusCode(200).json(jsonResponse);
});
// @snippet:end

app.listen(PORT, () => {
  console.log(`Node server listening at http://localhost:${PORT}/`);
});
// @snippet:end
