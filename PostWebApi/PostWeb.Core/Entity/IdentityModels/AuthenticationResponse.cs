using System;
using System.Collections.Generic;

namespace PostWeb.Core.IdentityModels
{
    public class AuthenticationResponse
    {
        public AuthenticationResponse(string accessToken, string refreshToken)
        {
            AccessToken = accessToken;
            RefreshToken = refreshToken;
        }

        public string AccessToken { get; private set; }
    
        public string RefreshToken { get; private set; }

        public DateTime RefreshTokenExpiration { get; init; }
        public IList<string> Role { get; set; }
    }
}