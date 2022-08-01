using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using Delightful_Daily_Dose.Models.Entities;

namespace Delightful_Daily_Dose.Models;

public class News
{
    [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
    public long ID { get; set; }
    public string Title { get; set; }
    public string Link { get; set; }
    public string image_url { get; set; }
    public string Description { get; set; }
    public string PubDate { get; set; }
    public string Content { get; set; }
    public List<Category> Category { get; set; }
    public string Language { get; set; }

    public News(){}
}