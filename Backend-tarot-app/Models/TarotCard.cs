namespace Backend_tarot_app.Models;

    public record TarotCard(
        int Id,
        string Name,
        string[] Meaning,
        string FrontImg,
        string BackImg
    ){}
