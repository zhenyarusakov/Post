using System.Threading;
using System.Threading.Tasks;
using AutoMapper;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using PostWeb.Api.MVCModels;
using PostWeb.Core.Common;
using PostWeb.Core.DTO.PostDto;
using PostWeb.Infrastructure.Interfaces;

namespace PostWeb.Api.Controllers
{
    public class PostApiController: BaseApiController
    {
        private readonly IPostService _service;

        private readonly IMapper _mapper;

        public PostApiController(IPostService service, IMapper mapper)
        {
            _service = service;
            _mapper = mapper;
        }

        [HttpGet("{id:int}")]
        public async Task<IActionResult> GetByIdPostAsync(int id, CancellationToken token = default)
        {
            var result = await _service.GetByIdPostAsync(id, token);

            return Ok(result);
        }
        
        [HttpGet]
        public async Task<IActionResult> GetAllPostsAsync([FromQuery] PostFilter filter, CancellationToken token)
        {
            var result = await _service.GetAllPostsAsync(filter, token);

            return Ok(result);
        }
        
        [HttpGet("GetFirstFivePosts")]
        public async Task<IActionResult> GetFirstFivePostsAsync(CancellationToken token = default)
        {
            var result = await _service.GetFirstFivePostsAsync(token);

            return Ok(result);
        }

        [Authorize(Roles = "Administrator")]
        [HttpPost]
        public async Task<IActionResult> CreatePostAsync([FromForm] CreatePostRequestMVC payload, CancellationToken token = default)
        {
            var request = _mapper.Map<CreatePostRequest>(payload);
            
            var result = await _service.CreatePostAsync(request, token);

            return Ok(result);
        }
        
        [Authorize(Roles = "Administrator")]
        [HttpPut]
        public async Task<IActionResult> UpdatePostAsync(int id, UpdatePostRequest request, CancellationToken token = default)
        {
            var result = await _service.UpdatePostAsync(id, request, token);

            return Ok(result);
        }
        
        [Authorize(Roles = "Administrator")]
        [HttpDelete]
        public async Task DeletePostAsync(int id, CancellationToken token = default)
        {
            await _service.DeletePostAsync(id, token);
        }
    }
}