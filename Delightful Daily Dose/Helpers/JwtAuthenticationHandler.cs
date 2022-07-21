using System.Collections.Generic;
using System.Security.Claims;
using System.Text.Encodings.Web;
using System.Threading.Tasks;
using Delightful_Daily_Dose.Models.Entities;
using Microsoft.AspNetCore.Authentication;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.Extensions.Logging;
using Microsoft.Extensions.Options;

namespace Delightful_Daily_Dose.Helpers
{
    public class JwtAuthenticationHandler : AuthenticationHandler<AuthenticationSchemeOptions>
    {
        private readonly IUserRepository _userRepository;

        public JwtAuthenticationHandler(
            IOptionsMonitor<AuthenticationSchemeOptions> options,
            ILoggerFactory logger,
            UrlEncoder encoder,
            ISystemClock clock,
            IUserRepository userRepository)
            : base(options, logger, encoder, clock)
        {
            _userRepository = userRepository;
        }

        protected override async Task<AuthenticateResult> HandleAuthenticateAsync()
        {
            var endpoint = Context.GetEndpoint();
            if (endpoint?.Metadata?.GetMetadata<IAllowAnonymous>() != null)
                return AuthenticateResult.NoResult();

            //string userName = "admin"; //notadmin
            //string password = "AQAAAAEAACcQAAAAENwASiH23ZvwjKbm5UfcNf9mXMzkBrqU5Jkzsa0FJAiugpFyX9JoLpSJ0AzzI76cfw=="; //"AQAAAAEAACcQAAAAEGsayogugQksGvaHsmu8Bz2AhEbdiOYnMIokArhpaJGGtxC7DQAQHGXh3o3n+NjVog=="



            User user = _userRepository.FindCurrentUser();
            //string userName = currentUser?.Username ?? "";
            //string password = currentUser?.Password ?? "";

            //var user = await _userRepository.AuthenticateAsync(userName, password);

            if (user is null)
            {
                return AuthenticateResult.Fail("Access denied!");
            }

            var claims = new List<Claim>()
            {
                new Claim(ClaimTypes.Name, user.Username),
                new Claim(ClaimTypes.Role, user.Role)
            };


            var identity = new ClaimsIdentity(claims, Scheme.Name);
            var principal = new ClaimsPrincipal(identity);
            var ticket = new AuthenticationTicket(principal, Scheme.Name);

            return AuthenticateResult.Success(ticket);
        }
    }
}
