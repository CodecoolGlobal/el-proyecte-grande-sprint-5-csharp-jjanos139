#nullable enable
using System.Collections.Generic;

namespace Delightful_Daily_Dose.Models;

public class News
{
    public string? Title { get; set; }
    public string? Link { get; set; }
    public string? SourceId { get; set; }
    public List<string>? Keywords { get; set; }
    public List<string>? Creator { get; set; }
    public string? ImageUrl { get; set; }
    public string? VideoUrl { get; set; }
    public string? Description { get; set; }
    public string? PubDate { get; set; }
    public string? Content { get; set; }
    public List<string>? Country { get; set; }
    public List<string>? Category { get; set; }
    public string? Language { get; set; }

    public News(){}
    public News(string? title, string? link, string? sourceId, List<string>? keywords, List<string>? creator, string? imageUrl, string? videoUrl, string? description, string? pubDate, string? content, List<string>? country, List<string>? category, string? language)
    {
        Title = title;
        Link = link;
        SourceId = sourceId;
        Keywords = keywords;
        Creator = creator;
        ImageUrl = imageUrl;
        VideoUrl = videoUrl;
        Description = description;
        PubDate = pubDate;
        Content = content;
        Country = country;
        Category = category;
        Language = language;
    }
}