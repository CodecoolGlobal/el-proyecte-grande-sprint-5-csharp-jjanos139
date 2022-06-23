using Delightful_Daily_Dose.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using System.Collections.Generic;
using System.Threading.Tasks;
using Delightful_Daily_Dose.Helpers;

namespace Delightful_Daily_Dose.Controllers
{
    [ApiController]
    public class HomeController : ControllerBase
    {
        private readonly ILogger<HomeController> _logger;
        private readonly ApiHelper _apiHelper;

        public HomeController(ILogger<HomeController> logger, ApiHelper apiHelper)
        {
            _logger = logger;
            _apiHelper = apiHelper;
        }

        [Route("/[controller]")]
        public async Task<List<News>> Index()
        {
            string ApiUrl = "https://newsdata.io/api/1/news?apikey=pub_7623a07d5aec61d454d6ab40deb859282e19&language=en&category=world";
            List<News> news = await _apiHelper.GetNews(ApiUrl);
            return news;

        }

        [Route("/[controller]/Business")]
        public async Task<List<News>> Business()
        {
            string ApiUrl =
                "https://newsdata.io/api/1/news?apikey=pub_7623a07d5aec61d454d6ab40deb859282e19&language=en&category=business";
            List <News> news = await _apiHelper.GetNews(ApiUrl);
            return news;
        }

        [Route("/[controller]/Culinary")]
        public async Task<List<News>> Culinary()
        {
            string ApiUrl =
                "https://newsdata.io/api/1/news?apikey=pub_7623a07d5aec61d454d6ab40deb859282e19&language=en&category=food";
            List <News> news = await _apiHelper.GetNews(ApiUrl);
            return news;
        }

        [Route("/[controller]/Domestic")]
        public async Task<List<News>> Domestic()
        {
            string ApiUrl = "https://newsdata.io/api/1/news?apikey=pub_7623a07d5aec61d454d6ab40deb859282e19&country=hu";
            List <News> news = await _apiHelper.GetNews(ApiUrl);
            return news;
        }

        [Route("/[controller]/Economics")]
        public async Task<List<News>> Economics()
        {
            string ApiUrl =
                "https://newsdata.io/api/1/news?apikey=pub_7623a07d5aec61d454d6ab40deb859282e19&language=en&category=economics";
            List <News> news = await _apiHelper.GetNews(ApiUrl);
            return news;
        }

        [Route("/[controller]/Entertainment")]
        public async Task<List<News>> Entertainment()
        {
            string ApiUrl =
                "https://newsdata.io/api/1/news?apikey=pub_7623a07d5aec61d454d6ab40deb859282e19&language=en&category=entertainment";
            List <News> news = await _apiHelper.GetNews(ApiUrl);
            return news;
        }

        [Route("/[controller]/Environment")]
        public async Task<List<News>> Environment()
        {
            string ApiUrl =
                "https://newsdata.io/api/1/news?apikey=pub_7623a07d5aec61d454d6ab40deb859282e19&language=en&category=environment";
            List <News> news = await _apiHelper.GetNews(ApiUrl);
            return news;
        }

        [Route("/[controller]/Foreign")]
        public async Task<List<News>> Foreign()
        {
            string ApiUrl =
                "https://newsdata.io/api/1/news?apikey=pub_7623a07d5aec61d454d6ab40deb859282e19&category=world";
            List <News> news = await _apiHelper.GetNews(ApiUrl);
            return news;
        }

        [Route("/[controller]/Fresh")]
        public async Task<List<News>> Fresh()
        {
            string ApiUrl =
                "https://newsdata.io/api/1/news?apikey=pub_7623a07d5aec61d454d6ab40deb859282e19&language=en&category=business,health,politics,top,world";
            List <News> news = await _apiHelper.GetNews(ApiUrl);
            return news;
        }

        [Route("/[controller]/Health")]
        public async Task<List<News>> Health()
        {
            string ApiUrl =
                "https://newsdata.io/api/1/news?apikey=pub_7623a07d5aec61d454d6ab40deb859282e19&language=en&category=health";
            List <News> news = await _apiHelper.GetNews(ApiUrl);
            return news;
        }

        [Route("/[controller]/MostViewed")]
        public async Task<List<News>> MostViewed()
        {
            string ApiUrl =
                "https://newsdata.io/api/1/news?apikey=pub_7623a07d5aec61d454d6ab40deb859282e19&language=en&category=top";
            List <News> news = await _apiHelper.GetNews(ApiUrl);
            return news;
        }

        [Route("/[controller]/Politics")]
        public async Task<List<News>> Politics()
        {
            string ApiUrl =
                "https://newsdata.io/api/1/news?apikey=pub_7623a07d5aec61d454d6ab40deb859282e19&language=en&category=politics";
            List <News> news = await _apiHelper.GetNews(ApiUrl);
            return news;
        }

