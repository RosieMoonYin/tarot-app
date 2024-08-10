using Microsoft.AspNetCore.Mvc;
namespace Backend_tarot_app.Controllers;
using Backend_tarot_app.Models;

[ApiController]
[Route("api/[controller]")]
public class TarotCardController : ControllerBase
{
    public static List<TarotCard> tarotCards = new List<TarotCard>
    {
    new TarotCard("1", "The Fool", "The Fool represents new beginnings, having faith in the future, and being carefree."),
    new TarotCard("2", "The Lovers", "The Lovers represent love, union, relationships, and harmony."),
    new TarotCard("3", "The Emperor", "The Emperor symbolizes authority, structure, control, and fatherhood."),
    new TarotCard("4", "The Hierophant", "The Hierophant signifies tradition, spirituality, and religious beliefs.")
};  

    [HttpGet]
    public ActionResult<IEnumerable<TarotCard>> GetAllCards()
    {
        return tarotCards;
    }

    [HttpGet("{id}")]
    public ActionResult<TarotCard> GetTarotCard(int id)
    {
        var card = tarotCards.Find(c => c.Id == id.ToString());
        if (card == null)
        {
            return NotFound();
        }
        return card;
    }
}
