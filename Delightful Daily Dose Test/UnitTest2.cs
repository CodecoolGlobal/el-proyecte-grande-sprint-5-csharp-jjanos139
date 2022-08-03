namespace Delightful_Daily_Dose_Test
{
    public class UnitTest2 : MockingHelper
    {
        private  ILogger<HomeController> logger;
        private ApiHelper apiHelper;
        private IUserRepository userRepository;
        private HomeController _homeController;
        private DbContextOptions<ApiContext> _options;
        private News news;
        public UnitTest2()
        {
            
            logger = Substitute.For<ILogger<HomeController>>();
            news = Substitute.For<News>();
            userRepository = Substitute.For<IUserRepository>();
            news = new News();
        }

        [SetUp]
        public void Setup()
        {
            apiHelper = Substitute.For<ApiHelper>(_context);
            _homeController = new HomeController(logger, apiHelper, userRepository);
        }

        [Test]
        public void IndexEndpointNotNullTest()
        {
            var response = _homeController.Index();
            Assert.IsNotNull(response);
        }

        [Test]
        public void IndexEndpointHasValidTypeTest()
        {
            var response = _homeController.Index();
            Assert.IsInstanceOf<Task<List<News>>>(response);
        }


        [Test]
        public void BusinessEndpointNotNullTest()
        {
            var response = _homeController.Business();
            Assert.IsNotNull(response);
        }

        [Test]
        public void BusinessEndpointHasValidTypeTest()
        {
            var response = _homeController.Business();
            Assert.IsInstanceOf<Task<List<News>>>(response);
        }

        [Test]
        public void CulinaryEndpointNotNullTest()
        {
            var response = _homeController.Culinary();
            Assert.IsNotNull(response);
        }

        [Test]
        public void CulinaryEndpointHasValidTypeTest()
        {
            var response = _homeController.Culinary();
            Assert.IsInstanceOf<Task<List<News>>>(response);
        }

        [Test]
        public void DomesticEndpointNotNullTest()
        {
            var response = _homeController.Domestic();
            Assert.IsNotNull(response);
        }

        [Test]
        public void DomesticEndpointHasValidTypeTest()
        {
            var response = _homeController.Domestic();
            Assert.IsInstanceOf<Task<List<News>>>(response);
        }

        [Test]
        public void EconomicsEndpointNotNullTest()
        {
            var response = _homeController.Economics();
            Assert.IsNotNull(response);
        }

        [Test]
        public void EconomicsEndpointHasValidTypeTest()
        {
            var response = _homeController.Economics();
            Assert.IsInstanceOf<Task<List<News>>>(response);
        }

        [Test]
        public void EntertainmentEndpointNotNullTest()
        {
            var response = _homeController.Entertainment();
            Assert.IsNotNull(response);
        }

        [Test]
        public void EntertainmentEndpointHasValidTypeTest()
        {
            var response = _homeController.Entertainment();
            Assert.IsInstanceOf<Task<List<News>>>(response);
        }

        [Test]
        public void EnvironmentEndpointNotNullTest()
        {
            var response = _homeController.Environment();
            Assert.IsNotNull(response);
        }

        [Test]
        public void EnvironmentEndpointHasValidTypeTest()
        {
            var response = _homeController.Environment();
            Assert.IsInstanceOf<Task<List<News>>>(response);
        }

        [Test]
        public void ForeignEndpointNotNullTest()
        {
            var response = _homeController.Foreign();
            Assert.IsNotNull(response);
        }

        [Test]
        public void ForeignEndpointHasValidTypeTest()
        {
            var response = _homeController.Foreign();
            Assert.IsInstanceOf<Task<List<News>>>(response);
        }

        [Test]
        public void FreshEndpointNotNullTest()
        {
            var response = _homeController.Fresh();
            Assert.IsNotNull(response);
        }

        [Test]
        public void FreshEndpointHasValidTypeTest()
        {
            var response = _homeController.Fresh();
            Assert.IsInstanceOf<Task<List<News>>>(response);
        }

        [Test]
        public void HealthEndpointNotNullTest()
        {
            var response = _homeController.Health();
            Assert.IsNotNull(response);
        }

        [Test]
        public void HealthEndpointHasValidTypeTest()
        {
            var response = _homeController.Health();
            Assert.IsInstanceOf<Task<List<News>>>(response);
        }

        [Test]
        public void MostViewedEndpointNotNullTest()
        {
            var response = _homeController.MostViewed();
            Assert.IsNotNull(response);
        }

        [Test]
        public void MostViewedEndpointHasValidTypeTest()
        {
            var response = _homeController.MostViewed();
            Assert.IsInstanceOf<Task<List<News>>>(response);
        }

        [Test]
        public void PoliticsEndpointNotNullTest()
        {
            var response = _homeController.Politics();
            Assert.IsNotNull(response);
        }

        [Test]
        public void PoliticsEndpointHasValidTypeTest()
        {
            var response = _homeController.Politics();
            Assert.IsInstanceOf<Task<List<News>>>(response);
        }

        [Test]
        public void SportEndpointNotNullTest()
        {
            var response = _homeController.Sport();
            Assert.IsNotNull(response);
        }

        [Test]
        public void SportEndpointHasValidTypeTest()
        {
            var response = _homeController.Sport();
            Assert.IsInstanceOf<Task<List<News>>>(response);
        }

        [Test]
        public void TechWorldEndpointNotNullTest()
        {
            var response = _homeController.TechWorld();
            Assert.IsNotNull(response);
        }

        [Test]
        public void TechWorldEndpointHasValidTypeTest()
        {
            var response = _homeController.TechWorld();
            Assert.IsInstanceOf<Task<List<News>>>(response);
        }

        [Test]
        public void GetJokeEndpointNotNullTest()
        {
            var response = _homeController.GetJoke();
            Assert.IsNotNull(response);
        }

        [Test]
        public void GetJokeEndpointHasValidTypeTest()
        {
            var response = _homeController.GetJoke();
            Assert.IsInstanceOf<Task<string>>(response);
        }

        [Test]
        public void GetDogEndpointNotNullTest()
        {
            var response = _homeController.GetDog();
            Assert.IsNotNull(response);
        }

        [Test]
        public void GetDogEndpointHasValidTypeTest()
        {
            var response = _homeController.GetDog();
            Assert.IsInstanceOf<Task<string>>(response);
        }

        [Test]
        public void GetNameDayEndpointNotNullTest()
        {
            var response = _homeController.GetNameDay();
            Assert.IsNotNull(response);
        }

        [Test]
        public void GetNameDayEndpointHasValidTypeTest()
        {
            var response = _homeController.GetNameDay();
            Assert.IsInstanceOf<Task<string>>(response);
        }

        [Test]
        public void GetWeatherEndpointNotNullTest()
        {
            var response = _homeController.GetWeather();
            Assert.IsNotNull(response);
        }

        [Test]
        public void GetWeatherEndpointHasValidTypeTest()
        {
            var response = _homeController.GetWeather();
            Assert.IsInstanceOf<Task<string>>(response);
        }

        //[Test]
        //public void GetExchangeRateEndpointNotNullTest()
        //{
        //    var response = _homeController.GetExchangeRate();
        //    Assert.IsNotNull(response);
        //}

        //[Test]
        //public void GetExchangeRateEndpointHasValidTypeTest()
        //{
        //    var response = _homeController.GetExchangeRate();
        //    Assert.IsInstanceOf<Task<string>>(response);
        //}

        [Test]
        public void GetTopBoxOfficeEndpointNotNullTest()
        {
            var response = _homeController.GetTopBoxOffice();
            Assert.IsNotNull(response);
        }

        [Test]
        public void GetTopBoxOfficeEndpointHasValidTypeTest()
        {
            var response = _homeController.GetTopBoxOffice();
            Assert.IsInstanceOf<Task<string>>(response);
        }

        [Test]
        public void GetTopImdbTvShowsEndpointNotNullTest()
        {
            var response = _homeController.GetTopImdbTvShows();
            Assert.IsNotNull(response);
        }

        [Test]
        public void GetTopImdbTvShowsEndpointHasValidTypeTest()
        {
            var response = _homeController.GetTopImdbTvShows();
            Assert.IsInstanceOf<Task<string>>(response);
        }

        [Test]
        public void GetComingSoonToBoxOfficeEndpointNotNullTest()
        {
            var response = _homeController.GetComingSoonToBoxOffice();
            Assert.IsNotNull(response);
        }

        [Test]
        public void GetComingSoonToBoxOfficeEndpointHasValidTypeTest()
        {
            var response = _homeController.GetComingSoonToBoxOffice();
            Assert.IsInstanceOf<Task<string>>(response);
        }

        [Test]
        public void GetYoutubeMostViewedEndpointNotNullTest()
        {
            var response = _homeController.GetYoutubeMostViewed();
            Assert.IsNotNull(response);
        }

        [Test]
        public void GetYoutubeMostViewedEndpointHasValidTypeTest()
        {
            var response = _homeController.GetYoutubeMostViewed();
            Assert.IsInstanceOf<Task<string>>(response);
        }

        [Test]
        public void GetUsersEndpointNotNullTest()
        {
            var response = _homeController.Users();
            Assert.IsNotNull(response);
        }

        [Test]
        public void GetUsersEndpointHasValidTypeTest()
        {
            var response = _homeController.Users();
            Assert.IsInstanceOf<IEnumerable<User>>(response);
        }

        //[Test]
        //public void GetNewsHistoryEndpointNotNullTest()
        //{
        //    var response = _homeController.GetNewsHistory();
        //    Assert.IsNotNull(response);
        //}

        //[Test]
        //public void GetNewsHistoryEndpointHasValidTypeTest()
        //{
        //    var response = _homeController.GetNewsHistory();
        //    Assert.IsInstanceOf<IEnumerable<News>>(response);
        //}

    }
}
