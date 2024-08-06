namespace AuthAPI_903.Dtos
{
    public class TokenDto
    {
        public string RefreshToken { get; set; } = null;
        public string Token { get; set; }
        public string Email { get; set; }
    }
}
