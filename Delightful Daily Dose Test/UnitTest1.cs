using Microsoft.Extensions.Options;

namespace Delightful_Daily_Dose_Test
{
    public class Tests
    {
        private readonly IHttpContextAccessor httpContextAccessor;
        private DbContextOptions<ApiContext> _options;

        public Tests()
        {
            httpContextAccessor = Substitute.For<IHttpContextAccessor>();
            var options = new DbContextOptionsBuilder<ApiContext>()
                .UseInMemoryDatabase(databaseName: "DelightfulDailyDose")
                .Options;
            _options = options;
            using (var context = new ApiContext(options))
            {
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
        }

        [SetUp]
        public void Setup()
        {
        }

        [Test]
        public void Test1()
        {
            using (var context = new ApiContext(_options))
            {
                UserRepository userRepository = new UserRepository(context, httpContextAccessor);
                var email = "foispanne@varmegyehaza.hu";
                Assert.IsTrue(userRepository.IsEmailUniq(email));
            }
        }

        [Test]
        public void Test2()
        {
            using (var context = new ApiContext(_options))
            {
                UserRepository userRepository = new UserRepository(context, httpContextAccessor);
                var email2 = "ddd@bitemyshinymetalass.com";
                Assert.IsFalse(userRepository.IsEmailUniq(email2));
            }
        }
    }
}