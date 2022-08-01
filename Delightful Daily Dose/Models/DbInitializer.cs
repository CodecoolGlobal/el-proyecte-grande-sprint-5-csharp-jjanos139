using System.Threading.Tasks;

namespace Delightful_Daily_Dose.Models;

internal class DbInitializer
{
    public static async Task InitializeAsync(ApiContext context)
    {
        await context.Database.EnsureCreatedAsync();
    }
}