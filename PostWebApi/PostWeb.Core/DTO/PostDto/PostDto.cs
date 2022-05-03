﻿using System;

namespace PostWeb.Core.DTO.PostDto
{
    public class PostDto
    {
        public int Id { get; set; }
        public string Img { get; set; }
        public string LongString { get; set; }
        public string ShortString { get; set; }
        public DateTime DateTime { get; set; }
        public string Category { get; set; }
    }
}