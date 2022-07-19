using System;
using System.Net.Http;
using Delightful_Daily_Dose.Helpers;
using Delightful_Daily_Dose.Models.Entities;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Net.Http.Headers;

namespace Delightful_Daily_Dose.Controllers
{
    [ApiController]
    public class AuthController : ControllerBase
    {
        IAuthService authService;
        IUserRepository userRepository;
        public AuthController(IAuthService authService, IUserRepository userRepository)
        {
            this.authService = authService;
            this.userRepository = userRepository;
        }

        [HttpPost("/Login")]
        public IActionResult Post([FromForm] LoginViewModel model)
        {
            if (!ModelState.IsValid) return BadRequest(ModelState);

            var user = userRepository.GetSingle(u => u.Username == model.Username);

            if (user == null)
            {
                return BadRequest(new { username = "no user with this username" });
            }

            var passwordValid = authService.VerifyPassword(model.Password, user.Password);
            if (!passwordValid)
            {
                return BadRequest(new { password = "invalid password" });
            }

            HttpContext.Response.Cookies.Append(
                "user",
                model.Username);
                //new CookieOptions
                //{
                //    HttpOnly = true
                //});

            return Redirect("/");
        }

        [HttpPost("/Register")]
        public IActionResult Post([FromForm] RegisterViewModel model)
        {
            if (!ModelState.IsValid) return BadRequest(ModelState);

            var emailUniq = userRepository.IsEmailUniq(model.Email);
            if (!emailUniq) return BadRequest(new { email = "user with this email already exists" });
            var usernameUniq = userRepository.IsUsernameUniq(model.Username);
            if (!usernameUniq) return BadRequest(new { username = "user with this email already exists" });

            var id = Guid.NewGuid().ToString();
            var user = new User
            {
                Id = id,
                Username = model.Username,
                Email = model.Email,
                Password = authService.HashPassword(model.Password)
            };
            userRepository.Add(user);
            userRepository.Commit();

            return Redirect("/");
        }

        [HttpPost("/Logout")]
        public IActionResult Post()
        {
            HttpContext.Response.Cookies.Delete("user");
            return Redirect("/");
        }
    }
}
