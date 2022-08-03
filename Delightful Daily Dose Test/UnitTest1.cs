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
        public void Test1()
        {
            UserRepository userRepository = new UserRepository(_context, httpContextAccessor);
            var email = "foispanne@varmegyehaza.hu";
            Assert.IsTrue(userRepository.IsEmailUniq(email));
            
        }

        [Test]
        public void Test2()
        {
            UserRepository userRepository = new UserRepository(_context, httpContextAccessor);
            var email2 = "ddd@bitemyshinymetalass.com";
            Assert.IsFalse(userRepository.IsEmailUniq(email2));
        }
    }
}