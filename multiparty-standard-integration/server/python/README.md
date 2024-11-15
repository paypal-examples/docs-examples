# Multiparty Standard Integration Python Flask Sample

PayPal Multiparty Standard Integration sample in Python using Flask

## Running the sample

1. **Setup a virtual environment**

   ```sh
   python3 -m venv .venv
   ```

1. **Install the dependencies**

   ```sh
   pip install -r requirements.txt
   ```

1. **Add your API credentials to the environment:**

   - **Windows**

     ```powershell
      $env:PAYPAL_CLIENT_ID = "<PAYPAL_CLIENT_ID>"
      $env:PAYPAL_CLIENT_SECRET = "<PAYPAL_CLIENT_SECRET>"
      $env:PAYPAL_SELLER_PAYER_ID = "<PAYPAL_SELLER_PAYER_ID>"
      $env:PAYPAL_BN_CODE = "<PAYPAL_BN_CODE>"
     ```

   - **Linux / MacOS**

     ```bash
      export PAYPAL_CLIENT_ID="<PAYPAL_CLIENT_ID>"
      export PAYPAL_CLIENT_SECRET="<PAYPAL_CLIENT_SECRET>"
      export PAYPAL_SELLER_PAYER_ID="<PAYPAL_SELLER_PAYER_ID>"
      export PAYPAL_BN_CODE="<PAYPAL_BN_CODE>"
     ```

1. **Run the server**

   ```sh
   flask --app server run
   ```

1. Go to [http://localhost:8080/](http://localhost:8080/)
