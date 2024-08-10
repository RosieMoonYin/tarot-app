using Microsoft.AspNetCore.Mvc;
namespace Backend_tarot_app.Controllers;
using Backend_tarot_app.Models;

[ApiController]
[Route("api/[controller]")]
public class TarotCardController : ControllerBase
{
     private static readonly List<TarotCard> tarotCards = new List<TarotCard>
        {
            new TarotCard(1, "The Fool", ["The Fool represents new beginnings...", "reverse meaning"], "..png", "..back.png"),
            new TarotCard(2, "The Lovers", ["The Lovers represent love, union...", "reverse meaning"] , "..png", "..back.png"),
        };

    [HttpGet]
    public ActionResult<IEnumerable<TarotCard>> GetAllCards()
    {
        return tarotCards;
    }
}
