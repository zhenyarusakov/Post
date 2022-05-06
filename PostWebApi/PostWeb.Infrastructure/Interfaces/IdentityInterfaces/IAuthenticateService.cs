using System.Threading.Tasks;
using PostWeb.Core.IdentityModels;

namespace PostWeb.Infrastructure.Interfaces.IdentityInterfaces
{
    public interface IAuthenticateService
    {
        Task<Response> RegisterAsync(RegisterModel model);
        Task<Response> RegisterAdminAsync(RegisterModel model);
        Task<AuthenticationResponse> LoginAsync(LoginModel model);
        Task AddToRoleAsync(AddToRoleModel addToRoleModel);
        Task<AuthenticationResponse> RegenerateAccessTokenAsync(string? token);
        Task RevokeToken(string? token);
        void SetRefreshTokenCookie(string refreshToken);
    }
}