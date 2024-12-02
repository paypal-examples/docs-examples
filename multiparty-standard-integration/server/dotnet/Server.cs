// @snippet:start("baseFile", "baseFile")
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;
using Microsoft.Extensions.Logging;
using System.Text.Json;
using PaypalServerSdk.Standard;
using PaypalServerSdk.Standard.Authentication;
using PaypalServerSdk.Standard.Controllers;
using PaypalServerSdk.Standard.Http.Response;
using PaypalServerSdk.Standard.Models;
using IConfiguration = Microsoft.Extensions.Configuration.IConfiguration;

namespace PayPalAdvancedIntegration;

public class Program
{
    public static void Main(string[] args)
    {
        CreateHostBuilder(args).Build().Run();
    }

    public static IHostBuilder CreateHostBuilder(string[] args) =>
        Host.CreateDefaultBuilder(args)
            .ConfigureWebHostDefaults(webBuilder =>
            {
                webBuilder.UseUrls("http://localhost:8080");
                webBuilder.UseStartup<Startup>();
            });
}

public class Startup
{
    public void ConfigureServices(IServiceCollection services)
    {
        services.AddMvc().AddNewtonsoftJson();
        services.AddHttpClient();
    }

    public void Configure(IApplicationBuilder app, IWebHostEnvironment env)
    {
        if (env.IsDevelopment())
        {
            app.UseDeveloperExceptionPage();
        }
        app.UseRouting();
        app.UseStaticFiles();
        app.UseEndpoints(endpoints =>
        {
            endpoints.MapControllers();
        });
    }
}

[ApiController]
public class CheckoutController : Controller
{
    private readonly OrdersController _ordersController;
    private readonly PaymentsController _paymentsController;
    private readonly Dictionary<string, CheckoutPaymentIntent> _paymentIntentMap;

    private IConfiguration _configuration { get; }
    private string _paypalClientId
    {
        get { return System.Environment.GetEnvironmentVariable("PAYPAL_CLIENT_ID"); }
    }
    private string _paypalClientSecret
    {
        get { return System.Environment.GetEnvironmentVariable("PAYPAL_CLIENT_SECRET"); }
    }

    private string _sellerId {
        get { return System.Environment.GetEnvironmentVariable("PAYPAL_SELLER_PAYER_ID"); }
    }

    private string _bnCode {
        get { return System.Environment.GetEnvironmentVariable("PAYPAL_BN_CODE"); }
    }

    private readonly ILogger<CheckoutController> _logger;

