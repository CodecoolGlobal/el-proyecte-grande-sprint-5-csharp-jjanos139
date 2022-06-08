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
        private const string ApiUrl = "https://newsdata.io/api/1/news?apikey=pub_7682df2f939752b8d025143691aa2d432601&language=hu";

        private readonly ILogger<HomeController> _logger;
        private readonly APIHelper _apiHelper;

        public HomeController(ILogger<HomeController> logger)
        {
            _logger = logger;
            _apiHelper = new APIHelper();
        }

        public async Task<IActionResult> Index()
        {
            List<News> news = await _apiHelper.GetNews(ApiUrl);
            return View("News", news);
        }
        
        public async Task<string> GetJoke()
        {
            string apiUrl = "https://api.jokes.one/jod?category=animal";
            return await _apiHelper.GetApi(apiUrl);
        }
        
        public async Task<string> GetDog()
        {
            string apiUrl = "https://dog.ceo/api/breeds/image/random";
            return await _apiHelper.GetApi(apiUrl);
        }
        public async Task<string> GetNameDay()
        {
            string apiUrl = "https://api.nevnapok.eu/ma";
            return await _apiHelper.GetApi(apiUrl);
        }

        public async Task<string> GetWeather()
        {
            string apiUrl =
                "https://api.openweathermap.org/data/2.5/weather?q=Budapest,hu&units=metric&appid=104d168e3001f454894090545b535f79";
            return await _apiHelper.GetApi(apiUrl);
        }
        public async Task<string> GetExchangeRate(string from)
        {
            string apiUrl =
                $"https://api.apilayer.com/exchangerates_data/convert?to=HUF&from={from}&amount=1&apikey=ZxQy1ptO3FT3JTkEJiAehi0sSf7UMSwV";
            return await _apiHelper.GetApi(apiUrl);
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
