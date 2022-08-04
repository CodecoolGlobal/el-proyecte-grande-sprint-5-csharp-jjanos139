using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Delightful_Daily_Dose_Test
{
    public class StoriesControllerTests : MockingHelper
    {
        private IStoryRepository storyRepository;
        private IUserRepository userRepository;
        private IHttpContextAccessor httpContextAccessor;
        private IMapper mapper;
        private IConfigurationProvider configurationProvider;

        public StoriesControllerTests()
        {
            storyRepository = Substitute.For<StoryRepository>(_context);
            httpContextAccessor = Substitute.For<HttpContextAccessor>();
            configurationProvider = Substitute.For<IConfigurationProvider>();
            userRepository = Substitute.For<UserRepository>(_context, httpContextAccessor);
            mapper = new Mapper(configurationProvider);
        }

        //[Test]
        //public void GetStoriesTest()
        //{
        //    StoriesController storiesController = new StoriesController(storyRepository, mapper, userRepository);
        //    var response = storiesController.GetStories();
        //    Assert.IsNotNull(response);
        //}


        //public StoriesController(IStoryRepository storyRepository, IMapper mapper, IUserRepository userRepository)
        //{
        //    this.storyRepository = storyRepository;
        //    this.mapper = mapper;
        //    _userRepository = userRepository;
        //}
    }
}
