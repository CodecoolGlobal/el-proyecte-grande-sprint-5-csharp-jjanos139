using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;
using System.Text;
using AutoMapper;
using Delightful_Daily_Dose.Helpers;
using Delightful_Daily_Dose.Models;
using Microsoft.AspNetCore.Authentication;
using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.AspNetCore.Http;
using Microsoft.EntityFrameworkCore;
using Microsoft.IdentityModel.Tokens;
using System;

namespace Delightful_Daily_Dose
{
    public class Startup
    {
        public Startup(IConfiguration configuration)
        {
            Configuration = configuration;
        }

        public IConfiguration Configuration { get; }

        // This method gets called by the runtime. Use this method to add services to the container.
        public void ConfigureServices(IServiceCollection services)
        {
            //IConfigurationSection jwtAuthSection =
            //    Configuration.GetSection("JWTAuthSection");
            //IConfigurationSection emailSection = Configuration.GetSection("EmailSection");
            //IConfigurationSection googleAuthNSection =
            //    Configuration.GetSection("Authentication:Google");

            Console.WriteLine(Environment.GetEnvironmentVariables());
            Console.WriteLine(Environment.GetEnvironmentVariable("JWTSecretKey"));
            Console.WriteLine(Environment.GetEnvironmentVariable("JWTLifespan"));
            Console.WriteLine(Environment.GetEnvironmentVariable("EmailAddress"));
            Console.WriteLine(Environment.GetEnvironmentVariable("EmailPassword"));


            services
                .AddDbContext<ApiContext>(options =>
                options.UseSqlServer(Configuration.GetConnectionString("DefaultConnection")));

            services.AddAuthentication("JwtAuthentication")
                .AddScheme<AuthenticationSchemeOptions, JwtAuthenticationHandler>("JwtAuthentication", null);

            var mappingConfig = new MapperConfiguration(mc =>
                mc.AddProfile(new Mapping.Mapping())
            );
            services.AddSingleton(mappingConfig.CreateMapper());
            services.AddSingleton(
                new EmailSender(Environment.GetEnvironmentVariable("EmailAddress"), Environment.GetEnvironmentVariable("EmailPassword")));

            //services.AddAuthentication(options =>
            //    {
            //    })
            //    .AddJwtBearer(JwtBearerDefaults.AuthenticationScheme, options =>
            //    {
            //        options.TokenValidationParameters = new TokenValidationParameters
            //        {
            //            ValidateIssuer = false,
            //            ValidateAudience = false,
            //            ValidateLifetime = true,
            //            ValidateIssuerSigningKey = true,

                //        IssuerSigningKey = new SymmetricSecurityKey(
                //            Encoding.UTF8.GetBytes(jwtAuthSection["JWTSecretKey"])
                //        )
                //    };
                //})
                //.AddCookie(CookieAuthenticationDefaults.AuthenticationScheme, options =>
                //{
                //    options.LoginPath = "/googleLogin";
                //    options.LogoutPath = "/";
                //    options.ExpireTimeSpan = new TimeSpan(1, 0, 0);
                //})
                //.AddGoogle(GoogleDefaults.AuthenticationScheme, options =>
                //{
                //    options.ClientId = googleAuthNSection["ClientId"];
                //    options.ClientSecret = googleAuthNSection["ClientSecret"];
                //});

            services.AddSingleton<IHttpContextAccessor, HttpContextAccessor>();
            services.AddScoped<IUserRepository, UserRepository>();
            services.AddScoped<IStoryRepository, StoryRepository>();

            //services.AddSingleton<IAuthService>(
            //    new AuthService(
            //        jwtAuthSection["JWTSecretKey"],
            //        int.Parse(jwtAuthSection["JWTLifespan"])
            //    )
            //);
            services.AddSingleton<IAuthService>(new AuthService(Environment.GetEnvironmentVariable("JWTSecretKey")));

            services.AddControllersWithViews();
            services.AddTransient<ApiHelper>();


            services.AddAuthorization(options =>
            {
                options.AddPolicy("AdminOnly", policy => policy.RequireRole("Admin"));
                options.AddPolicy("PublisherAndAdmin", policy => policy.RequireRole("Admin", "Publisher"));
                options.AddPolicy("User", policy => policy.RequireRole("User", "Publisher", "Admin"));
                
            });

            services.AddControllersWithViews();
            services.AddTransient<ApiHelper>();
        }

        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        public void Configure(IApplicationBuilder app, IWebHostEnvironment env)
        {
            if (env.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();
            }
            else
            {
                app.UseExceptionHandler("/Home/Error");
                // The default HSTS value is 30 days. You may want to change this for production scenarios, see https://aka.ms/aspnetcore-hsts.
                app.UseHsts();
            }
            //app.UseHttpsRedirection();

            app.UseStaticFiles();

            //app.UseCors("ReactPolicy");
            app.UseAuthentication();
            app.UseRouting();
            app.UseAuthorization();


            app.UseEndpoints(endpoints =>
            {
                endpoints.MapControllerRoute(
                    name: "default",
                    pattern: "{controller=Home}/{action=Index}/{id?}");
            });
        }
    }
}
