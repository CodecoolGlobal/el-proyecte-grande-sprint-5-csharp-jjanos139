using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Delightful_Daily_Dose_Test
{
    public class MockingHelper
    {
        protected DbContextOptions<ApiContext> _options;
        protected ApiContext _context;

        [SetUp]
        public void Setup()
        {
            var options = new DbContextOptionsBuilder<ApiContext>()
        .UseInMemoryDatabase(databaseName: "DelightfulDailyDose")
            .Options;
        _options = options;
        using (var context = new ApiContext(options))
        {
            context.News.Add(new News()
            {
                ID = 1,
                Title = "work please",
                Link = null,
                image_url = null,
                Description = "please work",
                PubDate = null,
                Content = "please please work",
                Language = "en"
            });
            context.User.Add(new User
            {
                Id = "6464648",
                Username = "admin",
                Email = "ddd@bitemyshinymetalass.com",
                Password = "admin111",
                Role = "Admin"
            });

            context.SaveChanges();
        }

        _context = new ApiContext(options);
        }

        [TearDown]
        public void TearDown()
        {
            _context.Database.EnsureDeleted();
        }
        
    }
}
