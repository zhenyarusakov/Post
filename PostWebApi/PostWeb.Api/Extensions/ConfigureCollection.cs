using Microsoft.AspNetCore.Builder;

namespace PostWeb.Api.Extensions
{
    public static class ConfigureCollection
    {
        public static IApplicationBuilder UseSwaggerUI( this IApplicationBuilder app)
        {
            return app.UseSwaggerUI(c => c.SwaggerEndpoint("/swagger/v1/swagger.json", "WA.Pizza v1"));
        }
    }
}