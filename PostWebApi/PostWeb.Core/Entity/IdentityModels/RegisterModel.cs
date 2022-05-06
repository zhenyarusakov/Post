using System.ComponentModel.DataAnnotations;

namespace PostWeb.Core.IdentityModels
{
    public class RegisterModel
    {
        public RegisterModel(string userName, string email, string password)
        {
            UserName = userName;
            Email = email;
            Password = password;
        }

        [Required(ErrorMessage = "User Name is required")]
        public string UserName { get; set; }
    
        [EmailAddress]
        [Required(ErrorMessage = "Email is required")]
        public string Email { get; set; }
    
        [Required(ErrorMessage = "Password is required")]
        public string Password { get; set; }
    }
}