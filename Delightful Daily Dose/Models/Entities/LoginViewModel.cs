using System.ComponentModel.DataAnnotations;

namespace Delightful_Daily_Dose.Models.Entities
{
    public class LoginViewModel
    {
        [Required]
        public string Username { get; set; }

        [Required]
        public string Password { get; set; }
    }
}
