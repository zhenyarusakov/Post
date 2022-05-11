using System.Threading;
using System.Threading.Tasks;
using PostWeb.Core.Common;
using PostWeb.Core.DTO.PostDto;

namespace PostWeb.Infrastructure.Interfaces
{
    public interface IPostService
    {
        Task<int> CreatePostAsync(CreatePostRequest create, CancellationToken token = default);
        Task<int> UpdatePostAsync(int id, UpdatePostRequest request, CancellationToken token = default);
        Task<PostDto> GetByIdPostAsync(int id, CancellationToken token = default);
        Task<PostDto[]> GetAllPostsAsync(PostFilter filter, CancellationToken token = default);
        Task<PostDto[]> GetFirstFivePostsAsync(CancellationToken token = default);
        Task DeletePostAsync(int id, CancellationToken token = default);
    }
}