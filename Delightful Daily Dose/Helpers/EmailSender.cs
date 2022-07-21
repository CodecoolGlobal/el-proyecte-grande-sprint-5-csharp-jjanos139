using System.Net;
using System.Net.Mail;
using System.Text;

namespace Delightful_Daily_Dose.Helpers
{
    public class EmailSender
    {
        private readonly string _email;
        private readonly string _password;
        public EmailSender(string email, string password)
        {
            _email = email;
            _password = password;
        }
        public string RegistrationMessage(string name)
        {
            StringBuilder messageToBeSent = new StringBuilder();
            messageToBeSent.Append("Dear " + name + "<br><br>");
            messageToBeSent.Append("Welcome to Delightful Daily Dose!<br>");
            messageToBeSent.Append("We hope you'll enjoy your time with us!<br><br>");
            messageToBeSent.Append("The DDD Team");
            return messageToBeSent.ToString();
        }
        public void SendConfirmationEmail(string name, string email)
        {
            SmtpClient smtpClient = new SmtpClient("smtp-mail.outlook.com");
            smtpClient.Port = 587;
            smtpClient.DeliveryMethod = SmtpDeliveryMethod.Network;
            smtpClient.UseDefaultCredentials = false;
            NetworkCredential credential = new NetworkCredential(_email, _password);
            smtpClient.EnableSsl = true;
            smtpClient.Credentials = credential;

            MailMessage message = new MailMessage(_email, email);
            message.IsBodyHtml = true;
            message.Body = RegistrationMessage(name);
            message.Subject = "Registration Confirmation";

            smtpClient.Send(message);
        }
    }
}
