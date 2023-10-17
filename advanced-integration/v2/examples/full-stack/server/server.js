app.get("/", async (req, res) => {
  const clientId = process.env.CLIENT_ID;
  res.render("checkout", { clientId });
});