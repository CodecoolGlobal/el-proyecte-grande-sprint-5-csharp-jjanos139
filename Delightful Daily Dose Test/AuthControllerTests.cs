using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Newtonsoft.Json;
using NSubstitute.ReceivedExtensions;

namespace Delightful_Daily_Dose_Test
{
    public class AuthControllerTests : MockingHelper
    {
        IAuthService authService;
        IUserRepository userRepository;
        EmailSender _emailSender;
        AuthController authController;
        private IHttpContextAccessor httpContextAccessor;
        readonly string jwtSecret;
        private readonly string email;
        private readonly string password;

        public AuthControllerTests()
        {
            httpContextAccessor = Substitute.For<IHttpContextAccessor>();
            userRepository = Substitute.For<UserRepository>(_context, httpContextAccessor);
            authService = new AuthService(jwtSecret);
            _emailSender = new EmailSender(email, password);

            userRepository.Configure().GetSingle("1").Returns(new User
            {
                Username = "admin",
                Role = "Admin"
            });
            authService.Configure().VerifyPassword("randy", "marsh").Returns(false);
            authController = Substitute.For<AuthController>(authService, userRepository, _emailSender);
        }

        [SetUp]
        public void Setup()
        {
            
        }


        //[Test]
        //public void Login()
        //{
        //    var username = "admin";
        //    var password = "admin111";
        //    var request = "{\"username\": \"admin\",\"password\": \"admin111\"}";
        //    var deserializedRequest = JsonConvert.DeserializeObject<LoginViewModel>(request);
        //    var response = authController.Login(deserializedRequest);
        //    authService.Received().GetAuthData("admin", "Admin");
        //}
    }
}
