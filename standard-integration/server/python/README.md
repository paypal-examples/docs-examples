# Standard Integration Python Flask Sample

PayPal Standard Integration sample in Python using Flask

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
     ```

   - **Unix**

     ```bash
     export PAYPAL_CLIENT_ID="<PAYPAL_CLIENT_ID>"
     export PAYPAL_CLIENT_SECRET="<PAYPAL_CLIENT_SECRET>"
     ```

1. **Run the server**

   ```sh
   flask --app server run --port 8080
   ```

1. Go to [http://localhost:8080/](http://localhost:8080/)
