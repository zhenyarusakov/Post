namespace PostWeb.Core.DTO.ContactDto
{
    public class ContactCreate
    {
        public string Name { get; set; }
        public string Email { get; set; }
        public string Message { get; set; }
        public bool Processed { get; set; }
    }
}