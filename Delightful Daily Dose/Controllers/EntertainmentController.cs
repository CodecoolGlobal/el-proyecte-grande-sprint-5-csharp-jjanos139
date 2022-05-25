using System.Linq;
using System.Threading.Tasks;
using Delightful_Daily_Dose.Helpers;
using Microsoft.AspNetCore.Mvc;

namespace Delightful_Daily_Dose.Controllers
{
    public class EntertainmentController : Controller
    {
        public IActionResult Index()
        {
            return View();
        }
        public async Task<string> GetEntertainmentNews()
        {
            string apiUrl =
                "https://newsdata.io/api/1/news?apikey=pub_7623a07d5aec61d454d6ab40deb859282e19&language=hu&category=entertainment";
            return await APIHelper.GetApi(apiUrl);
        }
    }
}
