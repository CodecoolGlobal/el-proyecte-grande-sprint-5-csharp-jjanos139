using System.ComponentModel.DataAnnotations.Schema;

namespace Delightful_Daily_Dose.Models.Entities
{
    public class Category
    {
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public long ID { get; set; }
        public string Name { get; set; }
        public News News { get; set; }

        public static implicit operator Category(string s)
        {
            return new Category {Name = s};
        }

        public override string ToString()
        {
            return Name;
        }
    }
}
