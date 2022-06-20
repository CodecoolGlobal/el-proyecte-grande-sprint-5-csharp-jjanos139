using System.Collections.Generic;

namespace Delightful_Daily_Dose.Models;

public class News
{
    public string Title { get; set; }
    public string Link { get; set; }
    public string SourceId { get; set; }
    public List<string> Keywords { get; set; }
    public List<string> Creator { get; set; }
    public string image_url { get; set; }
    public string VideoUrl { get; set; }
    public string Description { get; set; }
    public string PubDate { get; set; }
    public string Content { get; set; }
    public List<string> Country { get; set; }
    public List<string> Category { get; set; }
    public string Language { get; set; }

    public News(){}
}