package com.paypal.sample;

import com.fasterxml.jackson.databind.JsonNode;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.fasterxml.jackson.databind.node.ObjectNode;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;

import org.springframework.http.HttpEntity;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.util.LinkedMultiValueMap;
import org.springframework.util.MultiValueMap;

import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.client.RestTemplate;

import java.io.IOException;
import java.util.Base64;
import java.util.Map;

@SpringBootApplication
public class SampleAppApplication {

	@Value("${PAYPAL_CLIENT_ID}")
	private String PAYPAL_CLIENT_ID;

	@Value("${PAYPAL_CLIENT_SECRET}")
	private String PAYPAL_CLIENT_SECRET;

	private final String BASE_URL = "https://api-m.sandbox.paypal.com";

	public static void main(String[] args) {
		SpringApplication.run(SampleAppApplication.class, args);
	}

	@Bean
	public RestTemplate restTemplate() {
		return new RestTemplate();
	}

	@Controller
	@RequestMapping("/")
	public class CheckoutController {

		private final RestTemplate restTemplate;
		private final ObjectMapper objectMapper;

		public CheckoutController(RestTemplate restTemplate, ObjectMapper objectMapper) {
			this.restTemplate = restTemplate;
			this.objectMapper = objectMapper;
		}

		@PostMapping("/api/orders")
		public ResponseEntity<JsonNode> createOrder(@RequestBody Map<String, Object> request) {
			try {
				String cart = objectMapper.writeValueAsString(request.get("cart"));
				JsonNode response = createOrder(cart);
				return new ResponseEntity<>(response, HttpStatus.OK);
			} catch (Exception e) {
				e.printStackTrace();
				return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
			}
		}

		@PostMapping("/api/orders/{orderID}/capture")
		public ResponseEntity<JsonNode> captureOrder(@PathVariable String orderID) {
			try {
				JsonNode response = captureOrders(orderID);
				return new ResponseEntity<>(response, HttpStatus.OK);
			} catch (Exception e) {
				e.printStackTrace();
				return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
			}
		}

		private String generateAccessToken() throws IOException {
			if (PAYPAL_CLIENT_ID == null || PAYPAL_CLIENT_SECRET == null) {
				throw new IllegalArgumentException("MISSING_API_CREDENTIALS");
			}
			String auth = Base64.getEncoder().encodeToString((PAYPAL_CLIENT_ID + ":" + PAYPAL_CLIENT_SECRET).getBytes());
			HttpHeaders headers = new HttpHeaders();
			headers.setBasicAuth(auth);
			headers.setContentType(MediaType.APPLICATION_FORM_URLENCODED);

			MultiValueMap<String, String> body = new LinkedMultiValueMap<>();
			body.add("grant_type", "client_credentials");

			ResponseEntity<JsonNode> response = restTemplate.postForEntity(BASE_URL + "/v1/oauth2/token", new HttpEntity<>(body, headers), JsonNode.class);
			return response.getBody().get("access_token").asText();
		}

		private JsonNode createOrder(String cart) throws IOException {
			String accessToken = generateAccessToken();
			String url = BASE_URL + "/v2/checkout/orders";

			ObjectNode payload = objectMapper.createObjectNode();
			payload.put("intent", "CAPTURE");
			ObjectNode purchaseUnit = payload.putArray("purchase_units").addObject();
			ObjectNode amount = purchaseUnit.putObject("amount");
			amount.put("currency_code", "USD");
			amount.put("value", "100.00");

			HttpHeaders headers = new HttpHeaders();
			headers.setBearerAuth(accessToken);
			headers.setContentType(MediaType.APPLICATION_JSON);

			ResponseEntity<JsonNode> response = restTemplate.postForEntity(url, new HttpEntity<>(payload, headers), JsonNode.class);
			return handleResponse(response);
		}

		private JsonNode captureOrders(String orderID) throws IOException {
			String accessToken = generateAccessToken();
			String url = BASE_URL + "/v2/checkout/orders/" + orderID + "/capture";

			HttpHeaders headers = new HttpHeaders();
			headers.setBearerAuth(accessToken);
			headers.setContentType(MediaType.APPLICATION_JSON);

			ResponseEntity<JsonNode> response = restTemplate.postForEntity(url, new HttpEntity<>(headers), JsonNode.class);
			return handleResponse(response);
		}

		private JsonNode handleResponse(ResponseEntity<JsonNode> response) throws IOException {
			if (response.getStatusCode().is2xxSuccessful()) {
				return response.getBody();
			} else {
				throw new IOException(response.getBody().toString());
			}
		}
	}
}
