using System;
using System.Linq;
using System.Threading;
using System.Threading.Tasks;
using AutoMapper;
using Microsoft.EntityFrameworkCore;
using PostWeb.Core;
using PostWeb.Core.DTO.ContactDto;
using PostWeb.Infrastructure.Interfaces;

namespace PostWeb.Infrastructure.Services
{
    public class ContactService: IContactService
    {
        private readonly PostContext _context;
        private readonly IMapper _mapper;

        public ContactService(PostContext context, IMapper mapper)
        {
            _context = context;
            _mapper = mapper;
        }

        public async Task<ContactDto> GetContactById(int id, CancellationToken token = default)
        {
            var contact = await _context.Contacts
                .AsNoTracking()
                .SingleOrDefaultAsync(x => x.Id == id, token);

            if (contact == null)
            {
                throw new ArgumentNullException("Post not found");
            }
            
            return _mapper.Map<ContactDto>(contact);
        }

        public async Task<int> CreateContactAsync(ContactCreate create, CancellationToken token = default)
        {
            var contact = _mapper.Map<Contact>(create);

            _context.Contacts.Add(contact);

            await _context.SaveChangesAsync(token);

            return contact.Id;
        }
        
        public async Task<ContactDto[]> GetAllContact(CancellationToken token = default)
        {
            var contacts = await _context.Contacts.AsNoTracking().Where(x=>x.Processed).ToArrayAsync(token);

            return _mapper.Map<ContactDto[]>(contacts);
        }

        public async Task<bool> ProcessedContactAsync(int id, CancellationToken token = default)
        {
            var contact = await _context.Contacts.SingleOrDefaultAsync(x => x.Id == id, token);

            if (contact == null)
            {
                throw new ArgumentNullException("Contact not found");
            }

            contact.Processed = false;

            await _context.SaveChangesAsync(token);

            return contact.Processed;
        }

        public async Task DeleteContactAsync(int id, CancellationToken token = default)
        {
            var contact = await _context.Contacts.SingleOrDefaultAsync(x => x.Id == id, token);

            if (contact == null)
            {
                throw new ArgumentNullException("Contact not found");
            }

            _context.Remove(contact);

            await _context.SaveChangesAsync(token);
        }
    }
}