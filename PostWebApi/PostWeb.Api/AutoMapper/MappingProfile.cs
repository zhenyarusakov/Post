using System.Collections.Generic;
using AutoMapper;
using Microsoft.AspNetCore.Http;
using PostWeb.Api.MVCModels;
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
            CreateMap<CreatePostRequest, Post>();
            CreateMap<UpdatePostRequest, Post>();

            CreateMap<Contact, ContactDto>();
            CreateMap<ContactCreate, Contact>();
            
            CreateMap<IFormFile, IReadOnlyCollection<byte>>().ConvertUsing<FormFileToByteCollectionConverter>();
            CreateMap<CreatePostRequestMVC, CreatePostRequest>();
            CreateMap<CreatePostRequestMVC, UpdatePostRequest>();
        }
    }
}