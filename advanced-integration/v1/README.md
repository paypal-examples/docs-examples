# Advanced Integration Example

This folder contains example code for [version 1](https://developer.paypal.com/docs/checkout/advanced/integrate/sdk/v1) of a PayPal advanced Checkout integration using the JavaScript SDK and Node.js to complete transactions with the PayPal REST API.

> **Note:** Version 1 is a legacy integration. Use [version 2](https://developer.paypal.com/docs/checkout/advanced/integrate/) for new integrations.

## Instructions

1. [Create an application](https://developer.paypal.com/dashboard/applications/sandbox/create).
2. Rename `.env.example` to `.env` and update `PAYPAL_CLIENT_ID` and `PAYPAL_CLIENT_SECRET`.
3. Run `npm install`.
4. Run `npm start`.
5. Open http://localhost:8888.
6. Enter the credit card number provided from one of your [sandbox accounts](https://developer.paypal.com/dashboard/accounts) or [generate a new credit card](https://developer.paypal.com/dashboard/creditCardGenerator).
