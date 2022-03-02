import "dotenv/config";
import express from "express";
import * as paypal from "./paypal-api.js";

const app = express();
app.set("view engine", "ejs");
app.use(express.static("public"));

// render html page with client id & token
app.get("/", async (req, res) => {
  const clientToken = await paypal.generateClientToken();
  res.render("index", { clientId: process.env.CLIENT_ID, clientToken });
});

// create order
app.post("/api/orders", async (req, res) => {
  const order = await paypal.createOrder();
  res.json(order);
});

// capture payment
app.post("/api/orders/:orderID/capture", async (req, res) => {
  const { orderID } = req.params;
  const captureData = await paypal.capturePayment(orderID);
  res.json(captureData);
});
