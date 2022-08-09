using System;
using Delightful_Daily_Dose.Helpers;
using Delightful_Daily_Dose.Models.Entities;
using Microsoft.AspNetCore.Mvc;

namespace Delightful_Daily_Dose.Controllers
{
    [ApiController]
    public class AuthController : ControllerBase
    {
        private readonly IAuthService _authService;
        private readonly IUserRepository _userRepository;
        private readonly EmailSender _emailSender;
        public AuthController(IAuthService authService, IUserRepository userRepository, EmailSender emailSender)
        {
            this._authService = authService;
            this._userRepository = userRepository;
            _emailSender = emailSender;
        }

        [HttpPost("/Login")]
        public IActionResult Login([FromBody] LoginViewModel model)
        {
            var user = _userRepository.GetSingle(u => u.Username == model.Username);
            if (user == null) return StatusCode(401);

            var isVerified = _authService.VerifyPassword(model.Password, user.Password);

            if (!isVerified) return BadRequest();
            HttpContext.Response.Cookies.Append(
                "user",
                model.Username);
            var token = _authService.GetAuthData(user.Username, user.Role);

            return Ok(token);

        }

        [HttpPost("/Register")]
        public IActionResult Register([FromBody] RegisterViewModel model)
        {
            var emailUniq = _userRepository.IsEmailUniq(model.Email);
            var usernameUniq = _userRepository.IsUsernameUniq(model.Username);

            if (!emailUniq || !usernameUniq) return BadRequest();
            var id = Guid.NewGuid().ToString();
            var user = new User
            {
                Id = id,
                Username = model.Username,
                Email = model.Email,
                Password = _authService.HashPassword(model.Password),
                Role = model.IsPublisher ? "Publisher" : "User"
            };
            _userRepository.Add(user);
            _userRepository.Commit();

            _emailSender.SendConfirmationEmail(user.Username, user.Email);
            return Ok();
        }

        [HttpPost("/Logout")]
        public IActionResult Post()
        {
            HttpContext.Response.Cookies.Delete("user");
            return Ok();
        }

        //[EnableCors("ReactPolicy")]
        //[HttpPost("/googleLogin")]
        //public IActionResult GoogleLogin()
        //{
        //    try
        //    {
        //        var properties = new AuthenticationProperties { RedirectUri = Url.Action("GoogleResponse") };
        //        return Challenge(properties, GoogleDefaults.AuthenticationScheme);
        //    }
        //    catch (Exception e)
        //    {
        //        Console.WriteLine(e.Message);
        //    }

        //    return null;
        //}

        ////[EnableCors("ReactPolicy")]
        //[HttpPost("google-response")]
        //public async void GoogleResponse()
        //{
        //    try
        //    {
        //        var result = await HttpContext.AuthenticateAsync(CookieAuthenticationDefaults.AuthenticationScheme);
        //        var claims = result.Principal.Identities.FirstOrDefault()
        //            .Claims.Select(claim => new
        //            {
        //                claim.Issuer,
        //                claim.OriginalIssuer,
        //                claim.Type,
        //                claim.Value
        //            });
        //        HttpContext.Response.Cookies.Append("user", claims.ToList()[1].Value);
        //    }
        //    catch (Exception e)
        //    {
        //        Console.WriteLine(e.Message);
        //    }

        //    //return Ok();
        //}
    }
}
