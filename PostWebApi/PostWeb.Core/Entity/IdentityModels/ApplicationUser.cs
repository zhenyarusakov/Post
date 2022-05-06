using System.Collections.Generic;
using Microsoft.AspNetCore.Identity;

namespace PostWeb.Core.IdentityModels
{
    public class ApplicationUser: IdentityUser
    {
        public List<TokenModel> RefreshTokens { get; set; } = new();
    }
}