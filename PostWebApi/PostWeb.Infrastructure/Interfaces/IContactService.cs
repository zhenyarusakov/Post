using System.Threading;
using System.Threading.Tasks;
using PostWeb.Core;
using PostWeb.Core.DTO.ContactDto;

namespace PostWeb.Infrastructure.Interfaces
{
    public interface IContactService
    {
        Task<ContactDto> GetContactById(int id, CancellationToken token = default);
        Task<int> CreateContactAsync(ContactCreate create, CancellationToken token = default);
        Task<bool> ProcessedContactAsync(int id, CancellationToken token = default);
        Task DeleteContactAsync(int id, CancellationToken token = default);
        Task<ContactDto[]> GetAllContact(CancellationToken token = default);
    }
}