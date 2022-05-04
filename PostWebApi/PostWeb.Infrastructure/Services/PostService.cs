using System;
using System.Linq;
using System.Threading;
using System.Threading.Tasks;
using AutoMapper;
using Microsoft.EntityFrameworkCore;
using PostWeb.Core;
using PostWeb.Core.DTO.PostDto;
using PostWeb.Infrastructure.Interfaces;

namespace PostWeb.Infrastructure.Services
{
    public class PostService: IPostService
    {
        private readonly PostContext _context;
        private readonly IMapper _mapper;

        public PostService(PostContext context, IMapper mapper)
        {
            _context = context;
            _mapper = mapper;
        }
        
        public async Task<PostDto> GetByIdPostAsync(int id, CancellationToken token = default)
        {
            var post = await _context.Posts
                .AsNoTracking()
                .SingleOrDefaultAsync(x => x.Id == id, token);

            if (post == null)
            {
                throw new ArgumentNullException("Post not found");
            }

            return _mapper.Map<PostDto>(post);
        }

        public async Task<PostDto[]> GetAllPostsAsync(CancellationToken token = default)
        {
            var posts = await _context.Posts.ToArrayAsync(token);

            return _mapper.Map<PostDto[]>(posts);
        }

        public async Task<PostDto[]> GetFirstFivePostsAsync(CancellationToken token = default)
        {
            var posts = await _context.Posts.Take(5).ToArrayAsync(token);

            return _mapper.Map<PostDto[]>(posts);
        }

        public async Task<int> CreatePostAsync(PostCreate create, CancellationToken token = default)
        {
            Post post = _mapper.Map<Post>(create);

            _context.Posts.Add(post);

            await _context.SaveChangesAsync(token);

            return post.Id;
        }

        public async Task<int> UpdatePostAsync(PostUpdate update, CancellationToken token = default)
        {
            var updatePost = await _context.Posts
                .AsNoTracking()
                .SingleOrDefaultAsync(x => x.Id == update.Id, token);

            if (updatePost == null)
            {
                throw new ArgumentNullException("Post not found");
            }

            _mapper.Map(update, updatePost);
            
            updatePost.DateTime = DateTime.UtcNow;

            _context.Update(updatePost);

            await _context.SaveChangesAsync(token);

            return updatePost.Id;
        }

        public async Task DeletePostAsync(int id, CancellationToken token = default)
        {
            var post = await _context.Posts.SingleOrDefaultAsync(x => x.Id == id, token);

            if (post == null)
            {
                throw new ArgumentNullException("Post not found");
            }

            _context.Remove(post);
            
            await _context.SaveChangesAsync(token);
        }
    }
}