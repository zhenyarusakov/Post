namespace PostWeb.Core.DTO.ContactDto
{
    public class ContactDto
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public string Email { get; set; }
        public string Message { get; set; }
        public bool Processed { get; set; }
    }
}