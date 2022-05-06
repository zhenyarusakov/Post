using System;

namespace PostWeb.Core.IdentityModels
{
    public class TokenModel
    {
        public int Id { get; set; }
        public string Token { get; set; }
    
        public DateTime Expires { get; set; } = DateTime.UtcNow + ConstantValues.RefreshTokenLifetime;
        public bool IsExpired => DateTime.UtcNow >= Expires;
    }
}