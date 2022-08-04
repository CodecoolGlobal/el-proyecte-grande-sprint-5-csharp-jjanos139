using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Delightful_Daily_Dose_Test
{
    public class EntityBaseRepoTests : MockingHelper
    {
        private EntityBaseRepository<User> entityBase;
        private EntityBaseRepository<UserStory> storyEntityBase;
        [SetUp]
        public void Setup()
        {
            entityBase = new EntityBaseRepository<User>(_context);
            storyEntityBase = new EntityBaseRepository<UserStory>(_context);
        }


        [Test]
        public void GetSingleTestNotNull()
        {
            var id = "6464648";
            var response = entityBase.GetSingle(id);
            Assert.IsNotNull(response);
        }

        [Test]
        public void GetSingleTestHappyPath()
        {
            var id = "6464648";
            var response = entityBase.GetSingle(id);
            Assert.AreEqual("admin", response.Username);
            Assert.AreEqual("6464648", response.Id);
            Assert.AreEqual("ddd@bitemyshinymetalass.com", response.Email);
            Assert.AreEqual("admin111", response.Password);
            Assert.AreEqual("Admin", response.Role);
        }

        [Test]
        public void GetSingleTestSadPath()
        {
            var id = "6464648";
            var response = entityBase.GetSingle(id);
            Assert.AreNotEqual("amin", response.Username);
            Assert.AreNotEqual("644648", response.Id);
            Assert.AreNotEqual("ddd@emyshinymetalass.com", response.Email);
            Assert.AreNotEqual("dmin111", response.Password);
            Assert.AreNotEqual("Admi", response.Role);
        }

        [Test]
        public void GetSingleTestExpressionOverloadHappyPath()
        {
            var id = "6464648";
            var response = entityBase.GetSingle(r => r.Id == id);
            Assert.AreEqual("admin", response.Username);
            Assert.AreEqual("6464648", response.Id);
            Assert.AreEqual("ddd@bitemyshinymetalass.com", response.Email);
            Assert.AreEqual("admin111", response.Password);
            Assert.AreEqual("Admin", response.Role);
        }

        [Test]
        public void GetSingleTestExpressionOverloadSadPath()
        {
            var id = "6464648";
            var response = entityBase.GetSingle(r => r.Id == id);
            Assert.AreNotEqual("amin", response.Username);
            Assert.AreNotEqual("644648", response.Id);
            Assert.AreNotEqual("ddd@emyshinymetalass.com", response.Email);
            Assert.AreNotEqual("dmin111", response.Password);
            Assert.AreNotEqual("Admi", response.Role);
        }


        [Test]
        public void GetSingleTestExpressionPlusPredicateOverloadHappyPath()
        {
            var id = "1";
            var response = storyEntityBase.GetSingle(r => r.Id == id, r => r.Owner);
            Assert.AreEqual("LemmeOUT", response.Title);
            Assert.AreEqual("1", response.Id);
            Assert.AreEqual("please", response.Content);
            Assert.AreEqual("environment", response.Tag);
            Assert.AreEqual("64646488", response.OwnerId);
        }

        [Test]
        public void GetSingleTestExpressionPlusPredicateOverloadSadPath()
        {
            var id = "1";
            var response = storyEntityBase.GetSingle(r => r.Id == id, r => r.Owner);
            Assert.AreNotEqual("LemmOUT", response.Title);
            Assert.AreNotEqual("2", response.Id);
            Assert.AreNotEqual("pleae", response.Content);
            Assert.AreNotEqual("enironment", response.Tag);
            Assert.AreNotEqual("646488", response.OwnerId);
        }

        [Test]
        public void AddUserTestHappyPath()
        {
            var id = "11";
            var user2 = new User
            {
                Id = "11",
                Username = "admininin",
                Password = "admin123123",
                Email = "gg@gg.ez",
                Role = "Admin"
            };
            entityBase.Add(user2);
            _context.SaveChanges();
            var actual = _context.User.First(user => user.Id == id);
            Assert.AreEqual(id, actual.Id);
        }

        [Test]
        public void AddUserTestHappyPathWithCount()
        {
            var id = "11";
            var user2 = new User
            {
                Id = "11",
                Username = "admininin",
                Password = "admin123123",
                Email = "gg@gg.ez",
                Role = "Admin"
            };
            entityBase.Add(user2);
            _context.SaveChanges();
            var actual = _context.User.First(user => user.Id == id);
            Assert.AreEqual(4, _context.User.Count());
        }

        [Test]
        public void DeleteWhereTest()
        {
            var id = "11";
            var user2 = new User
            {
                Id = "11",
                Username = "admininin",
                Password = "admin123123",
                Email = "gg@gg.ez",
                Role = "Admin"
            };
            entityBase.Add(user2);
            _context.SaveChanges();
            entityBase.DeleteWhere(u => u.Id == id);
            _context.SaveChanges();
            Assert.AreEqual( 3, _context.User.Count());
        }

        [Test]
        public void DeleteTest()
        {
            var id = "11";
            var user2 = new User
            {
                Id = "11",
                Username = "admininin",
                Password = "admin123123",
                Email = "gg@gg.ez",
                Role = "Admin"
            };
            entityBase.Add(user2);
            _context.SaveChanges();
            entityBase.Delete(user2);
            _context.SaveChanges();
            Assert.AreEqual(3, _context.User.Count());
        }


        [Test]
        public void CommitTest()
        {
            var id = "11";
            var user2 = new User
            {
                Id = "11",
                Username = "admininin",
                Password = "admin123123",
                Email = "gg@gg.ez",
                Role = "Admin"
            };
            entityBase.Add(user2);
            entityBase.Commit();
            entityBase.Delete(user2);
            entityBase.Commit();
            Assert.AreEqual(3, _context.User.Count());
        }

    }
}
