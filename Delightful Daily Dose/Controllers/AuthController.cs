using System;
using Delightful_Daily_Dose.Helpers;
using Delightful_Daily_Dose.Models.Entities;
using Microsoft.AspNetCore.Mvc;

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
        public IActionResult Login([FromBody] LoginViewModel model)
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

            var token = authService.GetAuthData(user.Id, user.Role);

            return Ok(token);
        }

        [HttpPost("/Register")]
        public IActionResult Register([FromForm] RegisterViewModel model)
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
                Password = authService.HashPassword(model.Password),
                //IsPublisher = model.IsPublisher,
                Role = model.IsPublisher ? "Publisher" : "User"
            };
            userRepository.Add(user);
            userRepository.Commit();

            return NoContent();
        }

        [HttpPost("/Logout")]
        public IActionResult Logout()
        {
            HttpContext.Response.Cookies.Delete("user");
            return Ok();
        }
    }
}
