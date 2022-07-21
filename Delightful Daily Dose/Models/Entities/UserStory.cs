using System.Collections.Generic;

namespace Delightful_Daily_Dose.Models.Entities
{
    public class UserStory : IEntityBase
    {
        public string Id { get; set; }
        public string Title { get; set; }
        public string Content { get; set; }
        public string Tag { get; set; }
        public long CreationTime { get; set; }
        public long LastEditTime { get; set; }
        public long PublishTime { get; set; }

        public User Owner { get; set; }
        public string OwnerId { get; set; }
    }
}
