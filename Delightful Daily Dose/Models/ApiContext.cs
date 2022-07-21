using System.Linq;
using Delightful_Daily_Dose.Models.Entities;
using Microsoft.EntityFrameworkCore;

namespace Delightful_Daily_Dose.Models
{
    public class ApiContext : DbContext
    {
        public ApiContext(DbContextOptions<ApiContext> options) : base(options) { }
        public DbSet<User> User { get; set; }
        public DbSet<News> News { get; set; }
        public DbSet<Category> Categories { get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<News>().HasIndex(n => n.Title).IsUnique();

            foreach (var relationship in modelBuilder.Model.GetEntityTypes().SelectMany(e => e.GetForeignKeys()))
            {
                relationship.DeleteBehavior = DeleteBehavior.Restrict;
            }

            ConfigureModelBuilderForUser(modelBuilder);
        }
        void ConfigureModelBuilderForUser(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<User>();
            modelBuilder.Entity<User>()
                .Property(user => user.Username)
                .HasMaxLength(60)
                .IsRequired();

            modelBuilder.Entity<User>()
                .Property(user => user.Email)
                .HasMaxLength(60)
                .IsRequired();

            modelBuilder.Entity<User>().HasData(
                new User
                {
                    Id = "1",
                    Username = "admin",
                    Password = "admin123",
                    Email = "admin@ddd.com",
                    Role = "Admin"
                });
        }
        void ConfigureModelBuilderForStory(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<UserStory>().ToTable("Story");
            modelBuilder.Entity<UserStory>()
                .Property(s => s.Title)
                .HasMaxLength(60);

            modelBuilder.Entity<UserStory>()
                .Property(s => s.OwnerId)
                .IsRequired();

            modelBuilder.Entity<UserStory>()
                .HasOne(s => s.Owner)
                .WithMany(u => u.Stories)
                .HasForeignKey(s => s.OwnerId);
        }
    }
}