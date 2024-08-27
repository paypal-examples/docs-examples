using System;
using System.IO;
using System.Net.Http;
using System.Text;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;
using Newtonsoft.Json;

namespace PayPalStandardIntegration
{
      public class Program
      {
            public static void Main(string[] args)
            {
                  CreateHostBuilder(args).Build().Run();
            }

            public static IHostBuilder CreateHostBuilder(string[] args) =>
                Host.CreateDefaultBuilder(args)
                    .ConfigureAppConfiguration((context, config) =>
                    {
                          config.AddJsonFile("appsettings.json", optional: false, reloadOnChange: true);
                    })
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
            private readonly IHttpClientFactory _httpClientFactory;
            private IConfiguration _configuration { get; }
            private string _paypalClientId { get { return _configuration["PAYPAL_CLIENT_ID"]; } }
            private string _paypalClientSecret { get { return _configuration["PAYPAL_CLIENT_SECRET"]; } }
            private readonly string _base = "https://api-m.sandbox.paypal.com";

            public CheckoutController(IHttpClientFactory httpClientFactory, IConfiguration configuration)
            {
                  _httpClientFactory = httpClientFactory;
                  _configuration = configuration;
            }

            [HttpPost("api/orders")]
            public async Task<IActionResult> CreateOrder([FromBody] dynamic cart)
            {
                  try
                  {
                        var result = await _CreateOrder(cart);
                        return StatusCode((int)result.httpStatusCode, result.jsonResponse);
                  }
                  catch (Exception ex)
                  {
                        Console.Error.WriteLine("Failed to create order:", ex);
                        return StatusCode(500, new { error = "Failed to create order." });
                  }
            }

            [HttpPost("api/orders/{orderID}/capture")]
            public async Task<IActionResult> CaptureOrder(string orderID)
            {
                  try
                  {
                        var result = await _CaptureOrder(orderID);
                        return StatusCode((int)result.httpStatusCode, result.jsonResponse);
                  }
                  catch (Exception ex)
                  {
                        Console.Error.WriteLine("Failed to capture order:", ex);
                        return StatusCode(500, new { error = "Failed to capture order." });
                  }
            }

            private async Task<string> GenerateAccessToken()
            {
                  if (string.IsNullOrEmpty(_paypalClientId) || string.IsNullOrEmpty(_paypalClientSecret))
                  {
                        throw new Exception("MISSING_API_CREDENTIALS");
                  }

                  var auth = Convert.ToBase64String(Encoding.UTF8.GetBytes($"{_paypalClientId}:{_paypalClientSecret}"));
                  var client = _httpClientFactory.CreateClient();
                  var request = new HttpRequestMessage(HttpMethod.Post, $"{_base}/v1/oauth2/token")
                  {
                        Content = new StringContent("grant_type=client_credentials", Encoding.UTF8, "application/x-www-form-urlencoded")
                  };
                  request.Headers.Add("Authorization", $"Basic {auth}");

                  var response = await client.SendAsync(request);
                  var data = JsonConvert.DeserializeObject<dynamic>(await response.Content.ReadAsStringAsync());
                  return data.access_token;
            }          

            private async Task<dynamic> _CreateOrder(dynamic cart)
            {
                  var accessToken = await GenerateAccessToken();
                  var url = $"{_base}/v2/checkout/orders";
                  var payload = new
                  {
                        intent = "CAPTURE",
                        purchase_units = new[]
                        {
                              new
                              {
                                    amount = new
                                    {
                                          currency_code = "USD",
                                          value = "100.00"
                                    }
                              }
                        }
                  };

                  var client = _httpClientFactory.CreateClient();
                  var request = new HttpRequestMessage(HttpMethod.Post, url)
                  {
                        Content = new StringContent(JsonConvert.SerializeObject(payload), Encoding.UTF8, "application/json")
                  };
                  request.Headers.Add("Authorization", $"Bearer {accessToken}");

                  var response = await client.SendAsync(request);
                  return await HandleResponse(response);
            }

            private async Task<dynamic> _CaptureOrder(string orderID)
            {
                  var accessToken = await GenerateAccessToken();
                  var url = $"{_base}/v2/checkout/orders/{orderID}/capture";

                  var client = _httpClientFactory.CreateClient();
                  var request = new HttpRequestMessage(HttpMethod.Post, url) {
                        Content = new StringContent("", Encoding.UTF8, "application/json")
                  };
                  request.Headers.Add("Authorization", $"Bearer {accessToken}");

                  var response = await client.SendAsync(request);
                  return await HandleResponse(response);
            }

            private async Task<dynamic> HandleResponse(HttpResponseMessage response)
            {
                  try
                  {
                        var jsonResponse = JsonConvert.DeserializeObject<dynamic>(await response.Content.ReadAsStringAsync());
                        return new
                        {
                              jsonResponse,
                              httpStatusCode = response.StatusCode
                        };
                  }
                  catch (Exception)
                  {
                        var errorMessage = await response.Content.ReadAsStringAsync();
                        throw new Exception(errorMessage);
                  }
            }

      }
}
