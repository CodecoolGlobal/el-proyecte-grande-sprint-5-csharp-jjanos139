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
            StoryRepository storyRepository = new StoryRepository(_context);
            var storyId = "1";
            var userId = "64646488";
            var ownerId = "64646488";
            var actual = storyRepository.IsOwner(storyId, userId);
            Assert.IsTrue(actual);
        }

        [Test]
        public void IsOwnerTestSadPath()
        {
            StoryRepository storyRepository = new StoryRepository(_context);
            var storyId = "1";
            var userId = "6464648";
            var ownerId = "6464648";
            var actual = storyRepository.IsOwner(storyId, userId);
            Assert.IsFalse(actual);
        }

    }
}
