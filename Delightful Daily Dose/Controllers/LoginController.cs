using System;
using System.Threading.Tasks;
using Delightful_Daily_Dose.Models;
using Delightful_Daily_Dose.Models.Entities;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace Delightful_Daily_Dose.Controllers
{
    [Route("/[controller]")]
    [ApiController]
    public class LoginController : ControllerBase
    {
        public ApiContext _apiContext;

        public LoginController(ApiContext apiContext)
        {
            _apiContext = apiContext;
        }

        [HttpPost("/Register")]
        public async Task<IActionResult> Register([FromForm]User user)
        {
            try
            {
                await _apiContext.RegisterUser(user);
                return Redirect("/");
            }
            catch (Exception e)
            {
                return Redirect("/Register");
            }
        }

        [HttpPost("/Login")]
        public async Task<IActionResult> LoginUser([FromForm]User user)
        {
            if (await _apiContext.LoginUser(user))
            {
                HttpContext.Session.SetString("username", user.Username);
            }

            return Redirect("/");
        }
    }
}
