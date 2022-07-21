using System.Collections.Generic;

namespace Delightful_Daily_Dose.Models.Entities
{
    public class StoryViewModel
    {
        public string Id { get; set; }
        public string Title { get; set; }
        public string Content { get; set; }
        public string Tag { get; set; }
        public long PublishTime { get; set; }
    }
}
