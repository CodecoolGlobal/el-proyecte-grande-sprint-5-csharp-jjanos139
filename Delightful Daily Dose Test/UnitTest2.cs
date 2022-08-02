namespace Delightful_Daily_Dose_Test
{
    public class UnitTest2
    {
        private  ILogger<HomeController> logger;
        private ApiHelper apiHelper;
        private IUserRepository userRepository;
        private HomeController homeController;
        private DbContextOptions<ApiContext> _options;
        private News news;
        public UnitTest2()
        {
            
            logger = Substitute.For<ILogger<HomeController>>();
            news = Substitute.For<News>();
            userRepository = Substitute.For<IUserRepository>();
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
            using (var context = new ApiContext(options))
                apiHelper = new ApiHelper(context);
            news = new News();


        }

        [Test]
        public void IndexEndpointNotNullTest()
        {
            HomeController homeController = new HomeController(logger, apiHelper, userRepository);
            var response = homeController.Index();
            Assert.IsNotNull(response);
        }

        [Test]
        public void IndexEndpointHasValidTypeTest()
        {
            HomeController homeController = new HomeController(logger, apiHelper, userRepository);
            var response = homeController.Index();
            Assert.IsInstanceOf<Task<List<News>>>(response);
        }


        [Test]
        public void BusinessEndpointNotNullTest()
        {
            HomeController homeController = new HomeController(logger, apiHelper, userRepository);
            var response = homeController.Business();
            Assert.IsNotNull(response);
        }

        [Test]
        public void BusinessEndpointHasValidTypeTest()
        {
            HomeController homeController = new HomeController(logger, apiHelper, userRepository);
            var response = homeController.Business();
            Assert.IsInstanceOf<Task<List<News>>>(response);
        }

        [Test]
        public void CulinaryEndpointNotNullTest()
        {
            HomeController homeController = new HomeController(logger, apiHelper, userRepository);
            var response = homeController.Culinary();
            Assert.IsNotNull(response);
        }

        [Test]
        public void CulinaryEndpointHasValidTypeTest()
        {
            HomeController homeController = new HomeController(logger, apiHelper, userRepository);
            var response = homeController.Culinary();
            Assert.IsInstanceOf<Task<List<News>>>(response);
        }

        [Test]
        public void DomesticEndpointNotNullTest()
        {
            HomeController homeController = new HomeController(logger, apiHelper, userRepository);
            var response = homeController.Domestic();
            Assert.IsNotNull(response);
        }

        [Test]
        public void DomesticEndpointHasValidTypeTest()
        {
            HomeController homeController = new HomeController(logger, apiHelper, userRepository);
            var response = homeController.Domestic();
            Assert.IsInstanceOf<Task<List<News>>>(response);
        }

        [Test]
        public void EconomicsEndpointNotNullTest()
        {
            HomeController homeController = new HomeController(logger, apiHelper, userRepository);
            var response = homeController.Economics();
            Assert.IsNotNull(response);
        }

        [Test]
        public void EconomicsEndpointHasValidTypeTest()
        {
            HomeController homeController = new HomeController(logger, apiHelper, userRepository);
            var response = homeController.Economics();
            Assert.IsInstanceOf<Task<List<News>>>(response);
        }

        [Test]
        public void EntertainmentEndpointNotNullTest()
        {
            HomeController homeController = new HomeController(logger, apiHelper, userRepository);
            var response = homeController.Entertainment();
            Assert.IsNotNull(response);
        }

        [Test]
        public void EntertainmentEndpointHasValidTypeTest()
        {
            HomeController homeController = new HomeController(logger, apiHelper, userRepository);
            var response = homeController.Entertainment();
            Assert.IsInstanceOf<Task<List<News>>>(response);
        }

        [Test]
        public void EnvironmentEndpointNotNullTest()
        {
            HomeController homeController = new HomeController(logger, apiHelper, userRepository);
            var response = homeController.Environment();
            Assert.IsNotNull(response);
        }

        [Test]
        public void EnvironmentEndpointHasValidTypeTest()
        {
            HomeController homeController = new HomeController(logger, apiHelper, userRepository);
            var response = homeController.Environment();
            Assert.IsInstanceOf<Task<List<News>>>(response);
        }

        [Test]
        public void ForeignEndpointNotNullTest()
        {
            HomeController homeController = new HomeController(logger, apiHelper, userRepository);
            var response = homeController.Foreign();
            Assert.IsNotNull(response);
        }

        [Test]
        public void ForeignEndpointHasValidTypeTest()
        {
            HomeController homeController = new HomeController(logger, apiHelper, userRepository);
            var response = homeController.Foreign();
            Assert.IsInstanceOf<Task<List<News>>>(response);
        }

        [Test]
        public void FreshEndpointNotNullTest()
        {
            HomeController homeController = new HomeController(logger, apiHelper, userRepository);
            var response = homeController.Fresh();
            Assert.IsNotNull(response);
        }

        [Test]
        public void FreshEndpointHasValidTypeTest()
        {
            HomeController homeController = new HomeController(logger, apiHelper, userRepository);
            var response = homeController.Fresh();
            Assert.IsInstanceOf<Task<List<News>>>(response);
        }

        [Test]
        public void HealthEndpointNotNullTest()
        {
            HomeController homeController = new HomeController(logger, apiHelper, userRepository);
            var response = homeController.Health();
            Assert.IsNotNull(response);
        }

        [Test]
        public void HealthEndpointHasValidTypeTest()
        {
            HomeController homeController = new HomeController(logger, apiHelper, userRepository);
            var response = homeController.Health();
            Assert.IsInstanceOf<Task<List<News>>>(response);
        }

        [Test]
        public void MostViewedEndpointNotNullTest()
        {
            HomeController homeController = new HomeController(logger, apiHelper, userRepository);
            var response = homeController.MostViewed();
            Assert.IsNotNull(response);
        }

        [Test]
        public void MostViewedEndpointHasValidTypeTest()
        {
            HomeController homeController = new HomeController(logger, apiHelper, userRepository);
            var response = homeController.MostViewed();
            Assert.IsInstanceOf<Task<List<News>>>(response);
        }

        [Test]
        public void PoliticsEndpointNotNullTest()
        {
            HomeController homeController = new HomeController(logger, apiHelper, userRepository);
            var response = homeController.Politics();
            Assert.IsNotNull(response);
        }

        [Test]
        public void PoliticsEndpointHasValidTypeTest()
        {
            HomeController homeController = new HomeController(logger, apiHelper, userRepository);
            var response = homeController.Politics();
            Assert.IsInstanceOf<Task<List<News>>>(response);
        }

        [Test]
        public void SportEndpointNotNullTest()
        {
            HomeController homeController = new HomeController(logger, apiHelper, userRepository);
            var response = homeController.Sport();
            Assert.IsNotNull(response);
        }

        [Test]
        public void SportEndpointHasValidTypeTest()
        {
            HomeController homeController = new HomeController(logger, apiHelper, userRepository);
            var response = homeController.Sport();
            Assert.IsInstanceOf<Task<List<News>>>(response);
        }

        [Test]
        public void TechWorldEndpointNotNullTest()
        {
            HomeController homeController = new HomeController(logger, apiHelper, userRepository);
            var response = homeController.TechWorld();
            Assert.IsNotNull(response);
        }

        [Test]
        public void TechWorldEndpointHasValidTypeTest()
        {
            HomeController homeController = new HomeController(logger, apiHelper, userRepository);
            var response = homeController.TechWorld();
            Assert.IsInstanceOf<Task<List<News>>>(response);
        }

        [Test]
        public void GetJokeEndpointNotNullTest()
        {
            HomeController homeController = new HomeController(logger, apiHelper, userRepository);
            var response = homeController.GetJoke();
            Assert.IsNotNull(response);
        }

        [Test]
        public void GetJokeEndpointHasValidTypeTest()
        {
            HomeController homeController = new HomeController(logger, apiHelper, userRepository);
            var response = homeController.GetJoke();
            Assert.IsInstanceOf<Task<string>>(response);
        }

        [Test]
        public void GetDogEndpointNotNullTest()
        {
            HomeController homeController = new HomeController(logger, apiHelper, userRepository);
            var response = homeController.GetDog();
            Assert.IsNotNull(response);
        }

        [Test]
        public void GetDogEndpointHasValidTypeTest()
        {
            HomeController homeController = new HomeController(logger, apiHelper, userRepository);
            var response = homeController.GetDog();
            Assert.IsInstanceOf<Task<string>>(response);
        }

        [Test]
        public void GetNameDayEndpointNotNullTest()
        {
            HomeController homeController = new HomeController(logger, apiHelper, userRepository);
            var response = homeController.GetNameDay();
            Assert.IsNotNull(response);
        }

        [Test]
        public void GetNameDayEndpointHasValidTypeTest()
        {
            HomeController homeController = new HomeController(logger, apiHelper, userRepository);
            var response = homeController.GetNameDay();
            Assert.IsInstanceOf<Task<string>>(response);
        }

        [Test]
        public void GetWeatherEndpointNotNullTest()
        {
            HomeController homeController = new HomeController(logger, apiHelper, userRepository);
            var response = homeController.GetWeather();
            Assert.IsNotNull(response);
        }

        [Test]
        public void GetWeatherEndpointHasValidTypeTest()
        {
            HomeController homeController = new HomeController(logger, apiHelper, userRepository);
            var response = homeController.GetWeather();
            Assert.IsInstanceOf<Task<string>>(response);
        }

        //[Test]
        //public void GetExchangeRateEndpointNotNullTest()
        //{
        //    HomeController homeController = new HomeController(logger, apiHelper, userRepository);
        //    var response = homeController.GetExchangeRate();
        //    Assert.IsNotNull(response);
        //}

        //[Test]
        //public void GetExchangeRateEndpointHasValidTypeTest()
        //{
        //    HomeController homeController = new HomeController(logger, apiHelper, userRepository);
        //    var response = homeController.GetExchangeRate();
        //    Assert.IsInstanceOf<Task<string>>(response);
        //}

        [Test]
        public void GetTopBoxOfficeEndpointNotNullTest()
        {
            HomeController homeController = new HomeController(logger, apiHelper, userRepository);
            var response = homeController.GetTopBoxOffice();
            Assert.IsNotNull(response);
        }

        [Test]
        public void GetTopBoxOfficeEndpointHasValidTypeTest()
        {
            HomeController homeController = new HomeController(logger, apiHelper, userRepository);
            var response = homeController.GetTopBoxOffice();
            Assert.IsInstanceOf<Task<string>>(response);
        }

        [Test]
        public void GetTopImdbTvShowsEndpointNotNullTest()
        {
            HomeController homeController = new HomeController(logger, apiHelper, userRepository);
            var response = homeController.GetTopImdbTvShows();
            Assert.IsNotNull(response);
        }

        [Test]
        public void GetTopImdbTvShowsEndpointHasValidTypeTest()
        {
            HomeController homeController = new HomeController(logger, apiHelper, userRepository);
            var response = homeController.GetTopImdbTvShows();
            Assert.IsInstanceOf<Task<string>>(response);
        }

        [Test]
        public void GetComingSoonToBoxOfficeEndpointNotNullTest()
        {
            HomeController homeController = new HomeController(logger, apiHelper, userRepository);
            var response = homeController.GetComingSoonToBoxOffice();
            Assert.IsNotNull(response);
        }

        [Test]
        public void GetComingSoonToBoxOfficeEndpointHasValidTypeTest()
        {
            HomeController homeController = new HomeController(logger, apiHelper, userRepository);
            var response = homeController.GetComingSoonToBoxOffice();
            Assert.IsInstanceOf<Task<string>>(response);
        }

        [Test]
        public void GetYoutubeMostViewedEndpointNotNullTest()
        {
            HomeController homeController = new HomeController(logger, apiHelper, userRepository);
            var response = homeController.GetYoutubeMostViewed();
            Assert.IsNotNull(response);
        }

        [Test]
        public void GetYoutubeMostViewedEndpointHasValidTypeTest()
        {
            HomeController homeController = new HomeController(logger, apiHelper, userRepository);
            var response = homeController.GetYoutubeMostViewed();
            Assert.IsInstanceOf<Task<string>>(response);
        }

        [Test]
        public void GetUsersEndpointNotNullTest()
        {
            HomeController homeController = new HomeController(logger, apiHelper, userRepository);
            var response = homeController.Users();
            Assert.IsNotNull(response);
        }

        [Test]
        public void GetUsersEndpointHasValidTypeTest()
        {
            HomeController homeController = new HomeController(logger, apiHelper, userRepository);
            var response = homeController.Users();
            Assert.IsInstanceOf<IEnumerable<User>>(response);
        }

        //[Test]
        //public void GetNewsHistoryEndpointNotNullTest()
        //{
        //    HomeController homeController = new HomeController(logger, apiHelper, userRepository);
        //    var response = homeController.GetNewsHistory();
        //    Assert.IsNotNull(response);
        //}

        //[Test]
        //public void GetNewsHistoryEndpointHasValidTypeTest()
        //{
        //    HomeController homeController = new HomeController(logger, apiHelper, userRepository);
        //    var response = homeController.GetNewsHistory();
        //    Assert.IsInstanceOf<IEnumerable<News>>(response);
        //}

    }
}
