using Microsoft.AspNetCore.Mvc;
namespace Backend_tarot_app.Controllers;
using Backend_tarot_app.Models;

[ApiController]
[Route("api/[controller]")]
public class TarotCardController : ControllerBase
{
public static List<TarotCard> tarotCards = new List<TarotCard>
{
    new TarotCard("1", "The Fool", "The Fool embodies the spirit of adventure and the thrill of taking a leap into the unknown. It symbolizes innocence, new beginnings, and the boundless potential that comes with embracing life's uncertainties."),
    new TarotCard("2", "The Lovers", "The Lovers card represents deep emotional connections, choices that align with your values, and the beauty of harmonious relationships. It signifies love, unity, and the importance of making choices that reflect your true desires."),
    new TarotCard("3", "The Emperor", "The Emperor symbolizes leadership, authority, and the power of structure. It embodies the principles of control, stability, and the protective energy of a strong, guiding presence."),
    new TarotCard("4", "The Hierophant", "The Hierophant signifies spiritual wisdom, tradition, and the guidance of established beliefs. It represents the search for deeper meaning, the value of learning, and the importance of following a moral path."),
    new TarotCard("5", "The Chariot", "The Chariot represents determination, willpower, and the triumph over obstacles through sheer force of focus. It symbolizes victory, self-discipline, and the ability to harness conflicting forces to achieve your goals."),
    new TarotCard("6", "Justice", "Justice embodies fairness, truth, and the law of cause and effect. It represents the pursuit of balance, the importance of ethical decisions, and the inevitability of facing the consequences of one's actions."),
    new TarotCard("7", "Strength", "Strength symbolizes inner courage, resilience, and the mastery of one's own emotions. It represents the power of compassion, patience, and the quiet strength that comes from a deep connection with your inner self."),
    new TarotCard("8", "The Hermit", "The Hermit represents introspection, solitude, and the quest for personal truth. It symbolizes the value of inner reflection, the search for deeper understanding, and the wisdom that comes from looking within."),
    new TarotCard("9", "Wheel of Fortune", "The Wheel of Fortune signifies the cycles of life, destiny, and the ever-changing nature of fate. It represents the unpredictable twists and turns of life, the importance of adaptability, and the belief in the power of karma."),
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
