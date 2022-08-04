using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Delightful_Daily_Dose_Test
{
    public class AuthServiceTests : MockingHelper
    {
        readonly string jwtSecret;
        readonly int jwtLifespan;
        private AuthService authService;

        [SetUp]
        public void Setup()
        {
            authService = new AuthService(jwtSecret, jwtLifespan);
        }

        [Test]
        public void HashPasswordTest()
        {
            var password = "admin123";
            var response = authService.HashPassword(password);
            Assert.IsNotNull(response);
        }

        [Test]
        public void HashPasswordTest2()
        {
            var password = "admin123";
            var response = authService.HashPassword(password);
            var expected = "AQAAAAEAACcQAAAAEDmnY8KFZQJa3oywbNIr6al/boJdrL+ZVntk9zyukHMPT+TSiPSmnZX9HL3juJcTnQ==";
            Assert.AreEqual(expected.Length, response.Length);
        }

        [Test]
        public void VerifyPasswordTestHappyPath()
        {
            var password = "admin123";
            var expected = "AQAAAAEAACcQAAAAEDmnY8KFZQJa3oywbNIr6al/boJdrL+ZVntk9zyukHMPT+TSiPSmnZX9HL3juJcTnQ==";
            var response = authService.VerifyPassword(password, expected);
            Assert.IsTrue(response);
        }

        [Test]
        public void VerifyPasswordTestSadPath()
        {
            var password = "admin123";
            var expected = "AQAAAAEAACcQAAAAEDmnY8KFZQJa3oywbNIr6al/boJdrL+ZVntk9zyukHMPT+TSinZX9HL3jewruJcTnQ==";
            var response = authService.VerifyPassword(password, expected);
            Assert.IsFalse(response);
        }
    }
}
