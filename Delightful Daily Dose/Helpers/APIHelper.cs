using System;
using System.Collections.Generic;
using System.Linq;
using System.Net.Http;
using System.Threading.Tasks;
using Delightful_Daily_Dose.Models;
using Newtonsoft.Json;

namespace Delightful_Daily_Dose.Helpers
{
    public class ApiHelper
    {
        private static readonly Dictionary<string, HttpResponseMessage> Cache = new();
        private readonly ApiContext _context;

        public ApiHelper(ApiContext context)
        {
            _context = context;
        }

        private async Task<HttpResponseMessage> GetDataFromApi(string apiUrl)
        {
            using (HttpClient client = new HttpClient())
            {
                client.BaseAddress = new Uri(apiUrl);
                client.DefaultRequestHeaders.Accept.Clear();
                client.DefaultRequestHeaders.Accept.Add(new System.Net.Http.Headers.MediaTypeWithQualityHeaderValue("application/json"));

                HttpResponseMessage response = await client.GetAsync(apiUrl);
                if (response.IsSuccessStatusCode)
                {
                    return response;
                }
            }
            return null;
        }

        private async Task<string> GetDataFromCache(string apiUrl)
        {
            return await Cache[apiUrl].Content.ReadAsStringAsync();
        }


        public async Task<string> GetApi(string apiUrl)
        {
            if (!Cache.ContainsKey(apiUrl) || DateTime.Now.TimeOfDay - Cache[apiUrl].Headers.Date.GetValueOrDefault().LocalDateTime.TimeOfDay > new TimeSpan(0, 1, 0, 0))
            {
                Cache[apiUrl] = await GetDataFromApi(apiUrl);
            }

            return await GetDataFromCache(apiUrl);
        }

        public async Task<List<News>> GetNews(string apiUrl)
        {
            var data = JsonConvert.DeserializeObject<Result>(await GetApi(apiUrl));
            await _context.News.AddRangeAsync(data!.Results.Where(
                        entity => !_context.News
                            .Select(n => n.Title)
                            .Any(title => title == entity.Title)
                    )
                );
            await _context.SaveChangesAsync();
            return data?.Results;
        }

        public IEnumerable<News> GetNewsFromDb()
        {
            var news = _context.News;
            return news.OrderByDescending(data => data.PubDate);
        }
    }
}