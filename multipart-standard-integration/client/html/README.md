# Standard Integration with PayPal : HTML/JS

## Getting Started

This guide will walk you through setting up and running the HTML/JS Standard Integration locally.

### Before You Code

1. **Setup a PayPal Account**

   To get started, you'll need a developer, personal, or business account.

   [Sign Up](https://www.paypal.com/signin/client?flow=provisionUser) or [Log In](https://www.paypal.com/signin?returnUri=https%253A%252F%252Fdeveloper.paypal.com%252Fdashboard&intent=developer)

   You'll then need to visit the [Developer Dashboard](https://developer.paypal.com/dashboard/) to obtain credentials and to make sandbox accounts.

2. **Create an Application**

   Once you've setup a PayPal account, you'll need to obtain a **Client ID** and **Secret**. [Create a sandbox application](https://developer.paypal.com/dashboard/applications/sandbox/create).

### Installation

```bash
npm install
```

### Configuration

1. Environmental Variables (.env)

    - Rename the .env.example file to .env
    - Update the following keys with their actual values -

      ```bash
      PAYPAL_CLIENT_ID=<PAYPAL_CLIENT_ID>
      ```

2. Connecting the client and server (vite.config.js)

    - Open vite.config.js in the root directory.
    - Locate the proxy configuration object.
    - Update the proxy key to match the server's address and port. For example:

        ```js
            export default defineConfig({

                server: {
                    proxy: {
                        "/api": {
                            target: "http://localhost:8080", // Replace with your server URL
                            changeOrigin: true,
                        },
                    },
                },
            });
        ```

3. Starting the development server

    - **Start the server**: Follow the instructions in the server's README to start it. Typically, this involves running npm run start or a similar command in the server directory.

    - **Start the client**:

        ```bash
            npm run start
        ```

        This will start the development server, and you should be able to access the Standard Checkout Page in your browser at `http://localhost:3000` (or the port specfied in the terminal output).

### Additional Notes

- **Server Setup**: Make sure you have the server up and running before starting the client.
- **Environment Variables**: Carefully configure the environment variables in the .env file to match your setup.
- **Proxy Configuration**: The proxy setting in vite.config.js is crucial for routing API requests from the client to the server during development.
