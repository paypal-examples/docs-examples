using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;
using Microsoft.Extensions.Logging;
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

    private IConfiguration _configuration { get; }
    private string _paypalClientId
    {
        get { return System.Environment.GetEnvironmentVariable("PAYPAL_CLIENT_ID"); }
    }
    private string _paypalClientSecret
    {
        get { return System.Environment.GetEnvironmentVariable("PAYPAL_CLIENT_SECRET"); }
    }

    private readonly ILogger<CheckoutController> _logger;

    public CheckoutController(IConfiguration configuration, ILogger<CheckoutController> logger)
    {
        _configuration = configuration;
        _logger = logger;

        // Initialize the PayPal SDK client
        PaypalServerSdkClient client = new PaypalServerSdkClient.Builder()
            .Environment(PaypalServerSdk.Standard.Environment.Sandbox)
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

    private async Task<dynamic> _CreateOrder(dynamic cart)
    {
        CheckoutPaymentIntent intent = (CheckoutPaymentIntent)
            Enum.Parse(typeof(CheckoutPaymentIntent), "CAPTURE", true);

        OrdersCreateInput ordersCreateInput = new OrdersCreateInput
        {
            Body = new OrderRequest
            {
                Intent = intent,
                PurchaseUnits = new List<PurchaseUnitRequest>
                {
                    new PurchaseUnitRequest
                    {
                        Amount = new AmountWithBreakdown { CurrencyCode = "USD", MValue = "100", },
                    },
                },
            },
        };

        ApiResponse<Order> result = await _ordersController.OrdersCreateAsync(ordersCreateInput);
        return result;
    }

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

    private async Task<dynamic> _CaptureOrder(string orderID)
    {
        OrdersCaptureInput ordersCaptureInput = new OrdersCaptureInput { Id = orderID, };

        ApiResponse<Order> result = await _ordersController.OrdersCaptureAsync(ordersCaptureInput);

        return result;
    }
}
