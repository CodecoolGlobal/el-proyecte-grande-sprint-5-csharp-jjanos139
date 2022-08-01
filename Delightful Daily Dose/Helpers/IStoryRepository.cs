using Delightful_Daily_Dose.Models;
using Delightful_Daily_Dose.Models.Entities;

namespace Delightful_Daily_Dose.Helpers
{
    public interface IStoryRepository: IEntityBaseRepository<UserStory>
    {
        bool IsOwner(string storyId, string userId);
    }
}
