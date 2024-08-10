import { useState } from "react";
import "./App.css";

import loversFront from "./assets/lovers.png";
import emperorFront from "./assets/emperor.png";
import hierophantFront from "./assets/hierophant.png";
import backImg from "./assets/tarot-card-back.png";

const tarotCards = [
  {
    id: 1,
    name: "The Fool",
    meaning:
      "The Fool represents new beginnings, having faith in the future, and being carefree.",
    frontImg: loversFront,
    backImg: backImg,
  },
  {
    id: 2,
    name: "The Lovers",
    meaning: "The Lovers represent love, union, relationships, and harmony.",
    frontImg: loversFront,
    backImg: backImg,
  },
  {
    id: 3,
    name: "The Emperor",
    meaning:
      "The Emperor symbolizes authority, structure, control, and fatherhood.",
    frontImg: emperorFront,
    backImg: backImg,
  },
  {
    id: 4,
    name: "The Hierophant",
    meaning:
      "The Hierophant signifies tradition, spirituality, and religious beliefs.",
    frontImg: hierophantFront,
    backImg: backImg,
  },
];

function App() {
  const [isFront, setIsFront] = useState(true);
  const [buttonText, setButtonText] = useState("Card Front");
  const [currentCard, setCurrentCard] = useState(tarotCards[0]);

  const handleClick = () => {
    setIsFront(!isFront);
    setButtonText(isFront ? "Card Front" : "Card Back");

    if (isFront) {
      const randomIndex = Math.floor(Math.random() * tarotCards.length);
      setCurrentCard(tarotCards[randomIndex]);
    }
  };
  return (
    <>
      <div>
        <h1>Tarot Reader</h1>
      </div>
      <div className="card">
        <img
          src={isFront ? currentCard.backImg : currentCard.frontImg}
          alt="tarot card"
          className="card-image"
        />
        <button onClick={handleClick}>{buttonText}</button>
      </div>
      <div>
        <p>Click on the button to pick a card</p>
        {!isFront && <p>{currentCard.meaning}</p>}
      </div>
    </>
  );
}

export default App;
