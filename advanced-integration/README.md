# Advanced Checkout Integration Example

This folder contains example code for a PayPal advanced Checkout integration using both the JavaScript SDK and Node.js to complete transactions with the PayPal REST API.

* [`v2`](v2/README.md) contains sample code for the current advanced Checkout integration. This includes guidance on using Hosted Card Fields.
* [`v1`](v1/README.md) contains sample code for the legacy advanced Checkout integration. Use `v2` for new integrations.

## Instructions

These instructions apply to the sample code for both `v2` and `v1`:

1. Rename `.env.example` to `.env` and update `PAYPAL_CLIENT_ID` and `PAYPAL_CLIENT_SECRET`.
2. Run `npm install`
3. Run `npm start`
4. Open http://localhost:8888
5. Enter the credit card number provided from one of your [sandbox accounts](https://developer.paypal.com/dashboard/accounts) or [generate a new credit card](https://developer.paypal.com/dashboard/creditCardGenerator)
