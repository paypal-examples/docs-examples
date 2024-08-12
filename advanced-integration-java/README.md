# Advanced Integration Example (Java)
This folder contains example code for [PayPal advanced Checkout integration](https://developer.paypal.com/docs/checkout/advanced/integrate/) using the JavaScript SDK and Java Springboot application to complete transactions.

## Running the example

1. Update PAYPAL_CLIENT_ID and PAYPAL_CLIENT_SECRET values in `src/main/resources/application.properties`.

2. Build the server

~~~
mvn clean install
~~~

3. Run the server

~~~
mvn spring-boot:run
~~~

4. Go to [http://localhost:8080/](http://localhost:8080/)