    public CheckoutController(IConfiguration configuration, ILogger<CheckoutController> logger)
    {
        _configuration = configuration;
        _logger = logger;
        _paymentIntentMap = new Dictionary<string, CheckoutPaymentIntent>
        {
            { "CAPTURE", CheckoutPaymentIntent.Capture },
            { "AUTHORIZE", CheckoutPaymentIntent.Authorize }
        };

        // Initialize the PayPal SDK client
        PaypalServerSdkClient client = new PaypalServerSdkClient.Builder()
            
            .ClientCredentialsAuth(
                new ClientCredentialsAuthModel.Builder(_paypalClientId, _paypalClientSecret).Build()
            )
            .LoggingConfig(config =>
                config
                    .LogLevel(LogLevel.Information)
                    .RequestConfig(reqConfig => reqConfig.Body(true))
                    .ResponseConfig(respConfig => respConfig.Headers(true))
            )
            .Build();

        _ordersController = client.OrdersController;
        _paymentsController = client.PaymentsController;
    }
  // @snippet:start("getAuthAssertionToken", "getAuthAssertionTokenStandardDotnet") 
    public static string GetAuthAssertionValue(string clientId, string merchantId)
    {
        var header = new { alg = "none" };
        var body = new { iss = clientId, payer_id = merchantId };
        var signature = "";

        var headerEncoded = Convert.ToBase64String(Encoding.UTF8.GetBytes(JsonSerializer.Serialize(header)));
        var bodyEncoded = Convert.ToBase64String(Encoding.UTF8.GetBytes(JsonSerializer.Serialize(body)));
        var jwtParts = new[] { headerEncoded, bodyEncoded, signature };

        var authAssertion = string.Join('.', jwtParts);

        return authAssertion;
    }
   // @snippet:end
    [HttpPost("api/orders")]
    public async Task<IActionResult> CreateOrder([FromBody] dynamic cart)
    {
        try
        {
            var result = await _CreateOrder(cart);
            return StatusCode((int)result.StatusCode, result.Data);
        }
        catch (Exception ex)
        {
            Console.Error.WriteLine("Failed to create order:", ex);
            return StatusCode(500, new { error = "Failed to create order." });
        }
    }
   // @snippet:start("createOrder", "createOrderDotnet")
    private async Task<dynamic> _CreateOrder(dynamic cart)
    {
        OrdersCreateInput ordersCreateInput = new OrdersCreateInput
        {
            Body = new OrderRequest
            {
                Intent = _paymentIntentMap["AUTHORIZE"],
                PurchaseUnits = new List<PurchaseUnitRequest>
                {
                    new PurchaseUnitRequest
                    {
                        Amount = new AmountWithBreakdown { CurrencyCode = "USD", MValue = "100", },
                        Payee = new Payee {
                            MerchantId = _sellerId
                        },
                    },
                },
            },
            PaypalAuthAssertion = GetAuthAssertionValue(_paypalClientId, _sellerId),
            PaypalPartnerAttributionId = _bnCode
        };

        ApiResponse<Order> result = await _ordersController.OrdersCreateAsync(ordersCreateInput);
        return result;
    }
   // @snippet:end
    [HttpPost("api/orders/{orderID}/capture")]
    public async Task<IActionResult> CaptureOrder(string orderID)
    {
        try
        {
            var result = await _CaptureOrder(orderID);
            return StatusCode((int)result.StatusCode, result.Data);
        }
        catch (Exception ex)
        {
            Console.Error.WriteLine("Failed to capture order:", ex);
            return StatusCode(500, new { error = "Failed to capture order." });
        }
    }
   // @snippet:start("captureOrder", "captureOrderDotnet")
    private async Task<dynamic> _CaptureOrder(string orderID)
    {
        OrdersCaptureInput ordersCaptureInput = new OrdersCaptureInput
        {
            Id = orderID,
            PaypalAuthAssertion = GetAuthAssertionValue(_paypalClientId, _sellerId)
        };

        ApiResponse<Order> result = await _ordersController.OrdersCaptureAsync(ordersCaptureInput);

        return result;
    }
   // @snippet:end
    [HttpPost("api/orders/{orderID}/authorize")]
    public async Task<IActionResult> AuthorizeOrder(string orderID)
    {
        try
        {
            var result = await _AuthorizeOrder(orderID);
            return StatusCode((int)result.StatusCode, result.Data);
        }
        catch (Exception ex)
        {
            Console.Error.WriteLine("Failed to authorize order:", ex);
            return StatusCode(500, new { error = "Failed to authorize order." });
        }
    }
 // @snippet:start("authorizeOrder", "authorizeOrderJava")
    private async Task<dynamic> _AuthorizeOrder(string orderID)
    {
        OrdersAuthorizeInput ordersAuthorizeInput = new OrdersAuthorizeInput
        {
            Id = orderID,
            PaypalAuthAssertion = GetAuthAssertionValue(_paypalClientId, _sellerId)
        };

        ApiResponse<OrderAuthorizeResponse> result = await _ordersController.OrdersAuthorizeAsync(
            ordersAuthorizeInput
        );

        return result;
    }
   // @snippet:end
    [HttpPost("api/orders/{authorizationID}/captureAuthorize")]
    public async Task<IActionResult> CaptureAuthorizeOrder(string authorizationID)
    {
        try
        {
            var result = await _CaptureAuthorizeOrder(authorizationID);
            return StatusCode((int)result.StatusCode, result.Data);
        }
        catch (Exception ex)
        {
            Console.Error.WriteLine("Failed to authorize order:", ex);
            return StatusCode(500, new { error = "Failed to authorize order." });
        }
    }
    // @snippet:start("capturePaymant", "capturePaymantJava")
    private async Task<dynamic> _CaptureAuthorizeOrder(string authorizationID)
    {
        AuthorizationsCaptureInput authorizationsCaptureInput = new AuthorizationsCaptureInput
        {
            AuthorizationId = authorizationID,
        };

        ApiResponse<CapturedPayment> result = await _paymentsController.AuthorizationsCaptureAsync(
            authorizationsCaptureInput
        );

        return result;
    }
   // @snippet:end
    [HttpPost("api/payments/refund")]
    public async Task<IActionResult> RefundCapture([FromBody] dynamic body)
    {
        try
        {
            var result = await _RefundCapture((string)body.capturedPaymentId);
            return StatusCode((int)result.StatusCode, result.Data);
        }
        catch (Exception ex)
        {
            Console.Error.WriteLine("Failed to refund capture:", ex);
            return StatusCode(500, new { error = "Failed to refund capture." });
        }
    }
  // @snippet:start("refundCapture", "refundCaptureJava")
    private async Task<dynamic> _RefundCapture(string captureID)
    {
        CapturesRefundInput capturesRefundInput = new CapturesRefundInput
        {
            CaptureId = captureID,
            PaypalAuthAssertion = GetAuthAssertionValue(_paypalClientId, _sellerId)
        };

        ApiResponse<Refund> result = await _paymentsController.CapturesRefundAsync(
            capturesRefundInput
        );

        return result;
    }
    // @snippet:end
}
// @snippet:end