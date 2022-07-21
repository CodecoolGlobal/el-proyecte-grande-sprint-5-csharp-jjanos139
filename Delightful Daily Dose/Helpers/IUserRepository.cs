using System.Threading.Tasks;
using Delightful_Daily_Dose.Models.Entities;

namespace Delightful_Daily_Dose.Helpers
{
    public interface IUserRepository : IEntityBaseRepository<User>
    {
        bool IsUsernameUniq(string username);
        bool IsEmailUniq(string email);
        Task<User> AuthenticateAsync(string userName, string password);
        public User FindCurrentUser();
    }
}