        [Route("/[controller]/Sport")]
        public async Task<List<News>> Sport()
        {
            string ApiUrl =
                "https://newsdata.io/api/1/news?apikey=pub_7623a07d5aec61d454d6ab40deb859282e19&language=en&category=sports";
            List <News> news = await _apiHelper.GetNews(ApiUrl);
            return news;
        }

        [Route("/[controller]/TechWorld")]
        public async Task<List<News>> TechWorld()
        {
            string ApiUrl =
                "https://newsdata.io/api/1/news?apikey=pub_7682df2f939752b8d025143691aa2d432601&language=en&category=science,technology";
            List <News> news = await _apiHelper.GetNews(ApiUrl);
            return news;
        }

        [Route("/[controller]/GetJoke")]
        public async Task<string> GetJoke()
        {
            string apiUrl = "https://api.chucknorris.io/jokes/random";
            return await _apiHelper.GetApi(apiUrl);
        }

        [Route("/[controller]/GetDog")]
        public async Task<string> GetDog()
        {
            string apiUrl = "https://dog.ceo/api/breeds/image/random";
            return await _apiHelper.GetApi(apiUrl);
        }

        [Route("/[controller]/GetNameDay")]
        public async Task<string> GetNameDay()
        {
            string apiUrl = "https://api.nevnapok.eu/ma";
            return await _apiHelper.GetApi(apiUrl);

            //return @"{ ""06-08"": [""Aglent"", ""Ágnes"", ""Agnéta"", ""Elga""]}";

        }

        [Route("/[controller]/GetWeather")]
        public async Task<string> GetWeather()
        {
            string apiUrl =
                "https://api.openweathermap.org/data/2.5/weather?q=Budapest,hu&units=metric&appid=104d168e3001f454894090545b535f79";
            return await _apiHelper.GetApi(apiUrl);


            //return @"{ ""coord"":{ ""lon"":19.0399,""lat"":47.498},""weather"":[{ ""id"":803,""main"":""Clouds"",""description"":""broken clouds"",""icon"":""04d""}],""base"":""stations"",""main"":{ ""temp"":25.8,""feels_like"":26.19,""temp_min"":25.29,""temp_max"":26.02,""pressure"":1008,""humidity"":67},""visibility"":10000,""wind"":{ ""speed"":3.09,""deg"":130},""clouds"":{ ""all"":75},""dt"":1654681821,""sys"":{ ""type"":2,""id"":2009661,""country"":""HU"",""sunrise"":1654656451,""sunset"":1654713507},""timezone"":7200,""id"":3054643,""name"":""Budapest"",""cod"":200}";

        }

        [Route("/[controller]/GetExchangeRate")]
        public async Task<string> GetExchangeRate(string from)
        {
            string apiUrl =
                $"https://api.apilayer.com/exchangerates_data/convert?to=HUF&from={from}&amount=1&apikey=x9FyrdPeE5RhuDFaLljkZtmqRGdeKL7a";
            return await _apiHelper.GetApi(apiUrl);

            //return @"            {
            //    ""success"": true,
            //    ""query"": {
            //        ""from"": ""EUR"",
            //        ""to"": ""HUF"",
            //        ""amount"": 1
            //    },
            //    ""info"": {
            //        ""timestamp"": 1654682403,
            //        ""rate"": 389.772845
            //    },
            //    ""date"": ""2022-06-08"",
            //    ""result"": 389.772845
            //}";
        }

        [Route("/[controller]/GetTopBoxOffice")]
        public async Task<string> GetTopBoxOffice()
        {
            string apiUrl = "https://imdb-api.com/en/API/BoxOffice/k_isz4vrmq";
            return await _apiHelper.GetApi(apiUrl);
        }

        [Route("/[controller]/GetTopImdbTvShows")]
        public async Task<string> GetTopImdbTvShows()
        {
            string apiUrl = "https://imdb-api.com/en/API/MostPopularTVs/k_isz4vrmq";
            return await _apiHelper.GetApi(apiUrl);
        }

        [Route("/[controller]/GetComingSoonToBoxOffice")]
        public async Task<string> GetComingSoonToBoxOffice()
        {
            string apiUrl = "https://imdb-api.com/en/API/ComingSoon/k_isz4vrmq";
            return await _apiHelper.GetApi(apiUrl);
        }

        [Route("/[controller]/GetYoutubeMostViewed")]
        public async Task<string> GetYoutubeMostViewed()
        {
            string apiUrl = "https://youtube.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&maxResults=25&regionCode=HU&videoCategoryId=0&key=AIzaSyD61k1tx-iwfoKtmhIHGmAm4xq3_Q8Oy5I";
            return await _apiHelper.GetApi(apiUrl);
        }


    }
}
