using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Delightful_Daily_Dose_Test
{
    public class EmailSenderTests : MockingHelper
    {
        private readonly string _email;
        private readonly string _password;
        private EmailSender emailSender;
        public EmailSenderTests()
        {
            emailSender = Substitute.For<EmailSender>(_email, _password);
        }

        [Test]
        public void GreetingEmailTest()
        {
            var name = "Randy";
            var actual = emailSender.RegistrationMessage(name);
            Assert.IsNotNull(actual);
        }

        [Test]
        public void GreetingEmailTestHappyPath()
        {
            var name = "Randy";
            var message = "Dear " + name +
                          "<br><br>Welcome to Delightful Daily Dose!<br>We hope you'll enjoy your time with us!<br><br>The DDD Team";
            var actual = emailSender.RegistrationMessage(name);
            Assert.That(actual, Is.EqualTo(message));
        }

        [Test]
        public void GreetingEmailTestSadPath()
        {
            var name = "Randy";
            var message = "Dear " + name +
                          "<br><br>Welcomeeeee to Delightful Daily Dose!<br>We hope you'll enjoy your time with us!<br><br>The DDD Team";
            var actual = emailSender.RegistrationMessage(name);
            Assert.That(actual, Is.Not.EqualTo(message));
        }
    }
}
