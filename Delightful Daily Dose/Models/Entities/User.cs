using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace Delightful_Daily_Dose.Models.Entities
{
    public class User : IEntityBase
    {
        public string Id { get; set; }
        public string Username { get; set; }
        public string Email { get; set; }
        public string Password { get; set; }
        public bool IsPublisher { get; set; }
        public bool IsAdmin { get; set; }
    }
}
