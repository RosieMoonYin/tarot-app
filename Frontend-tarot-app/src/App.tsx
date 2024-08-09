import { useState } from "react";
import frontImg from "./assets/tarot-card-front.png";
import backImg from "./assets/tarot-card-back.png";
import "./App.css";

const tarotCard = {
  id: 1,
  name: "The Fool",
  meaning:
    "The Fool represents new beginnings, having faith in the future, and being carefree.",
  frontImg: frontImg,
  backImg: backImg,
};

function App() {
  const [isFront, setIsFront] = useState(true);
  const [buttonText, setButtonText] = useState("Card Front");

  const handleClick = () => {
    setIsFront(!isFront);
    setButtonText(isFront ? "Card Front" : "Card Back");
  };

  return (
    <>
      <div>
        <h1>Tarot Reader</h1>
      </div>
      <div className="card">
        <img
          src={isFront ? tarotCard.frontImg : tarotCard.backImg}
          alt="tarot card"
          className="card-image"
        />
        <button onClick={handleClick}>{buttonText}</button>
      </div>
      <div>
        <p>Click on the button to pick a card</p>
      </div>
    </>
  );
}

export default App;
