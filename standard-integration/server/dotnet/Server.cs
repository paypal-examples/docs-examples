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
                        Amount = new AmountWithBreakdown
                        {
                            CurrencyCode = "{order_currency_code}",
                            MValue = "{order_value}",
                            Breakdown = new AmountBreakdown
                            {
                                ItemTotal = new Money
                                {
                                    CurrencyCode = "{order_currency_code}",
                                    MValue = "{order_value}",
                                },
                            }
                        },
                        Items =
                        [
                            new Item
                            {
                                Name = "T-Shirt",
                                UnitAmount = new Money
                                {
                                    CurrencyCode = "{order_currency_code}",
                                    MValue = "{order_value}",
                                },
                                Quantity = "1",
                                Description = "Super Fresh Shirt",
                                Sku = "sku01"
                            },
                        ],
                    },
                },
                PaymentSource = new PaymentSource
                {
                    Paypal = new PaypalWallet
                    {
                        ExperienceContext = new PaypalWalletExperienceContext
                        {
                            ShippingPreference = ShippingPreference.GetFromFile,
                            ReturnUrl = "https://example.com/returnUrl",
                            CancelUrl = "https://example.com/cancelUrl",
                            LandingPage = PaypalExperienceLandingPage.Login,
                            UserAction = PaypalExperienceUserAction.PayNow,
                        },
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

    [HttpPost("api/shipping-callback")]
    public async Task<dynamic> ShippingCallback([FromBody] OrderUpdateCallbackRequest request)
    {
        // Build the response object
        var orderUpdateCallbackResponse = new
        {
            id = request.Id,
            purchase_units = request
                .PurchaseUnits.Select(pu => new
                {
                    reference_id = pu.ReferenceId,
                    amount = new
                    {
                        currency_code = pu.Amount?.CurrencyCode,
                        value = pu.Amount?.Value,
                        breakdown = new
                        {
                            item_total = new
                            {
                                currency_code = pu.Amount?.Breakdown?.ItemTotal?.CurrencyCode,
                                value = pu.Amount?.Breakdown?.ItemTotal?.Value
                            },
                            tax_total = new { currency_code = "USD", value = "0.00" }, // Assuming tax_total is always 0.00 for this example. Modify as needed
                            shipping = new { currency_code = "USD", value = "3.00" } // Assuming shipping is always 3.00 for this example. Modify as needed
                        }
                    },
                    shipping_options = new[]
                    {
                        new
                        {
                            id = "1",
                            amount = new { currency_code = "USD", value = "0.00" },
                            type = "SHIPPING",
                            label = "Free Shipping",
                            selected = true
                        },
                        new
                        {
                            id = "2",
                            amount = new { currency_code = "USD", value = "7.00" },
                            type = "SHIPPING",
                            label = "USPS Priority Shipping",
                            selected = false
                        },
                        new
                        {
                            id = "3",
                            amount = new { currency_code = "USD", value = "10.00" },
                            type = "SHIPPING",
                            label = "1-Day Shipping",
                            selected = false
                        }
                    }
                })
                .ToArray()
        };

        return await Task.FromResult(orderUpdateCallbackResponse);
    }
}

public class OrderUpdateCallbackRequest
{
    public string Id { get; set; }
    public ShippingAddress ShippingAddress { get; set; }
    public List<PurchaseUnit> PurchaseUnits { get; set; }
}

public class OrderUpdateCallbackResponse
{
    public string Id { get; set; }
    public List<PurchaseUnit> PurchaseUnits { get; set; }
}

public class ShippingAddress
{
    public string AdminArea1 { get; set; } // State
    public string AdminArea2 { get; set; } // City
    public string PostalCode { get; set; }
    public string CountryCode { get; set; }
}

public class PurchaseUnit
{
    public string ReferenceId { get; set; }
    public Amount Amount { get; set; }
    public Payee Payee { get; set; }
    public List<Item> Items { get; set; }
    public ShippingDetails Shipping { get; set; }
}

public class Amount
{
    public string CurrencyCode { get; set; }
    public string Value { get; set; }
    public Breakdown Breakdown { get; set; }
}

public class Breakdown
{
    public ItemTotal ItemTotal { get; set; }
}

public class ItemTotal
{
    public string CurrencyCode { get; set; }
    public string Value { get; set; }
}

public class Payee
{
    public string EmailAddress { get; set; }
    public string MerchantId { get; set; }
}

public class Item
{
    public string Name { get; set; }
    public UnitAmount UnitAmount { get; set; }
    public string Quantity { get; set; }
    public string Description { get; set; }
    public string Sku { get; set; }
    public string Url { get; set; }
    public string ImageUrl { get; set; }
    public UPC Upc { get; set; }
    public string Category { get; set; }
}

public class UnitAmount
{
    public string CurrencyCode { get; set; }
    public string Value { get; set; }
}

public class UPC
{
    public string Type { get; set; }
    public string Code { get; set; }
}

public class ShippingDetails
{
    public ShippingName Name { get; set; }
    public ShippingPhoneNumber PhoneNumber { get; set; }
    public string EmailAddress { get; set; }
    public List<ShippingOption> Options { get; set; }
}

public class ShippingName
{
    public string FullName { get; set; }
}

public class ShippingPhoneNumber
{
    public string NationalNumber { get; set; }
}

public class ShippingOption
{
    public string Id { get; set; }
    public string Label { get; set; }
    public string Type { get; set; }
    public Amount Amount { get; set; }
    public bool Selected { get; set; }
}
