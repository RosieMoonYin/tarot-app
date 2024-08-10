import { TarotCardType } from "../types/tarotCardType";

interface CardProps {
  card: TarotCardType;
  isFront: boolean;
  imageMap: {
    [key: string]: {
      frontImg: string;
      backImg: string;
    };
  };
  onClick: () => void;
}

const Card = ({ card, isFront, imageMap, onClick }: CardProps) => {
  return (
    <div className="card" onClick={onClick}>
      <img
        src={isFront ? imageMap[card.id].backImg : imageMap[card.id].frontImg}
        alt={card.name}
        className="card-image"
      />
    </div>
  );
};

export default Card;
