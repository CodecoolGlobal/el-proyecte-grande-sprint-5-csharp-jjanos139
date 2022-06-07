using System.Collections.Generic;
using System.Threading.Tasks;
using Delightful_Daily_Dose.Helpers;
using Delightful_Daily_Dose.Models;
using Microsoft.AspNetCore.Mvc;

namespace Delightful_Daily_Dose.Controllers
{
    public class TechWorldController : Controller
    {
        private const string ApiUrl = "https://newsdata.io/api/1/news?apikey=pub_7682df2f939752b8d025143691aa2d432601&country=hu&category=science,technology";
        private readonly APIHelper _apiHelper;

        public TechWorldController()
        {
            _apiHelper = new APIHelper();
        }
        public async Task<IActionResult> Index()
        {
            List<News> news = await _apiHelper.GetNews(ApiUrl);
            ViewData["Title"] = "Tech World";
            return View("News", news);
        }
    }
}
