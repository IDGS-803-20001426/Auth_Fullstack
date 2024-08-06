using System.ComponentModel.DataAnnotations;

namespace AuthAPI_903.Dtos
{
    public class ForgotPasswordDto
    {
        [Required]
        [EmailAddress]
        public string Email {  get; set; } = string.Empty;
    }
}
