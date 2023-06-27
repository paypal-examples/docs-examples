const createVaultSetupToken = (data) => {
  let paymentSource;

  if (!data) {
    paymentSource = "card";
  } else {
    paymentSource = data.paymentSource;
  }

  return fetch("/api/vault/setup-token", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      paymentSource,
    }),
  })
    .then((response) => response.json())
    .then((vaultResponse) => {
      console.log(vaultResponse);
      const vaultSetupToken = vaultResponse.id;
      document.getElementById(
        "create-setup-info"
      ).textContent = `SUCCESS: ${vaultSetupToken}`;

      return vaultSetupToken;
    })
    .catch((error) => {
      document.getElementById(
        "create-setup-info"
      ).textContent = `ERROR: ${error}`;
    });
};

const onApprove = ({ vaultSetupToken }) =>
  fetch(`/api/vault/payment-token/${vaultSetupToken}`, {
    method: "post",
  })
    .then((response) => response.json())
    .then((vaultPaymentResponse) => {
      // Successful capture! For dev/demo purposes:
      console.log(
        "Vault Payment result",
        vaultPaymentResponse,
        JSON.stringify(vaultPaymentResponse, null, 2)
      );

      document.getElementById(
        "create-payment-info"
      ).textContent = `SUCCESS: ${vaultPaymentResponse.id}`;
    })
    .catch((error) => {
      document.getElementById(
        "create-payment-info"
      ).textContent = `ERROR: ${error}`;
    });

const onError = console.error;

paypal
  .Buttons({
    // Sets up the transaction when a payment button is clicked
    createVaultSetupToken,
    // Finalize the transaction after payer approval
    onApprove,
    onError,
  })
  .render("#paypal-button-container");

// Create the Card Fields Component and define callbacks
const cardField = paypal.CardFields({
  createVaultSetupToken,
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
