using System;

namespace PostWeb.Core
{
    public class Post
    {
        public int Id { get; set; }
        public string Img { get; set; }
        public string LongString { get; set; }
        public string ShortString { get; set; }
        public DateTime DateTime { get; set; }
        public string Category { get; set; }
    }
}