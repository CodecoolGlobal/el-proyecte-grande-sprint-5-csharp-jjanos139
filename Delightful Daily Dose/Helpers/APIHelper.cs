using System;
using System.Collections.Generic;
using System.Net.Http;
using System.Threading.Tasks;
using Delightful_Daily_Dose.Models;
using Newtonsoft.Json;

namespace Delightful_Daily_Dose.Helpers
{
    public static class APIHelper
    {
        private static readonly Dictionary<string, HttpResponseMessage> Cache = new();

        private static async Task<HttpResponseMessage> GetDataFromApi(string apiUrl)
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

        private static async Task<string> GetDataFromCache(string apiUrl)
        {
            return await Cache[apiUrl].Content.ReadAsStringAsync();
        }


        public static async Task<string> GetApi(string apiUrl)
        {
            if (!Cache.ContainsKey(apiUrl) || DateTime.Now.TimeOfDay - Cache[apiUrl].Headers.Date.GetValueOrDefault().LocalDateTime.TimeOfDay > new TimeSpan(0, 1, 0, 0))
            {
                Cache[apiUrl] = await GetDataFromApi(apiUrl);
            }

            return await GetDataFromCache(apiUrl);
        }

        public static async Task<List<News>> GetNews(string apiUrl)
        {
            var data = JsonConvert.DeserializeObject<Result>(await GetApi(apiUrl));
            return data?.Results;
        }
    }
}