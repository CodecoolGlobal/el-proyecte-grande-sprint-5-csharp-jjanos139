using Delightful_Daily_Dose.Models.Entities;
using Microsoft.EntityFrameworkCore;

namespace Delightful_Daily_Dose.Models
{
    public class ApiContext : DbContext
    {
        public ApiContext(DbContextOptions<ApiContext> options) : base(options)
        {
        }

        public DbSet<News> News { get; set; }
        public DbSet<Category> Categories { get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<News>().HasIndex(n => n.Title).IsUnique();
        }
    }
}
