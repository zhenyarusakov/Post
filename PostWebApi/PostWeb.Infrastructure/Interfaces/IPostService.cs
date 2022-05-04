using System.Threading;
using System.Threading.Tasks;
using PostWeb.Core.DTO.PostDto;

namespace PostWeb.Infrastructure.Interfaces
{
    public interface IPostService
    {
        Task<int> CreatePostAsync(PostCreate create, CancellationToken token = default);
        Task<int> UpdatePostAsync(PostUpdate update, CancellationToken token = default);
        Task<PostDto> GetByIdPostAsync(int id, CancellationToken token = default);
        Task<PostDto[]> GetAllPostsAsync(CancellationToken token = default);
        Task<PostDto[]> GetFirstFivePostsAsync(CancellationToken token = default);
        Task DeletePostAsync(int id, CancellationToken token = default);
    }
}