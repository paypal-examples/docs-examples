// @snippet:start("baseFile", "baseFile")
import express from "express";
import "dotenv/config";
import {
  ApiError,
  Client,
  Environment,
  LogLevel,
  OrdersController,
  PaymentsController,
} from "@paypal/paypal-server-sdk";
import bodyParser from "body-parser";

const app = express();
app.use(bodyParser.json());

const {
  PAYPAL_CLIENT_ID,
  PAYPAL_CLIENT_SECRET,
  PAYPAL_SELLER_PAYER_ID,
  PAYPAL_BN_CODE,
  PORT = 8080,
} = process.env;

const client = new Client({
  clientCredentialsAuthCredentials: {
    oAuthClientId: PAYPAL_CLIENT_ID,
    oAuthClientSecret: PAYPAL_CLIENT_SECRET,
  },
  timeout: 0,
  environment: Environment.Sandbox,
  logging: {
    logLevel: LogLevel.Info,
    logRequest: { logBody: true },
    logResponse: { logHeaders: true },
  },
});
const ordersController = new OrdersController(client);
const paymentsController = new PaymentsController(client);

// @snippet:start("getAuthAssertionToken", "getAuthAssertionTokenStandardNode")
function getAuthAssertionToken(clientId, merchantId) {
  const header = {
    alg: "none",
  };
  const body = {
    iss: clientId,
    payer_id: merchantId,
  };
  const signature = "";
  const jwtParts = [header, body, signature];

  const authAssertion = jwtParts
    .map((part) => part && btoa(JSON.stringify(part)))
    .join(".");

  return authAssertion;
}
//@snippet:end
// @snippet:start("createOrder", "createOrderStandardNode")
/**
 * Create an order to start the transaction.
 * @see https://developer.paypal.com/docs/api/orders/v2/#orders_create
 */
const createOrder = async (cart) => {
  const collect = {
    body: {
      intent: "AUTHORIZE",
      purchaseUnits: [
        {
          amount: {
            currencyCode: "USD",
            value: "100",
          },
          payee: {
            merchantId: PAYPAL_SELLER_PAYER_ID,
          },
        },
      ],
      shipping: {
        options: [
          {
            id: "001",
            type: "SHIPPING",
            label: "ground",
            selected: true,
            amount: {
              currencyCode: "USD",
              value: "0",
            },
          },
          {
            id: "002",
            type: "SHIPPING",
            label: "Expedite",
            selected: false,
            amount: {
              currencyCode: "USD",
              value: "100",
            },
          },
        ],
      },
    },
    paypalAuthAssertion: getAuthAssertionToken(
      PAYPAL_CLIENT_ID,
      PAYPAL_SELLER_PAYER_ID
    ),
    paypalPartnerAttributionId: PAYPAL_BN_CODE,
    prefer: "return=representation",
  };

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
// createOrder route
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

// @snippet:start("captureOrder", "captureOrderStandardNode")
/**
 * Capture payment for the created order to complete the transaction.
 * @see https://developer.paypal.com/docs/api/orders/v2/#orders_capture
 */
const captureOrder = async (orderID) => {
  const collect = {
    id: orderID,
    paypalAuthAssertion: getAuthAssertionToken(
      PAYPAL_CLIENT_ID,
      PAYPAL_SELLER_PAYER_ID
    ),
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
// captureOrder route
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
// @snippet:start("authorizeOrder", "authorizeOrderStandardNode")
/**
 * Authorize payment for the created order to complete the transaction.
 * @see https://developer.paypal.com/docs/api/orders/v2/#orders_authorize
 */
const authorizeOrder = async (orderID) => {
  const collect = {
    id: orderID,
    paypalAuthAssertion: getAuthAssertionToken(
      PAYPAL_CLIENT_ID,
      PAYPAL_SELLER_PAYER_ID
    ),
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
// @snippet:end
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
// @snippet:start("captureAuthorize", "captureAuthorizeStandardPhp")
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
// @snippet:end
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
// @snippet:start("refundCapturedPayment", "refundCapturedPaymentStandardNode")
const refundCapturedPayment = async (capturedPaymentId) => {
  const collect = {
    captureId: capturedPaymentId,
    paypalAuthAssertion: getAuthAssertionToken(
      PAYPAL_CLIENT_ID,
      PAYPAL_SELLER_PAYER_ID
    ),
    prefer: "return=minimal",
  };

  try {
    const { body, ...httpResponse } =
      await paymentsController.capturesRefund(collect);
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
// refundCapturedPayment route
app.post("/api/payments/refund", async (req, res) => {
  try {
    const { capturedPaymentId } = req.body;
    const { jsonResponse, httpStatusCode } =
      await refundCapturedPayment(capturedPaymentId);
    res.status(httpStatusCode).json(jsonResponse);
  } catch (error) {
    console.error("Failed refund captured payment:", error);
    res.status(500).json({ error: "Failed refund captured payment." });
  }
});
app.listen(PORT, () => {
  console.log(`Node server listening at http://localhost:${PORT}/`);
});

//@snippet:end