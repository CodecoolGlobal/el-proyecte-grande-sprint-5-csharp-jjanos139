using Microsoft.AspNetCore.Mvc;

namespace Delightful_Daily_Dose.Controllers
{
    public class DomesticController : Controller
    {
        public IActionResult Index()
        {
            return View();
        }
    }
}
