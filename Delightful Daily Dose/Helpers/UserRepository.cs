using System.Collections.Generic;
using System.IdentityModel.Tokens.Jwt;
using System.Linq;
using System.Threading.Tasks;
using Delightful_Daily_Dose.Models;
using Delightful_Daily_Dose.Models.Entities;
using Microsoft.AspNetCore.Http;

namespace Delightful_Daily_Dose.Helpers
{
    public class UserRepository : EntityBaseRepository<User>, IUserRepository
    {
        private readonly IHttpContextAccessor _httpContextAccessor;
        public UserRepository(ApiContext context, IHttpContextAccessor httpContextAccessor) : base(context)
        {
            _httpContextAccessor = httpContextAccessor;
        }

        public bool IsEmailUniq(string email)
        {
            var user = this.GetSingle(u => u.Email == email);
            return user == null;
        }

        public Task<User> AuthenticateAsync(string userName, string password)
        {
            return Task.Run(() => GetAll()
                .FirstOrDefault(user => user.Username == userName && user.Password == password));
        }

        public User FindCurrentUser()
        {
            var authorization = _httpContextAccessor.HttpContext.Request.Headers.Authorization.ToString();

            var tokenHandler = new JwtSecurityTokenHandler();
            var token = tokenHandler.ReadJwtToken(authorization.Split(' ').Last());
            var userName = token.Claims.Single(claim => claim.Type == "name").Value;

            var user = GetSingle(user => user.Username == userName);
            return user;
        }

        public bool IsUsernameUniq(string username)
        {
            var user = this.GetSingle(u => u.Username == username);
            return user == null;
        }

        public IEnumerable<User> GetAllUsers()
        {
            return GetAll();
        }
    }
}
