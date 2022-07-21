using AutoMapper;
using Delightful_Daily_Dose.Helpers;
using Delightful_Daily_Dose.Models.Entities;

namespace Delightful_Daily_Dose.Mapping
{
    public class Mapping : Profile
    {
        public Mapping()
        {
            CreateMap<UserStory, StoryDetailViewModel>()
                .ForMember(story => story.OwnerUsername, map => map.MapFrom(story => story.Owner.Username));
            CreateMap<UserStory, StoryViewModel>();
        }
    }
}
