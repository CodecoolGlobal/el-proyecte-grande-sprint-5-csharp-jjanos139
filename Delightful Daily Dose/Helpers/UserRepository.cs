using Delightful_Daily_Dose.Models;
using Delightful_Daily_Dose.Models.Entities;

namespace Delightful_Daily_Dose.Helpers
{
    public class UserRepository : EntityBaseRepository<User>, IUserRepository
    {
        public UserRepository(ApiContext context) : base(context) { }

        public bool IsEmailUniq(string email)
        {
            var user = this.GetSingle(u => u.Email == email);
            return user == null;
        }

        public bool IsUsernameUniq(string username)
        {
            var user = this.GetSingle(u => u.Username == username);
            return user == null;
        }
    }
}
