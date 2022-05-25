using System.Collections.Generic;
using System.Threading.Tasks;
using Delightful_Daily_Dose.Helpers;
using Delightful_Daily_Dose.Models;
using Microsoft.AspNetCore.Mvc;

namespace Delightful_Daily_Dose.Controllers
{
    public class SportController : Controller
    {
        private const string ApiUrl = "https://newsdata.io/api/1/news?apikey=pub_7682df2f939752b8d025143691aa2d432601&country=hu&category=sports";
        public async Task<IActionResult> Index()
        {
            List<News> news = await APIHelper.GetNews(ApiUrl);
            return View(news);
        }
        
    }
}
