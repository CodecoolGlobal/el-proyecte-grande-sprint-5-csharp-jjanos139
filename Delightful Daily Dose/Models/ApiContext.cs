using Microsoft.EntityFrameworkCore;

namespace Delightful_Daily_Dose.Models
{
    public class ApiContext : DbContext
    {
        public ApiContext(DbContextOptions<ApiContext> options) : base(options)
        {
        }
    }
}
