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
        public async Task<string> GetNameDay()
        {
            string apiUrl = $"https://api.nevnapok.eu/ma";
            return await APIHelper.GetApi(apiUrl);
        }

        public async Task<string> GetWeather()
        {
            string apiUrl =
                "https://api.openweathermap.org/data/2.5/weather?q=Budapest,hu&units=metric&appid=104d168e3001f454894090545b535f79";
            return await APIHelper.GetApi(apiUrl);
        }
        public async Task<string> GetExchangeRate(string from )
        {
            string apiUrl =
                $"https://api.apilayer.com/exchangerates_data/convert?to=HUF&from={from}&amount=1&apikey=JS7qpwEXHPVbtntwU7H69R1jHnAHj7AA";
            return await APIHelper.GetApi(apiUrl);
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
