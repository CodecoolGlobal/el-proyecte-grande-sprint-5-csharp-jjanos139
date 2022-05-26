using System.Collections.Generic;
using System.Threading.Tasks;
using Delightful_Daily_Dose.Helpers;
using Delightful_Daily_Dose.Models;
using Microsoft.AspNetCore.Mvc;

namespace Delightful_Daily_Dose.Controllers
{
    public class CulinaryController : Controller
    {
        private const string ApiUrl = "https://newsdata.io/api/1/news?apikey=pub_7623a07d5aec61d454d6ab40deb859282e19&language=hu&category=food";
        public async Task<IActionResult> Index()
        {
            List<News> news = await APIHelper.GetNews(ApiUrl);
            ViewData["Title"] = "Culinary";
            return View("News", news);
        }
    }
}
