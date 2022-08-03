using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Microsoft.AspNetCore.SignalR;

namespace Delightful_Daily_Dose_Test
{
    public class UnitTest3 : MockingHelper
    {

        [Test]
        public void IsOwnerTestHappyPath()
        {
            var userStory = new UserStory
            {
                Id = "1",
                Title = "LemmeOUT",
                Content = "please",
                Tag = "environment",
                Owner = new User
                {
                    Id = "6464648",
                    Username = "admin",
                    Email = "ddd@bitemyshinymetalass.com",
                    Password = "admin111",
                    Role = "Admin"
                },
                OwnerId = "admin"
            };
            StoryRepository storyRepository = new StoryRepository(_context);
            var storyId = "1";
            var userId = "6464648";
            var ownerId = "6464648";
            var actual = storyRepository.IsOwner(userId, ownerId);
            Assert.IsTrue(actual);
        }

        //public bool IsOwner(string storyId, string userId)
        //{
        //    var story = this.GetSingle(storyId);
        //    return story.OwnerId == userId;
        //}
    }
}
