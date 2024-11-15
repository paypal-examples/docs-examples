# Multiparty Standard Integration Ruby Sinatra Sample

PayPal Multiparty Standard Integration sample in Ruby using Sinatra

## Running the sample

1. **Ensure you have a supported Ruby version installed**: [Ruby Maintenance Branches](https://www.ruby-lang.org/en/downloads/branches/)

1. **Install the dependencies**

   ```bash
   bundle install
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

   ```bash
   bundle exec ruby server.rb
   ```

1. Go to [http://localhost:8080/](http://localhost:8080/)
