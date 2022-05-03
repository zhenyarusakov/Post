using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using PostWeb.Core;

namespace PostWeb.Infrastructure.Data.EFConfigurations
{
    public class PostConfiguration: IEntityTypeConfiguration<Post>
    {
        public void Configure(EntityTypeBuilder<Post> builder)
        {
            builder.Property(x => x.Category)
                .HasMaxLength(10)
                .IsRequired();
            
            builder.Property(x => x.Img)
                .IsRequired();
            
            builder.Property(x => x.LongString)
                .HasMaxLength(1000)
                .IsRequired();
            
            builder.Property(x => x.ShortString)
                .HasMaxLength(100)
                .IsRequired();
        }
    }
}