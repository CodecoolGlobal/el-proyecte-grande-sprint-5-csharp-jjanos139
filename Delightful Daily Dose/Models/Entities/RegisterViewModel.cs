using System.ComponentModel.DataAnnotations;

namespace Delightful_Daily_Dose.Models.Entities
{
    public class RegisterViewModel
    {
        [Microsoft.Build.Framework.Required]
        [StringLength(60, MinimumLength = 2)]
        public string Username { get; set; }

        [Microsoft.Build.Framework.Required]
        [EmailAddress]
        public string Email { get; set; }

        [Microsoft.Build.Framework.Required]
        [StringLength(60, MinimumLength = 3)]
        public string Password { get; set; }
    }
}
