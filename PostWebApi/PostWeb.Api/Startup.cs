using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;
using PostWeb.Api.Extensions;
using PostWeb.Infrastructure.Interfaces;
using PostWeb.Infrastructure.Interfaces.IdentityInterfaces;
using PostWeb.Infrastructure.Services;
using PostWeb.Infrastructure.Services.IdentityServices;

namespace PostWeb.Api
{
    public class Startup
    {
        public Startup(IConfiguration configuration)
        {
            Configuration = configuration;
        }

        public IConfiguration Configuration { get; }

        public void ConfigureServices(IServiceCollection services)
        {
            services.AddScoped<IAuthenticateService, AuthenticateService>()
                .AddScoped<IPostService, PostService>()
                .AddScoped<IContactService, ContactService>()
                .AddIdentity()
                .AddAuthenticationOptions(Configuration)
                .AddSwagger()
                .AddDbContext(Configuration)
                .AutoMapper()
                .AddCors(options =>
                {
                    options.AddPolicy(
                        name: "AllowOrigin",
                        builder =>
                        {
                            builder.AllowAnyOrigin()
                                .AllowAnyMethod()
                                .AllowAnyHeader();
                        });
                })
                .AddControllers();
        }

        public void Configure(IApplicationBuilder app, IWebHostEnvironment env)
        {
            if (env.IsDevelopment())
            {
                app.UseDeveloperExceptionPage()
                .UseSwagger()
                .UseSwaggerUI(c => c.SwaggerEndpoint("/swagger/v1/swagger.json", "PostWeb.Api v1"));
            }

            app.UseAuthentication()
                .UseAuthorization()
                .UseCors("AllowOrigin")
                .UseHttpsRedirection()
                .UseRouting()
                .UseAuthorization()
                .UseEndpoints(endpoints =>
                {
                    endpoints.MapControllers();
                });
        }
    }
}