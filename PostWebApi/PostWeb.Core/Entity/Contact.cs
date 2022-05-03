namespace PostWeb.Core
{
    public class Contact
    {
        public int Id { get; set; }
        public string Email { get; set; }
        public string Message { get; set; }
        public bool Processed { get; set; }
    }
}