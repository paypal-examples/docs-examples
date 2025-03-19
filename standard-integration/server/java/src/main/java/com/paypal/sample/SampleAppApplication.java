package com.paypal.sample;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.paypal.sdk.Environment;
import com.paypal.sdk.PaypalServerSdkClient;
import com.paypal.sdk.authentication.ClientCredentialsAuthModel;
import com.paypal.sdk.controllers.OrdersController;
import com.paypal.sdk.exceptions.ApiException;
import com.paypal.sdk.http.response.ApiResponse;
import com.paypal.sdk.models.*;
import java.io.IOException;
import java.util.Arrays;
import java.util.Collections;
import java.util.Map;
import org.slf4j.event.Level;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;

@SpringBootApplication
public class SampleAppApplication {

    @Value("${PAYPAL_CLIENT_ID}")
    private String PAYPAL_CLIENT_ID;

    @Value("${PAYPAL_CLIENT_SECRET}")
    private String PAYPAL_CLIENT_SECRET;

    public static void main(String[] args) {
        SpringApplication.run(SampleAppApplication.class, args);
    }

    @Bean
    public PaypalServerSdkClient paypalClient() {
        return new PaypalServerSdkClient.Builder()
                .loggingConfig(builder -> builder
                .level(Level.DEBUG)
                .requestConfig(logConfigBuilder -> logConfigBuilder.body(true))
                .responseConfig(logConfigBuilder -> logConfigBuilder.headers(true)))
                .httpClientConfig(configBuilder -> configBuilder.timeout(0))
                .environment(Environment.SANDBOX)
                .clientCredentialsAuth(
                        new ClientCredentialsAuthModel.Builder(
                                PAYPAL_CLIENT_ID,
                                PAYPAL_CLIENT_SECRET).build())
                .build();
    }

    @Controller
    @RequestMapping("/")
    public class CheckoutController {

        private final ObjectMapper objectMapper;
        private final PaypalServerSdkClient client;

        public CheckoutController(
                ObjectMapper objectMapper,
                PaypalServerSdkClient client) {
            this.objectMapper = objectMapper;
            this.client = client;
        }

        @PostMapping("/api/orders")
        public ResponseEntity<Order> createOrder(
                @RequestBody Map<String, Object> request) {
            try {
                String cart = objectMapper.writeValueAsString(request.get("cart"));
                Order response = createOrder(cart);
                return new ResponseEntity<>(response, HttpStatus.OK);
            } catch (Exception e) {
                e.printStackTrace();
                return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
            }
        }

        private Order createOrder(String cart) throws IOException, ApiException {
            OrdersCreateInput ordersCreateInput = new OrdersCreateInput.Builder(
                    null,
                    new OrderRequest.Builder(
                            CheckoutPaymentIntent.fromString("CAPTURE"),
                            Collections.singletonList(
                                    new PurchaseUnitRequest.Builder(
                                            new AmountWithBreakdown.Builder(
                                                    "USD", "100")
                                                    .breakdown(
                                                            new AmountBreakdown.Builder()
                                                                    .itemTotal(new Money(
                                                                            "USD",
                                                                            "100"))
                                                                    .build())
                                                    .build())
                                            .items(
                                                    Collections.singletonList(
                                                            new Item.Builder(
                                                                    "T-Shirt",
                                                                    new Money.Builder(
                                                                            "USD",
                                                                            "100")
                                                                            .build(),
                                                                    "1")
                                                                    .description("Super Fresh Shirt")
                                                                    .sku("sku01")
                                                                    .build()))
                                            .shipping(
                                                    new ShippingDetails.Builder()
                                                            .options(
                                                                    Arrays.asList(
                                                                            new ShippingOption.Builder(
                                                                                    "1",
                                                                                    "Free Shipping",
                                                                                    true)
                                                                                    .type(ShippingType.SHIPPING)
                                                                                    .amount(new Money.Builder(
                                                                                            "USD",
                                                                                            "0")
                                                                                            .build())
                                                                                    .build(),
                                                                            new ShippingOption.Builder(
                                                                                    "2",
                                                                                    "Priority Shipping",
                                                                                    false)
                                                                                    .type(ShippingType.SHIPPING)
                                                                                    .amount(new Money.Builder(
                                                                                            "USD",
                                                                                            "5")
                                                                                            .build())
                                                                                    .build()))
                                                            .build())
                                            .build()))
                            .paymentSource(
                                    new PaymentSource.Builder()
                                            .paypal(
                                                    new PaypalWallet.Builder()
                                                            .experienceContext(
                                                                    new PaypalWalletExperienceContext.Builder()
                                                                            .shippingPreference(
                                                                                    ShippingPreference.GET_FROM_FILE)
                                                                            .returnUrl("https://example.com/returnUrl")
                                                                            .cancelUrl("https://example.com/cancelUrl")
                                                                            .landingPage(PaypalExperienceLandingPage.LOGIN)
                                                                            .userAction(PaypalExperienceUserAction.PAY_NOW)
                                                                            .orderUpdateCallbackConfig(
                                                                                    new CallbackConfiguration.Builder(
                                                                                            new CallbackEvents.Builder(
                                                                                                    Arrays.asList(
                                                                                                            "SHIPPING_ADDRESS",
                                                                                                            "SHIPPING_OPTIONS"))
                                                                                                    .build(),
                                                                                            "https://example.com/callbackUrl")
                                                                                            .build())
                                                                            .build())
                                                            .build())
                                            .build())
                            .build())
                    .build();
            OrdersController ordersController = client.getOrdersController();
            ApiResponse<Order> apiResponse = ordersController.ordersCreate(
                    ordersCreateInput);
            return apiResponse.getResult();
        }

        @PostMapping("/api/orders/{orderID}/capture")
        public ResponseEntity<Order> captureOrder(@PathVariable String orderID) {
            try {
                Order response = captureOrders(orderID);
                return new ResponseEntity<>(response, HttpStatus.OK);
            } catch (Exception e) {
                e.printStackTrace();
                return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
            }
        }

        private Order captureOrders(String orderID)
                throws IOException, ApiException {
            OrdersCaptureInput ordersCaptureInput = new OrdersCaptureInput.Builder(
                    orderID,
                    null).build();
            OrdersController ordersController = client.getOrdersController();
            ApiResponse<Order> apiResponse = ordersController.ordersCapture(
                    ordersCaptureInput);
            return apiResponse.getResult();
        }

        @PostMapping("/api/shipping-callback")
        public ResponseEntity<OrderUpdateCallbackResponse> shippingCallback(@RequestBody OrderUpdateCallbackRequest request) {
                return new ResponseEntity<>(new OrderUpdateCallbackResponse(), HttpStatus.OK);
        }
    }
}


