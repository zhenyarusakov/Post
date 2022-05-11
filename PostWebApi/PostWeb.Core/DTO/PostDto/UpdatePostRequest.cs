using System;
using System.Collections.Generic;

namespace PostWeb.Core.DTO.PostDto
{
    public class UpdatePostRequest
    {
        public int Id { get; set; }
        public IReadOnlyCollection<byte> Img { get; set; }
        public string LongString { get; set; }
        public string MiddleString { get; set; }
        public string ShortString { get; set; }
        public DateTime DateTime { get; set; }
        public string Category { get; set; }
    }
}