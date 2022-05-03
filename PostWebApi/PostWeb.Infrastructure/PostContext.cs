using Microsoft.EntityFrameworkCore;
using PostWeb.Core;

namespace PostWeb.Infrastructure
{
    public class PostContext: DbContext
    {
        public PostContext(DbContextOptions options)
            : base(options){}
        
        public DbSet<Post> Posts { get; set; }
        public DbSet<Contact> Contacts { get; set; }
    }
}