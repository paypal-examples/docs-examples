# Advanced Integration Example

This folder contains example code for [version 2](https://developer.paypal.com/docs/checkout/advanced/integrate/) of an advanced Checkout PayPal integration using the JavaScript SDK and Node.js to complete transactions with the PayPal REST API.

Version 2 is the current advanced Checkout integration, and includes Hosted Card Fields.

## Instructions

1. [Create an application](https://developer.paypal.com/dashboard/applications/sandbox/create)
2. Rename `.env.example` to `.env` and update `PAYPAL_CLIENT_ID` and `PAYPAL_CLIENT_SECRET`.
3. Replace `test` in [client/checkout.html](client/checkout.html) with your app's client-id
4. Run `npm install`
5. Run `npm start`
6. Open http://localhost:8888
7. Enter the credit card number provided from one of your [sandbox accounts](https://developer.paypal.com/dashboard/accounts) or [generate a new credit card](https://developer.paypal.com/dashboard/creditCardGenerator)
