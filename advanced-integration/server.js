import "dotenv/config";
import express from "express";
import bodyParser from "body-parser";
import * as paypal from "./paypal-api.js";

const { PORT = 8888 } = process.env;

const handleError = (res, error) => {
  console.error(error);
  res.status(error.status || 500).send(error.message);
};

const app = express();
app.set("view engine", "ejs");
app.use(express.static("public"));
app.use(bodyParser.json());

app.get("/", async (req, res) => {
  const clientId = process.env.CLIENT_ID;
  try {
    res.render("index", { clientId });
  } catch (err) {
    handleError(res, err);
  }
});

app.get("/purchase", async (req, res) => {
  const clientId = process.env.CLIENT_ID;
  try {
    res.render("purchase", { clientId });
  } catch (err) {
    handleError(res, err);
  }
});

app.get("/vault", async (req, res) => {
  const clientId = process.env.CLIENT_ID;
  try {
    res.render("vault", { clientId });
  } catch (err) {
    handleError(res, err);
  }
});

// create order
app.post("/api/orders", async (req, res) => {
  try {
    const order = await paypal.createOrder();
    res.json(order);
  } catch (err) {
    handleError(res, err);
  }
});

app.post("/api/vault/setup-token", async (req, res) => {
  try {
    const { paymentSource } = req.body;
    const vaultSetupToken = await paypal.createVaultSetupToken({
      paymentSource,
    });
    res.json(vaultSetupToken);
  } catch (err) {
    handleError(res, err);
  }
});

app.post("/api/vault/payment-token/:vaultSetupToken", async (req, res) => {
  try {
    const { vaultSetupToken } = req.params;
    const paymentToken = await paypal.createVaultPaymentToken(
      vaultSetupToken
    );
    res.json(paymentToken);
  } catch (err) {
    handleError(res, err);
  }
});

// capture payment
app.post("/api/orders/:orderID/capture", async (req, res) => {
  const { orderID } = req.params;
  try {
    const captureData = await paypal.capturePayment(orderID);
    res.json(captureData);
  } catch (err) {
    handleError(res, err);
  }
});

app.listen(PORT, () => {
  console.log(`Server listening at http://localhost:${PORT}/`);
});
