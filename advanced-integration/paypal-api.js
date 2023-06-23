import fetch from "node-fetch";

// set some important variables
const { CLIENT_ID, APP_SECRET } = process.env;
const base = "https://api-m.sandbox.paypal.com";

export const createOrder = async () => {
  const purchaseAmount = "100.00"; // TODO: pull prices from a database
  const accessToken = await generateAccessToken();
  const url = `${base}/v2/checkout/orders`;
  const response = await fetch(url, {
    method: "post",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${accessToken}`,
    },
    body: JSON.stringify({
      intent: "CAPTURE",
      purchase_units: [
        {
          amount: {
            currency_code: "USD",
            value: purchaseAmount,
          },
        },
      ],
    }),
  });

  return handleResponse(response);
};

export const capturePayment = async (orderId) => {
  const accessToken = await generateAccessToken();
  const url = `${base}/v2/checkout/orders/${orderId}/capture`;
  const response = await fetch(url, {
    method: "post",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${accessToken}`,
    },
  });

  return handleResponse(response);
};

export const createVaultSetupToken = async ({ paymentSource }) => {
  const paymentSources = {
    paypal: {
      description: "Description for PayPal to be shown to PayPal payer",
      usage_pattern: "IMMEDIATE",
      usage_type: "MERCHANT",
      customer_type: "CONSUMER",
      experience_context: {
        shipping_preference: "NO_SHIPPING",
        payment_method_preference: "IMMEDIATE_PAYMENT_REQUIRED",
        brand_name: "EXAMPLE INC",
        locale: "en-US",
        return_url: "https://example.com/returnUrl",
        cancel_url: "https://example.com/cancelUrl",
      },
    },
    card: {
      experience_context: {
        shipping_preference: "NO_SHIPPING",
      },
    },
  };

  const response = await fetch(`${base}/v3/vault/setup-tokens`, {
    method: "post",
    headers: {
      "PayPal-Request-Id": Date.now().toString(),
      "Content-Type": "application/json",
      Authorization: `Bearer ${await generateAccessToken()}`,
    },
    body: JSON.stringify({
      payment_source: {
        [paymentSource]: paymentSources[paymentSource],
      },
    }),
  });

  return handleResponse(response);
};

export const createVaultPaymentToken = async (vaultSetupToken) => {
  const response = await fetch(`${base}/v3/vault/payment-tokens`, {
    method: "post",
    headers: {
      "PayPal-Request-Id": Date.now().toString(),
      "Content-Type": "application/json",
      Authorization: `Bearer ${await generateAccessToken()}`,
    },
    body: JSON.stringify({
      payment_source: {
        token: {
          id: vaultSetupToken,
          type: "SETUP_TOKEN",
        },
      },
    }),
  });

  return handleResponse(response)
};

export const generateAccessToken = async () => {
  const auth = Buffer.from(CLIENT_ID + ":" + APP_SECRET).toString("base64");
  const response = await fetch(`${base}/v1/oauth2/token`, {
    method: "post",
    body: "grant_type=client_credentials",
    headers: {
      Authorization: `Basic ${auth}`,
    },
  });
  const jsonData = await handleResponse(response);
  return jsonData.access_token;
};

const handleResponse = async (response) => {
  if (response.status === 200 || response.status === 201) {
    return response.json();
  }

  const error = new Error (await response.text())
  error.status = response.status
  throw error;
};
