# Save Payment Method Example

This folder contains example code for a PayPal Save Payment Method integration using both the JS SDK and Node.js to complete transactions with the PayPal REST API.

[View the Documentation](https://developer.paypal.com/docs/checkout/save-payment-methods/during-purchase/js-sdk/paypal/)

## Instructions

1. [Create an application](https://developer.paypal.com/dashboard/applications/sandbox/create)
2. Rename `.env.example` to `.env` and update `PAYPAL_CLIENT_ID` and `PAYPAL_CLIENT_SECRET`
3. Replace `test` in [client/app.js](client/app.js) with your app's client-id
4. Run `npm install`
5. Run `npm start`
6. Open http://localhost:8888
7. Click "PayPal" and log in with one of your [Sandbox test accounts](https://developer.paypal.com/dashboard/accounts)
