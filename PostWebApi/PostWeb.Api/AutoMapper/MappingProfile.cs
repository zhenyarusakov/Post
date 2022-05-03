using AutoMapper;
using PostWeb.Core;
using PostWeb.Core.DTO.ContactDto;
using PostWeb.Core.DTO.PostDto;

namespace PostWeb.Api.AutoMapper
{
    public class MappingProfile: Profile
    {
        public MappingProfile()
        {
            CreateMap<Post, PostDto>();
            CreateMap<PostCreate, Post>();
            CreateMap<Post, PostUpdate>();
            CreateMap<PostUpdate, Post>();

            CreateMap<Contact, ContactDto>();
            CreateMap<ContactCreate, Contact>();
        }
    }
}