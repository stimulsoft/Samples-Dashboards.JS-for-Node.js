using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.HttpsPolicy;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;

namespace Example
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
            services.AddRazorPages();
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
                // The default HSTS value is 30 days. You may want to change this for production scenarios, see https://aka.ms/aspnetcore-hsts.
                app.UseHsts();
            }

            app.UseHttpsRedirection();
            app.UseStaticFiles();

            app.UseRouting();

            app.UseAuthorization();

            app.UseEndpoints(endpoints =>
            {
                endpoints.MapRazorPages();

                endpoints.MapGet("/GetDashboard/{dashboardId:alpha}", async context =>
                {
                    string dashboardId = (string)context.Request.RouteValues["dashboardId"];
                    if (!string.IsNullOrEmpty(dashboardId)) {
                        var dashboardFileInfo = env.WebRootFileProvider.GetFileInfo(string.Format("Dashboards/{0}.mrt", dashboardId));
                        if (dashboardFileInfo.Exists) {
                            context.Response.Headers.Add("Content-Type", "application/octet-stream");
                            using (var reportStream = dashboardFileInfo.CreateReadStream())
                            {
                                await reportStream.CopyToAsync(context.Response.Body);
                            }
                            await context.Response.CompleteAsync();
                            return;
                        }
                    }
                    context.Response.StatusCode = 404;
                });
            });
        }
    }
}
