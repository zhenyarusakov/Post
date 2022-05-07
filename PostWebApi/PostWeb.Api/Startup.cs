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
            services.AddIdentity();
            services.AddAuthenticationOptions(Configuration);
            services.AddScoped<IAuthenticateService, AuthenticateService>();
            services.AddScoped<IPostService, PostService>();
            services.AddScoped<IContactService, ContactService>();
            services.AddControllers();
            services.AddSwagger();
            services.AddDbContext(Configuration);
            services.AutoMapper();
            services.AddCors(options =>
            {
                options.AddPolicy(
                    name: "AllowOrigin",
                    builder =>{
                        builder.AllowAnyOrigin()
                            .AllowAnyMethod()
                            .AllowAnyHeader();
                    });
            });
        }

        public void Configure(IApplicationBuilder app, IWebHostEnvironment env)
        {
            if (env.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();
                app.UseSwagger();
                app.UseSwaggerUI(c => c.SwaggerEndpoint("/swagger/v1/swagger.json", "PostWeb.Api v1"));
            }

            app.UseAuthentication();
            app.UseAuthorization();
            app.UseCors("AllowOrigin");
            
            app.UseHttpsRedirection();

            app.UseRouting();

            app.UseAuthorization();

            app.UseEndpoints(endpoints => { endpoints.MapControllers(); });
        }
    }
}