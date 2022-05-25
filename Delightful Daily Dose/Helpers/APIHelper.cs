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
        public static async Task<string> GetApi(string apiUrl)
        {
            using (HttpClient client = new HttpClient())
            {
                client.BaseAddress = new Uri(apiUrl);
                client.DefaultRequestHeaders.Accept.Clear();
                client.DefaultRequestHeaders.Accept.Add(new System.Net.Http.Headers.MediaTypeWithQualityHeaderValue("application/json"));

                HttpResponseMessage response = await client.GetAsync(apiUrl);
                if (response.IsSuccessStatusCode)
                {
                    var data = await response.Content.ReadAsStringAsync();

                    return data;
                }
            }
            return null;
        }

        public static async Task<List<News>> GetNews(string apiUrl)
        {
            var data = JsonConvert.DeserializeObject<Result>(await GetApi(apiUrl));
            return data?.Results;
        }
    }
}