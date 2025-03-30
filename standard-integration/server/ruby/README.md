# Standard Integration Ruby Sinatra Sample

PayPal Standard Integration sample in Ruby using Sinatra

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
     ```

   - **Unix**

     ```bash
     export PAYPAL_CLIENT_ID="<PAYPAL_CLIENT_ID>"
     export PAYPAL_CLIENT_SECRET="<PAYPAL_CLIENT_SECRET>"
     ```

1. **Run the server**

   ```bash
   bundle exec ruby server.rb
   ```

1. Go to [http://localhost:8080/](http://localhost:8080/)