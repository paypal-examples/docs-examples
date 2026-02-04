# Standard Integration Sample Application - PHP

This sample app demonstrates how to integrate with ACDC using PayPal's REST APIs.

## Before You Code

1. **Setup a PayPal Account**

   To get started, you'll need a developer, personal, or business account.

   [Sign Up](https://www.paypal.com/signin/client?flow=provisionUser) or [Log In](https://www.paypal.com/signin?returnUri=https%253A%252F%252Fdeveloper.paypal.com%252Fdashboard&intent=developer)

   You'll then need to visit the [Developer Dashboard](https://developer.paypal.com/dashboard/) to obtain credentials and to make sandbox accounts.

2. **Create an Application**

   Once you've setup a PayPal account, you'll need to obtain a **Client ID** and **Secret**. [Create a sandbox application](https://developer.paypal.com/dashboard/applications/sandbox/create).

## How to Run Locally

1. Add your API credentials to the environment:

   - **Windows (powershell)**

     ```powershell
     $env:PAYPAL_CLIENT_ID = "<PAYPAL_CLIENT_ID>"
     $env:PAYPAL_CLIENT_SECRET = "<PAYPAL_CLIENT_SECRET>"
     ```

   - **Linux / MacOS**

     ```bash
     export PAYPAL_CLIENT_ID="<PAYPAL_CLIENT_ID>"
     export PAYPAL_CLIENT_SECRET="<PAYPAL_CLIENT_SECRET>"
     ```

2. Follow the below instructions to setup & run server.

## Install the Composer

We'll be using Composer (https://getcomposer.org/) for dependency management. To install Composer on a Mac, run the following command in the terminal:

```bash
brew install composer
```

Composer can be downloaded for Windows from this link: https://getcomposer.org/download/.

## To install the dependencies

```bash
composer install
```

## To run the application in development, you can run this command

```bash
composer start
```

Afterward, open http://localhost:8080 in your browser.

That's it!
