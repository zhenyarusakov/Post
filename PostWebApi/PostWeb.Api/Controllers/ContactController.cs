using System.Threading;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using PostWeb.Core.DTO.ContactDto;
using PostWeb.Infrastructure.Interfaces;

namespace PostWeb.Api.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class ContactController: Controller
    {
        private readonly IContactService _service;

        public ContactController(IContactService service)
        {
            _service = service;
        }

        [HttpPost]
        public async Task<IActionResult> CreateContactAsync([FromBody] ContactCreate create, CancellationToken token = default)
        {
            var result = await _service.CreateContactAsync(create, token);

            return Ok(result);
        }

        [HttpGet]
        public async Task<IActionResult> GetAllContact(CancellationToken token = default)
        {
            var result = await _service.GetAllContact(token);

            return Ok(result);
        }

        [HttpPatch]
        public async Task<IActionResult> ProcessedContactAsync(int id, CancellationToken token = default)
        {
            var result = await _service.ProcessedContactAsync(id, token);

            return Ok(result);
        }

        [HttpDelete]
        public async Task DeleteContactAsync(int id, CancellationToken token = default)
        {
            await _service.DeleteContactAsync(id, token);
        }
    }
}