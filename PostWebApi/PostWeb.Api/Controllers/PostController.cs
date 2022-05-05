using System.Threading;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using PostWeb.Core.Common;
using PostWeb.Core.DTO.PostDto;
using PostWeb.Infrastructure.Interfaces;

namespace PostWeb.Api.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class PostController: Controller
    {
        private readonly IPostService _service;

        public PostController(IPostService service)
        {
            _service = service;
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

        [HttpPost]
        public async Task<IActionResult> CreatePostAsync(PostCreate create, CancellationToken token = default)
        {
            var result = await _service.CreatePostAsync(create, token);

            return Ok(result);
        }
        
        [HttpPut]
        public async Task<IActionResult> UpdatePostAsync(int id, PostUpdate update, CancellationToken token = default)
        {
            var result = await _service.UpdatePostAsync(id, update, token);

            return Ok(result);
        }
        
        [HttpDelete]
        public async Task DeletePostAsync(int id, CancellationToken token = default)
        {
            await _service.DeletePostAsync(id, token);
        }
    }
}