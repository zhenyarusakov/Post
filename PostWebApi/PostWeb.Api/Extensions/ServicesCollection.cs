using System;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.OpenApi.Models;
using PostWeb.Infrastructure;

namespace PostWeb.Api.Extensions
{
    public static class ServicesCollection
    {
        public static IServiceCollection AddSwagger(this IServiceCollection services)
        {
            return services.AddSwaggerGen(c =>
            {
                c.SwaggerDoc("v1", new OpenApiInfo {Title = "PostWeb.Api", Version = "v1"});
            });
        }
        
        public static IServiceCollection AddDbContext(this IServiceCollection services, IConfiguration configuration)
        {
            return services.AddDbContext<PostContext>(options =>
                options.UseSqlServer(
                    configuration.GetConnectionString("DefaultConnection")));
        }

        public static IServiceCollection AutoMapper(this IServiceCollection service)
        {
            return service.AddAutoMapper(AppDomain.CurrentDomain.GetAssemblies());
        }
    }
}