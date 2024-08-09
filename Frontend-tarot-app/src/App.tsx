import { useState } from "react";
import frontImage from "./assets/tarot-card-front.png";
import backImage from "./assets/tarot-card-back.png";
import "./App.css";

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
          src={isFront ? frontImage : backImage}
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
