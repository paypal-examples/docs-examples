# PayPal Developer Docs Example Code

Examples from the official [PayPal Developer Docs](https://developer.paypal.com/).

## Introduction and Overview

This repository contains two directories:

- [Standard integration](./standard-integration/)
  - Set up standard payments on your checkout page for your buyers.
- [Advanced integration](./advanced-integration/)
  - Build and customize a card payment form to accept debit and credit cards.

**Not sure where to start?** Choose the [standard integration](./standard-integration/).

### The PayPal JavaScript SDK

These examples use the [PayPal JavaScript SDK](https://developer.paypal.com/sdk/js/) to display PayPal supported payment methods and provide a seamless checkout experience for your buyers.

The SDK has several [configuration options](https://developer.paypal.com/sdk/js/configuration/) available. The examples in this repository provide the most minimal example possible to complete a successful transaction.

## Know before you code

### Setup a PayPal Account

To get started with standard checkout, you'll need a developer, personal, or business account.

[Sign Up](https://www.paypal.com/signin/client?flow=provisionUser) or [Log In](https://www.paypal.com/signin?returnUri=https%253A%252F%252Fdeveloper.paypal.com%252Fdeveloper%252Fapplications&intent=developer)

You'll then need to visit the [Developer Dashboard](https://developer.paypal.com/dashboard/) to obtain credentials and to
make sandbox accounts.

### Create an Application

Once you've setup a PayPal account, you'll need to obtain a **Client ID** and **Secret**. [Create a sandbox application](https://developer.paypal.com/dashboard/applications/sandbox/create).

### Have Node.js installed

These examples will ask you to run commands like `npm install` and `npm start`.

You'll need a version of node >= 16 which can be downloaded from the [Node.js website](https://nodejs.org/en/download/).


## PayPal Codespaces 

PayPal codespaces require a client ID and client secret for your app. 

### Link to codespaces 

| Application | Codespaces Link |
| ---- | ---- |
| Advanced Integration v2 | [![Open in GitHub Codespaces](https://github.com/codespaces/badge.svg)](https://codespaces.new/paypal-examples/docs-examples?devcontainer_path=.devcontainer%2Fadvanced-integration-v2%2Fdevcontainer.json)|
| Advanced Integration v1 | [![Open in GitHub Codespaces](https://github.com/codespaces/badge.svg)](https://codespaces.new/paypal-examples/docs-examples?devcontainer_path=.devcontainer%2Fadvanced-integration-v1%2Fdevcontainer.json)|
| Standard Integration | [![Open in GitHub Codespaces](https://github.com/codespaces/badge.svg)](https://codespaces.new/paypal-examples/docs-examples?devcontainer_path=.devcontainer%2Fstandard-integration%2Fdevcontainer.json)|

### Learn more 

You can read more about codespaces in the [PayPal Developer Docs](https://developer.paypal.com/api/rest/sandbox/codespaces).

### Feedback

* To report a bug or suggest a new feature, create an [issue in GitHub](https://github.com/paypal-examples/paypaldevsupport/issues/new/choose). 
* To submit feedback, go to [PayPal Developer Docs](https://developer.paypal.com/api/rest/sandbox/codespaces) and select the "Feedback" tab.
