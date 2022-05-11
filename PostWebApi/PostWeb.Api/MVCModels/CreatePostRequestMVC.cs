using System;
using Microsoft.AspNetCore.Http;

namespace PostWeb.Api.MVCModels
{
    public record CreatePostRequestMVC
    {
        public IFormFile Img { get; set; }
        public string LongString { get; set; }
        public string MiddleString { get; set; }
        public string ShortString { get; set; }
        public string Category { get; set; }
    }
}