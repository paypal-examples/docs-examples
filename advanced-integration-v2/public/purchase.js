const createOrder = () =>
  fetch("/api/orders", {
    method: "POST",
    // use the "body" param to optionally pass additional order information
    // like product skus and quantities
    body: JSON.stringify({
      cart: [
        {
          sku: "<YOUR_PRODUCT_STOCK_KEEPING_UNIT>",
          quantity: "<YOUR_PRODUCT_QUANTITY>",
        },
      ],
    }),
  })
    .then((response) => response.json())
    .then((order) => {
      const orderId = order.id;

      document
        .getElementById("create-order-info")
        .textContent = `SUCCESS: ${orderId}`;

      return orderId;
    })
    .catch((error) => {
      document.getElementById("create-order-info").textContent = `ERROR: ${error}`;
    });

let approved = 0
const onApprove = ({ orderID }, actions) => {

  if (approved === 0) {
    approved = approved + 1
    return actions.restart()
  }

  return fetch(`/api/orders/${orderID}/capture`, {
    method: "post",
  })
    .then((response) => response.json())
    .then((orderData) => {
      // Successful capture! For dev/demo purposes:
      console.log(
        "Capture result",
        orderData,
        JSON.stringify(orderData, null, 2)
      );
      const transaction = orderData.purchase_units[0].payments.captures[0];

      document
        .getElementById("capture-order-info")
        .textContent = `Transaction ${transaction.status}: ${transaction.id}`;
    });
}

const onError = (error) => {
  console.error(error);

  document.getElementById("general-error").textContent = `ERROR: ${error}`;
};

paypal
  .Buttons({
    // Sets up the transaction when a payment button is clicked
    createOrder,
    // Finalize the transaction after payer approval
    onApprove,
    onError,
  })
  .render("#paypal-button-container");

// Create the Card Fields Component and define callbacks
const cardField = paypal.CardFields({
  createOrder,
  onApprove,
  onError,
});

// Render each field after checking for eligibility
if (cardField.isEligible()) {
  const nameField = cardField.NameField();
  nameField.render("#card-name-field-container");

  const numberField = cardField.NumberField();
  numberField.render("#card-number-field-container");

  const cvvField = cardField.CVVField();
  cvvField.render("#card-cvv-field-container");

  const expiryField = cardField.ExpiryField();
  expiryField.render("#card-expiry-field-container");

  // Add click listener to submit button and call the submit function on the CardField component
  document
    .getElementById("multi-card-field-button")
    .addEventListener("click", () => {
      cardField.submit();
    });
}
