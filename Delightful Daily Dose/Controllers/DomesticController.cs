using System.Collections.Generic;
using System.Threading.Tasks;
using Delightful_Daily_Dose.Helpers;
using Delightful_Daily_Dose.Models;
using Microsoft.AspNetCore.Mvc;

namespace Delightful_Daily_Dose.Controllers
{
    public class DomesticController : Controller
    {
        private const string ApiUrl = "https://newsdata.io/api/1/news?apikey=pub_7623a07d5aec61d454d6ab40deb859282e19&country=hu ";
        private readonly APIHelper _apiHelper;

        public DomesticController()
        {
            _apiHelper = new APIHelper();
        }
        public async Task<IActionResult> Index()
        {
            List<News> news = await _apiHelper.GetNews(ApiUrl);
            ViewData["Title"] = "Domestic";
            return View("News", news);
        }
    }
}