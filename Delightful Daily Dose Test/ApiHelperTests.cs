using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Newtonsoft.Json;

namespace Delightful_Daily_Dose_Test
{
    public class ApiHelperTests : MockingHelper
    {
        private ApiHelper apiHelper;

        [SetUp]
        public void Setup()
        {
            apiHelper = new ApiHelper(_context);
        }

        [Test]
        public void GetDataFromCacheTestIsNotNull()
        {
            var url = "https://api.chucknorris.io/jokes/random";
            var response = apiHelper.GetDataFromCache(url);
            Assert.IsNotNull(response);
        }

        [Test]
        public void GetDataFromCacheTest()
        {
            var expected =
                "{\"categories\": [],\"created_at\": \"2020-01-05 13:42:26.766831\",\"icon_url\": \"https://assets.chucknorris.host/img/avatar/chuck-norris.png\",\"id\": \"yji6_xNdSJWRzRKgLzrMUQ\",\"updated_at\": \"2020-01-05 13:42:26.766831\",\"url\": \"https://api.chucknorris.io/jokes/yji6_xNdSJWRzRKgLzrMUQ\",\"value\": \"Chuck Norris is known for doing every cool thing you've ever seen a person do in a movie, but significantly better.\"}";
            var deserializedExpected = JsonConvert.DeserializeObject(expected);
            var url = "https://api.chucknorris.io/jokes/random";
            var response = apiHelper.GetDataFromCache(url);
            Assert.AreEqual(deserializedExpected, response);
        }

        //[Test]
        //public async Task GetApiTest()
        //{
        //    apiHelperMock.Configure().GetDataFromApi("").Returns<HttpResponseMessage>(new HttpResponseMessage
        //    {
        //        Content = new StringContent("Some data")
        //    });
        //    var url = "randy";
        //    var response = await apiHelper.GetApi(url);
        //    Assert.AreEqual("Some data", response);
        //}
    }
}
