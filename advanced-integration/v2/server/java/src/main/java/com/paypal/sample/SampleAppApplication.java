package com.paypal.sample;

import com.fasterxml.jackson.databind.ObjectMapper;
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
import org.springframework.web.client.RestTemplate;

import com.paypal.sdk.Environment;
import com.paypal.sdk.PaypalServerSdkClient;
import com.paypal.sdk.authentication.ClientCredentialsAuthModel;
import com.paypal.sdk.controllers.OrdersController;
import com.paypal.sdk.exceptions.ApiException;
import com.paypal.sdk.http.response.ApiResponse;
import com.paypal.sdk.models.AmountWithBreakdown;
import com.paypal.sdk.models.CheckoutPaymentIntent;
import com.paypal.sdk.models.Order;
import com.paypal.sdk.models.OrderRequest;
import com.paypal.sdk.models.CaptureOrderInput;
import com.paypal.sdk.models.CreateOrderInput;
import com.paypal.sdk.models.PurchaseUnitRequest;
import java.util.Arrays;
import org.slf4j.event.Level;

import java.io.IOException;
import java.util.Map;

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
	public RestTemplate restTemplate() {
		return new RestTemplate();
	}

	@Bean
    public PaypalServerSdkClient paypalClient() {
        return new PaypalServerSdkClient.Builder()
                .loggingConfig(builder -> builder
                        .level(Level.DEBUG)
                        .requestConfig(logConfigBuilder -> logConfigBuilder.body(true))
                        .responseConfig(logConfigBuilder -> logConfigBuilder.headers(true)))
                .httpClientConfig(configBuilder -> configBuilder
                        .timeout(0))
                .environment(Environment.SANDBOX)
                .clientCredentialsAuth(new ClientCredentialsAuthModel.Builder(
                        PAYPAL_CLIENT_ID, 
                        PAYPAL_CLIENT_SECRET)
                        .build())
                .build();
    }


	@Controller
	@RequestMapping("/")
	public class CheckoutController {

		private final ObjectMapper objectMapper;
		private final PaypalServerSdkClient client;

		public CheckoutController(ObjectMapper objectMapper, PaypalServerSdkClient client) {
			this.objectMapper = objectMapper;
			this.client = client;
		}

		@PostMapping("/api/orders")
		public ResponseEntity<Order> createOrder(@RequestBody Map<String, Object> request) {
			try {
				String cart = objectMapper.writeValueAsString(request.get("cart"));
				Order response = createOrder(cart);
				return new ResponseEntity<>(response, HttpStatus.OK);
			} catch (Exception e) {
				e.printStackTrace();
				return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
			}
		}

		@PostMapping("/api/orders/{orderID}/capture")
		public ResponseEntity<Order> captureOrder(@PathVariable String orderID) {
			try {
				Order response = captureOrders(orderID);
				return new ResponseEntity<Order>(response, HttpStatus.OK);
			} catch (Exception e) {
				e.printStackTrace();
				return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
			}
		}

		private Order createOrder(String cart) throws IOException, ApiException {

			CreateOrderInput createOrderInput = new CreateOrderInput.Builder(
					null,
					new OrderRequest.Builder(
							CheckoutPaymentIntent.CAPTURE,
							Arrays.asList(
									new PurchaseUnitRequest.Builder(
											new AmountWithBreakdown.Builder(
													"USD",
													"100.00")
													.build())
											.build()))
							.build())
					.build();

			OrdersController ordersController = client.getOrdersController();

			ApiResponse<Order> apiResponse = ordersController.createOrder(createOrderInput);

			return apiResponse.getResult();
		}

		private Order captureOrders(String orderID) throws IOException, ApiException {
			CaptureOrderInput ordersCaptureInput = new CaptureOrderInput.Builder(
					orderID,
					null)
					.build();
			OrdersController ordersController = client.getOrdersController();
			ApiResponse<Order> apiResponse = ordersController.captureOrder(ordersCaptureInput);
			return apiResponse.getResult();
		}
	}
}
