# Advanced Integartion Java Sample

PayPal Advanced Integration sample in Java

## Running the sample

1. Environmental Variables

   - Navigate to the file `src/main/resources/application.properties`
   - Update the following keys with their actual values -

     ```sh
     PAYPAL_CLIENT_ID=<PAYPAL_CLIENT_ID>
     PAYPAL_CLIENT_SECRET=<PAYPAL_CLIENT_SECRET>
     ```

2. Build the server

```
mvn clean install
```

3. Run the server

```
mvn spring-boot:run
```

4. Start the client

   - Navigate to one of the client folder and follow the installation steps
   - Start the client

     ```sh
         npm run dev
     ```

     This will start the development server, and you should be able to access the Advanced Checkout Page in your browser at `http://localhost:3000` (or the port specfied in the terminal output).
