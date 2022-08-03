using System.Security.Cryptography;
using Microsoft.Extensions.Options;

namespace Delightful_Daily_Dose_Test
{
    public class Tests : MockingHelper
    {
        private IHttpContextAccessor httpContextAccessor;

        [SetUp]
        public void Setup()
        {
            httpContextAccessor = Substitute.For<IHttpContextAccessor>();

        }

        [Test]
        public void EmailIsUniqueHappyPath()
        {
            UserRepository userRepository = new UserRepository(_context, httpContextAccessor);
            var email = "foispanne@varmegyehaza.hu";
            Assert.IsTrue(userRepository.IsEmailUniq(email));
            
        }

        [Test]
        public void EmailIsUniqueSadPath()
        {
            UserRepository userRepository = new UserRepository(_context, httpContextAccessor);
            var email2 = "ddd@bitemyshinymetalass.com";
            Assert.IsFalse(userRepository.IsEmailUniq(email2));
        }

        [Test]
        public void UsernameUniqueHappyTest()
        {
            UserRepository userRepository = new UserRepository(_context, httpContextAccessor);
            var username = "Admin";
            Assert.IsTrue(userRepository.IsUsernameUniq(username));
        }

        [Test]
        public void UsernameUniqueSadTest()
        {
            UserRepository userRepository = new UserRepository(_context, httpContextAccessor);
            var username = "admin";
            Assert.IsFalse(userRepository.IsUsernameUniq(username));
        }

        [Test]
        public void GetAllUsersTestHappyPath()
        {
            UserRepository userRepository = new UserRepository(_context, httpContextAccessor);
            Assert.AreEqual(_context.User, userRepository.GetAllUsers());
        }


        [Test]
        public async Task TestAuthenticateHappyPath()
        {
            var newUser = new User
            {
                Id = "6464648",
                Username = "admin",
                Email = "ddd@bitemyshinymetalass.com",
                Password = "admin111",
                Role = "Admin"
            };
            
            UserRepository userRepository = new UserRepository(_context, httpContextAccessor);
            var username = "admin";
            var password = "admin111";
            var actual = await userRepository.AuthenticateAsync(username, password);
            Assert.AreEqual("6464648", actual.Id);
            Assert.AreEqual("admin", actual.Username);
            Assert.AreEqual("ddd@bitemyshinymetalass.com", actual.Email);
            Assert.AreEqual("admin111", actual.Password);
            Assert.AreEqual("Admin", actual.Role);
        }

        [Test]
        public async Task TestAuthenticateSadPath()
        {
            var newUser = new User
            {
                Id = "6464648",
                Username = "admin",
                Email = "ddd@bitemyshinymetalass.com",
                Password = "admin111",
                Role = "Admin"
            };

            UserRepository userRepository = new UserRepository(_context, httpContextAccessor);
            var username = "admin";
            var password = "admin111";
            var actual = await userRepository.AuthenticateAsync(username, password);
            Assert.AreNotEqual("646468", actual.Id);
            Assert.AreNotEqual("adin", actual.Username);
            Assert.AreNotEqual("dd@bitemyshinymetalass.com", actual.Email);
            Assert.AreNotEqual("adin111", actual.Password);
            Assert.AreNotEqual("Adn", actual.Role);
        }
    }
}