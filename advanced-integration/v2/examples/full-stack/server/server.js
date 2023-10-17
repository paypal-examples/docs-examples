app.get("/", async (req, res) => {
  const clientId = process.env.PAYPAL_CLIENT_ID;
  res.render("checkout", { clientId });
});