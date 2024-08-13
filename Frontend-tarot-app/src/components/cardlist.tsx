import { TarotCardType } from "../types/tarotCardType";

interface CardListProps {
  cards: TarotCardType[];
}

const CardList = ({ cards }: CardListProps) => {
  return (
    <dialog id="my_acordian" className="">
      {cards.map((card, index) => (
        <div key={index} className="collapse bg-base-200">
          <input type="radio" name="my-accordion-1" />
          <div className="collapse-title text-xl font-medium">{card.name}</div>
          <div className="collapse-content">
            <p>{card.meaning} hello</p>
          </div>
        </div>
      ))}
    </dialog>
  );
};

export default CardList;
