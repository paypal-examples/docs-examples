# Standard Integration Node.js Sample

PayPal Standard Integration sample in Node.js

## Running the sample

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

2. Install the packages

   ```bash
   npm install
   ```

3. Run the server

   ```bash
   npm run start
   ```

4. Go to [http://localhost:8080/](http://localhost:8080/)
