import { useState } from "react";
import { TarotCardType } from "../types/tarotCardType";
import { imageMap } from "../utils/imageMap";

interface TarotCardProps {
  card: TarotCardType;
  onCardClick: (card: TarotCardType) => void;
}

const TarotCard = ({ card, onCardClick }: TarotCardProps) => {
  const [isFront, setIsFront] = useState(true);

  const handleClick = () => {
    setIsFront(!isFront);

    if (isFront) {
      onCardClick(card);
    }
  };

  return (
    //one container flex min width media query,
    //
    <section>
      <div className="card glow-box cursor-grab">
        <img
          src={isFront ? imageMap[card.id].backImg : imageMap[card.id].frontImg}
          alt="tarot card"
          className="card-image"
          onClick={handleClick}
        />
      </div>
    </section>
  );
};

export default TarotCard;
