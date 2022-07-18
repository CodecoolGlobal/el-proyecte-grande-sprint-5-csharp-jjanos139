using System;
using System.Diagnostics.Eventing.Reader;
using System.Linq;
using System.Reflection;
using System.Threading.Tasks;
using Delightful_Daily_Dose.Models.Entities;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace Delightful_Daily_Dose.Models
{
    public class ApiContext : DbContext
    {
        public ApiContext(DbContextOptions<ApiContext> options) : base(options)
        {
        }

        public DbSet<User> User { get; set; }
        public DbSet<News> News { get; set; }
        public DbSet<Category> Categories { get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<News>().HasIndex(n => n.Title).IsUnique();
        }

        public async Task<IActionResult> RegisterUser(User user)
        {
            var getUser = await User.FirstOrDefaultAsync(p => p.Email == user.Email || p.Username == user.Username);
            if (getUser == null)
            {
                user.Password = AESCryptography.Encrypt(user.Password);
                User.Add(user);
                await SaveChangesAsync();
            }
            else
            {
                throw new Exception("This email/username is already in use.");
            }

            return new OkResult();
        }

        public async Task<bool> LoginUser(User user)
        {
            var getUser = await User.SingleAsync(p =>
                p.Username == user.Username && p.Password == AESCryptography.Encrypt(user.Password));
            if (getUser != null)
            {
                return true;
            }

            return false;
        }
    }
}