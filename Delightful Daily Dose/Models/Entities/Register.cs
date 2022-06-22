using System.ComponentModel.DataAnnotations.Schema;

namespace Delightful_Daily_Dose.Models.Entities
{
    public class Register
    {
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public long Id { get; set; }
        public string Email { get; set; }
        public string Password { get; set; }
        public bool IsPublisher { get; set; }
    }
}
