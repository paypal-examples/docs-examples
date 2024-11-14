package com.paypal.sample;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.paypal.sdk.Environment;
import com.paypal.sdk.PaypalServerSdkClient;
import com.paypal.sdk.authentication.ClientCredentialsAuthModel;
import com.paypal.sdk.controllers.OrdersController;
import com.paypal.sdk.controllers.PaymentsController;
import com.paypal.sdk.exceptions.ApiException;
import com.paypal.sdk.http.client.HttpClientConfiguration;
import com.paypal.sdk.http.response.ApiResponse;
import com.paypal.sdk.logging.configuration.ApiLoggingConfiguration;
import com.paypal.sdk.logging.configuration.ApiRequestLoggingConfiguration;
import com.paypal.sdk.logging.configuration.ApiResponseLoggingConfiguration;
import com.paypal.sdk.models.*;
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

import java.io.IOException;
import java.nio.charset.StandardCharsets;
import java.util.Arrays;
import java.util.Base64;
import java.util.HashMap;
import java.util.Map;
import java.util.function.Consumer;

@SpringBootApplication
public class SampleAppApplication {

	@Value("${PAYPAL_CLIENT_ID}")
	private String PAYPAL_CLIENT_ID;

	@Value("${PAYPAL_CLIENT_SECRET}")
	private String PAYPAL_CLIENT_SECRET;

	private String PAYPAL_SELLER_ID = "BXCWTD6FWTQEU";

	private String PAYPAL_BN_CODE = "FLAVORsb-aw9kc33369618_MP";

	public static void main(String[] args) {
		SpringApplication.run(SampleAppApplication.class, args);
	}

	@Bean
	public PaypalServerSdkClient paypalClient() {
		PaypalServerSdkClient.Builder clientBuilder = new PaypalServerSdkClient.Builder();
		// Logging configuration
		clientBuilder.loggingConfig(new Consumer<ApiLoggingConfiguration.Builder>() {
			@Override
			public void accept(ApiLoggingConfiguration.Builder builder) {
				builder.level(Level.DEBUG).requestConfig(new Consumer<ApiRequestLoggingConfiguration.Builder>() {
					@Override
					public void accept(ApiRequestLoggingConfiguration.Builder builder) {
						builder.body(true);
					}
				}).responseConfig(new Consumer<ApiResponseLoggingConfiguration.Builder>() {
					@Override
					public void accept(ApiResponseLoggingConfiguration.Builder builder) {
						builder.headers(true);
					}
				});
			}
		})
				.httpClientConfig(new Consumer<HttpClientConfiguration.Builder>() {
					@Override
					public void accept(HttpClientConfiguration.Builder builder) {
						builder.timeout(0);
					}
				})
				.environment(Environment.SANDBOX)
				.clientCredentialsAuth(new ClientCredentialsAuthModel.Builder(
						PAYPAL_CLIENT_ID,
						PAYPAL_CLIENT_SECRET).build())
				.build();

		return clientBuilder.build();
	}

	@Controller
	@RequestMapping("/")
	public class CheckoutController {

		private final ObjectMapper objectMapper;
		private final PaypalServerSdkClient client;

		private String getAuthAssertionToken(String clientId, String merchantId) {
			try {
				HashMap<String, String> header = new HashMap<>();
				header.put("alg", "none");

				HashMap<String, String> body = new HashMap<>();
				body.put("iss", clientId);
				body.put("payer_id", merchantId);

				String signature = "";

				ObjectMapper mapper = new ObjectMapper();
				String headerJson;
				String bodyJson;
				headerJson = mapper.writeValueAsString(header);
				bodyJson = mapper.writeValueAsString(body);

				String headerEncoded = Base64.getEncoder().encodeToString(headerJson.getBytes(StandardCharsets.UTF_8));
				String bodyEncoded = Base64.getEncoder().encodeToString(bodyJson.getBytes(StandardCharsets.UTF_8));
				String signatureEncoded = Base64.getEncoder()
						.encodeToString(signature.getBytes(StandardCharsets.UTF_8));

				String result = headerEncoded + "." + bodyEncoded + ".";

				if (!signature.isEmpty()) {
					result += signatureEncoded;
				}

				return result;
			} catch (JsonProcessingException e) {
				return "";
			}
		}

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

