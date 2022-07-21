using Delightful_Daily_Dose.Models.Entities;

namespace Delightful_Daily_Dose.Helpers
{
    public interface IAuthService
    {
        string HashPassword(string password);
        bool VerifyPassword(string actualPassword, string hashedPassword);
        AuthData GetAuthData(string id, string role);
    }
}
