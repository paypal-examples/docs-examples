# Advanced Integration Example

This folder contains example code for [version 2](https://developer.paypal.com/docs/checkout/advanced/integrate/) of a PayPal advanced Checkout integration using the JavaScript SDK and Node.js to complete transactions with the PayPal REST API.

Version 2 is the current advanced Checkout integration, and includes hosted card fields.

## Instructions

1. [Create an application](https://developer.paypal.com/dashboard/applications/sandbox/create)
2. Rename `.env.example` to `.env` and update `PAYPAL_CLIENT_ID` and `PAYPAL_CLIENT_SECRET`.
3. Replace `test` in [client/checkout.html](client/checkout.html) with your app's client-id
4. Run `npm install`
5. Run `npm start`
6. Open http://localhost:8888
7. Enter the credit card number provided from one of your [sandbox accounts](https://developer.paypal.com/dashboard/accounts) or [generate a new credit card](https://developer.paypal.com/dashboard/creditCardGenerator)

## Examples

The documentation for advanced Checkout integration using JavaScript SDK includes additional sample code in the following sections:

- **3. Adding PayPal buttons and card fields** includes [a full-stack Node.js example](v2/examples/full-stack/).
- **4. Call Orders API for PayPal buttons and card fields** includes [a server-side example](v2/examples/call-orders-api-server-side/)
- **5. Capture order** includes [a server-side example](v2/examples/capture-order-server-side/)
