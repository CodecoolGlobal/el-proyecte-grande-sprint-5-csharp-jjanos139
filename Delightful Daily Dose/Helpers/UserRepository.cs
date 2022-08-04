using System.Collections.Generic;
using System.IdentityModel.Tokens.Jwt;
using System.Linq;
using System.Threading.Tasks;
using Delightful_Daily_Dose.Models;
using Delightful_Daily_Dose.Models.Entities;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace Delightful_Daily_Dose.Helpers
{
    public class UserRepository : EntityBaseRepository<User>, IUserRepository
    {
        private readonly IHttpContextAccessor _httpContextAccessor;
        public UserRepository(ApiContext context, IHttpContextAccessor httpContextAccessor) : base(context)
        {
            _httpContextAccessor = httpContextAccessor;
        }

        public virtual bool IsEmailUniq(string email)
        {
            var user = this.GetSingle(u => u.Email == email);
            return user == null;
        }

        public virtual Task<User> AuthenticateAsync(string userName, string password)
        {
            return Task.Run(() => GetAll()
                .FirstOrDefault(user => user.Username == userName && user.Password == password));
        }

        public virtual User FindCurrentUser()
        {
            var authorization = _httpContextAccessor.HttpContext.Request.Headers.Authorization.ToString();

            var tokenHandler = new JwtSecurityTokenHandler();
            var token = tokenHandler.ReadJwtToken(authorization.Split(' ').Last());
            var userName = token.Claims.Single(claim => claim.Type == "name").Value;

            var user = GetSingle(user => user.Username == userName);
            return user;
        }

        public virtual bool IsUsernameUniq(string username)
        {
            var user = this.GetSingle(u => u.Username == username);
            return user == null;
        }

        public virtual IEnumerable<User> GetAllUsers()
        {
            return GetAll();
        }
    }
}
