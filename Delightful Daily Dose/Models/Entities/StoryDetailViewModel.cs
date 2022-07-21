using System.Collections.Generic;

namespace Delightful_Daily_Dose.Models.Entities
{
    public class StoryDetailViewModel
    {
        public string Id { get; set; }
        public string Title { get; set; }
        public string Content { get; set; }
        public string Tag { get; set; }
        public long PublishTime { get; set; }

        public string OwnerId { get; set; }
        public string OwnerUsername { get; set; }
    }
}
