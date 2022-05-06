using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;
using PostWeb.Core;
using PostWeb.Core.IdentityModels;

namespace PostWeb.Infrastructure
{
    public class PostContext: IdentityDbContext<ApplicationUser>
    {
        public PostContext(DbContextOptions options)
            : base(options){}
        
        public DbSet<Post> Posts { get; set; }
        public DbSet<Contact> Contacts { get; set; }
    } 
}