		private Order createOrder(String cart) throws IOException, ApiException {

			OrdersCreateInput ordersCreateInput = new OrdersCreateInput.Builder(
					null,
					new OrderRequest.Builder(
							CheckoutPaymentIntent.fromString("AUTHORIZE"),
							Arrays.asList(
									new PurchaseUnitRequest.Builder(
											new AmountWithBreakdown.Builder(
													"USD",
													"100").build())
											.shipping(new ShippingDetails.Builder()
													.options(Arrays.asList(
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
																			"5").build())
																	.build()))
													.build())
											.payee(new Payee.Builder()
													.merchantId(PAYPAL_SELLER_ID)
													.build())
											.build())

					).build())
					.paypalPartnerAttributionId(PAYPAL_BN_CODE)
					.build();
			OrdersController ordersController = client.getOrdersController();
			ApiResponse<Order> apiResponse = ordersController.ordersCreate(ordersCreateInput);
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

		private Order captureOrders(String orderID) throws IOException, ApiException {
			OrdersCaptureInput ordersCaptureInput = new OrdersCaptureInput.Builder(
					orderID,
					null)
					.paypalAuthAssertion(getAuthAssertionToken(PAYPAL_CLIENT_ID, PAYPAL_SELLER_ID))
					.build();
			OrdersController ordersController = client.getOrdersController();
			ApiResponse<Order> apiResponse = ordersController.ordersCapture(ordersCaptureInput);
			return apiResponse.getResult();
		}

		@PostMapping("/api/orders/{orderID}/authorize")
		public ResponseEntity<OrderAuthorizeResponse> authorizeOrder(@PathVariable String orderID)
				throws IOException, ApiException {
			try {
				OrderAuthorizeResponse response = authorizeOrders(orderID);
				return new ResponseEntity<>(response, HttpStatus.OK);
			} catch (Exception e) {
				e.printStackTrace();
				return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
			}
		}

		private OrderAuthorizeResponse authorizeOrders(String orderID) throws IOException, ApiException {
			OrdersAuthorizeInput ordersAuthorizeInput = new OrdersAuthorizeInput.Builder(
					orderID, null)
					.paypalAuthAssertion(getAuthAssertionToken(PAYPAL_CLIENT_ID, PAYPAL_SELLER_ID))
					.build();
			OrdersController ordersController = client.getOrdersController();
			ApiResponse<OrderAuthorizeResponse> apiResponse = ordersController.ordersAuthorize(ordersAuthorizeInput);
			return apiResponse.getResult();
		}

		@PostMapping("/api/orders/{authorizationId}/captureAuthorize")
		public ResponseEntity<CapturedPayment> captureAuthorizeOrder(@PathVariable String authorizationId) {
			try {
				CapturedPayment response = captureAuthorizeOrders(authorizationId);
				return new ResponseEntity<>(response, HttpStatus.OK);
			} catch (Exception e) {
				e.printStackTrace();
				return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
			}
		}

		private CapturedPayment captureAuthorizeOrders(String authorizationId) throws IOException, ApiException {
			PaymentsController paymentsController = client.getPaymentsController();
			AuthorizationsCaptureInput authorizationsCaptureInput = new AuthorizationsCaptureInput.Builder(
					authorizationId,
					null).build();
			ApiResponse<CapturedPayment> authorizationsCapture = paymentsController
					.authorizationsCapture(authorizationsCaptureInput);
			return authorizationsCapture.getResult();
		}

		@PostMapping("/api/payments/refund")
		public ResponseEntity<Refund> refundCapturedPayment(@RequestBody Map<String, String> request) {
			try {
				String capturedPaymentId = request.get("capturedPaymentId");
				Refund response = refundCapturedPayments(capturedPaymentId);
				return new ResponseEntity<>(response, HttpStatus.OK);
			} catch (Exception e) {
				e.printStackTrace();
				return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
			}
		}

		private Refund refundCapturedPayments(String capturedPaymentId) throws IOException, ApiException {
			PaymentsController paymentsController = client.getPaymentsController();
			CapturesRefundInput capturesRefundInput = new CapturesRefundInput.Builder(
					capturedPaymentId,
					null)
					.paypalAuthAssertion(getAuthAssertionToken(PAYPAL_CLIENT_ID, PAYPAL_SELLER_ID))
					.build();
			ApiResponse<Refund> refundApiResponse = paymentsController.capturesRefund(capturesRefundInput);
			return refundApiResponse.getResult();
		}
	}
}