const baseUrl = {
    sandbox: "https://api-m.sandbox.paypal.com",
  };

  export async function generateAccessToken() {
    try {
      const auth = Buffer.from(`${process.env.CLIENT_ID}:${process.env.CLIENT_SECRET}`)
        .toString("base64");
      const response = await fetch(`${baseUrl.sandbox}/v1/oauth2/token`, {
        method: "POST",
        body: "grant_type=client_credentials",
        headers: {
          Authorization: `Bearer ${auth}`,
        },
      });

      const data = await response.json();
      return data.access_token;
    } catch (error) {
      console.error("Failed to generate Access Token:", error);
    }
  }

  // create an order
  export async function createOrder(paymentSource) {
    const purchaseAmount = "100.00"; // TODO: pull amount from a database or session
    const accessToken = await generateAccessToken();
    const url = `${baseURL.sandbox}/v2/checkout/orders`;
    const response = await fetch(url, {
      method: "POST",
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
              value: purchaseAmount
            },
          },
        ],
        payment_source: {
          [paymentSource]: {}
        }
      }),
    });
    const data = await response.json();
    return data;
  }