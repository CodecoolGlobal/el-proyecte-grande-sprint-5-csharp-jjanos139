using Delightful_Daily_Dose.Models;
using Delightful_Daily_Dose.Models.Entities;

namespace Delightful_Daily_Dose.Helpers
{
    public class StoryRepository : EntityBaseRepository<UserStory>, IStoryRepository
    {
        public StoryRepository (ApiContext context) : base (context) { }

        public bool IsOwner(string storyId, string userId)
        {
            var story = this.GetSingle(storyId);
            return story.OwnerId == userId;
        }
    }
}
