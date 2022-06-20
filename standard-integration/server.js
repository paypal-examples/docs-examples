import "dotenv/config"; // loads variables from .env file
import express from "express";
import * as paypal from "./paypal-api.js";

const app = express();

app.use(express.static("public"));

app.post("/api/orders", async (req, res) => {
  try {
    const order = await paypal.createOrder();
    res.json(order);
  } catch (err) {
    res.status(500).send(err.message);
  }
});

app.post("/api/orders/:orderID/capture", async (req, res) => {
  const { orderID } = req.params;
  try {
    const captureData = await paypal.capturePayment(orderID);
    res.json(captureData);
  } catch (err) {
    res.status(500).send(err.message);
  }
});

app.listen(8888);
