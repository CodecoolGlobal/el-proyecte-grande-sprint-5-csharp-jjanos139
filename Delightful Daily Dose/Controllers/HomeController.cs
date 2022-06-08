using Delightful_Daily_Dose.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Net.Http;
using System.Threading.Tasks;
using Delightful_Daily_Dose.Helpers;

namespace Delightful_Daily_Dose.Controllers
{
    //[Route("/weatherforecast/Home")]
    public class HomeController : Controller
    {
        private const string ApiUrl = "https://newsdata.io/api/1/news?apikey=pub_7623a07d5aec61d454d6ab40deb859282e19&language=hu";

        private readonly ILogger<HomeController> _logger;

        public HomeController(ILogger<HomeController> logger)
        {
            _logger = logger;
        }

        public async Task<IActionResult> Index()
        {
            List<News> news = await APIHelper.GetNews(ApiUrl);
            return View("News", news);
        }
        
        public async Task<string> GetJoke()
        {
            //string apiUrl = "https://api.jokes.one/jod?category=animal";
            //return await APIHelper.GetApi(apiUrl);

            return @"{
                    ""success"": {
                        ""total"": 1
                    },
                    ""contents"": {
                        ""jokes"": {
                            ""description"": ""Animal Joke of the day"",
                            ""language"": ""en"",
                            ""background"": """",
                            ""category"": ""animal"",
                            ""date"": ""2022-06-08"",
                            ""joke"": {
                                ""title"": ""A bat joke."",
                                ""lang"": ""en"",
                                ""length"": 274,
                                ""clean"": 0,
                                ""racial"": 0,
                                ""date"": ""2022-06-08"",
                                ""id"": ""agGBZojZb0cGOMpquWawbQeF"",
                                ""text"": ""A group of bats, hanging at the ceiling of a cave, discovers a single bat STANDING upright underneath on the floor of the cave. Surprised by this unusual behavior, they ask this fellow: \""What the heck are you doing down there?\"" And the fellow shouts back: \""Yoga!\""""
                            }
                        },
                        ""copyright"": ""2019-20 https://jokes.one""
                }
            }";
        }
        
        public async Task<string> GetDog()
        {
            string apiUrl = "https://dog.ceo/api/breeds/image/random";
            return await APIHelper.GetApi(apiUrl);
        }
        public async Task<string> GetNameDay()
        {
            //string apiUrl = "https://api.nevnapok.eu/ma";
            //return await APIHelper.GetApi(apiUrl);

            return @"{ ""06-08"": [""Aglent"", ""Ágnes"", ""Agnéta"", ""Elga""]}";

        }

        public async Task<string> GetWeather()
        {
            //string apiUrl =
            //    "https://api.openweathermap.org/data/2.5/weather?q=Budapest,hu&units=metric&appid=104d168e3001f454894090545b535f79";
            //return await APIHelper.GetApi(apiUrl);


            return @"{ ""coord"":{ ""lon"":19.0399,""lat"":47.498},""weather"":[{ ""id"":803,""main"":""Clouds"",""description"":""broken clouds"",""icon"":""04d""}],""base"":""stations"",""main"":{ ""temp"":25.8,""feels_like"":26.19,""temp_min"":25.29,""temp_max"":26.02,""pressure"":1008,""humidity"":67},""visibility"":10000,""wind"":{ ""speed"":3.09,""deg"":130},""clouds"":{ ""all"":75},""dt"":1654681821,""sys"":{ ""type"":2,""id"":2009661,""country"":""HU"",""sunrise"":1654656451,""sunset"":1654713507},""timezone"":7200,""id"":3054643,""name"":""Budapest"",""cod"":200}";

        }
        public async Task<string> GetExchangeRate(string from)
        {
            //string apiUrl =
            //    $"https://api.apilayer.com/exchangerates_data/convert?to=HUF&from={from}&amount=1&apikey=JS7qpwEXHPVbtntwU7H69R1jHnAHj7AA";
            //return await APIHelper.GetApi(apiUrl);

            return @"            {
                ""success"": true,
                ""query"": {
                    ""from"": ""EUR"",
                    ""to"": ""HUF"",
                    ""amount"": 1
                },
                ""info"": {
                    ""timestamp"": 1654682403,
                    ""rate"": 389.772845
                },
                ""date"": ""2022-06-08"",
                ""result"": 389.772845
            }";
        }

        public IActionResult Credits()
        {
            return View();
        }

        [ResponseCache(Duration = 0, Location = ResponseCacheLocation.None, NoStore = true)]
        public IActionResult Error()
        {
            return View(new ErrorViewModel { RequestId = Activity.Current?.Id ?? HttpContext.TraceIdentifier });
        }
    }
}
