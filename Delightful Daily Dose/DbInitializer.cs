using System.Threading.Tasks;
using Delightful_Daily_Dose.Models;

namespace Delightful_Daily_Dose;

internal class DbInitializer
{
    public static async Task InitializeAsync(ApiContext context)
    {
        await context.Database.EnsureCreatedAsync();
    }
}