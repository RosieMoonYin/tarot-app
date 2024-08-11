import "./App.css";
import { useEffect, useState } from "react";
import { TarotCardType } from "./types/tarotCardType";
import Modal from "./components/modal";
import TarotCard from "./components/tarotcard";

function App() {
  const [tarotCards, setTarotCards] = useState<TarotCardType[]>([]);
  const [currentCards, setCurrentCards] = useState<TarotCardType[]>([]);
  const [readingType, setReadingType] = useState("single");

  useEffect(() => {
    const fetchTarotCards = async () => {
      try {
        const response = await fetch("http://localhost:5070/api/TarotCard");
        if (!response.ok) throw new Error("sorry 200 OK was not returned");
        const tarotCardData = await response.json();
        setTarotCards(tarotCardData);
        setCurrentCards([tarotCardData[0]]);
      } catch (error) {
        console.error("fetch didnt work:", error);
      }
    };
    fetchTarotCards();
  }, []);

  const drawSingleCard = () => {
    const randomIndex = Math.floor(Math.random() * tarotCards.length);
    setCurrentCards([tarotCards[randomIndex]]);
  };

  const drawThreeCards = () => {
    const selectedCards: TarotCardType[] = [];
    while (selectedCards.length < 3) {
      const randomIndex = Math.floor(Math.random() * tarotCards.length);
      const selectedCard = tarotCards[randomIndex];
      if (!selectedCards.includes(selectedCard)) {
        selectedCards.push(selectedCard);
      }
    }
    setCurrentCards(selectedCards);
  };

  const handleCardClick = () => {
    if (readingType === "single") {
      drawSingleCard();
    } else if (readingType === "three") {
      drawThreeCards();
    }

    const modal = document.getElementById("my_modal_5") as HTMLDialogElement;
    if (modal) {
      modal.showModal();
    }
  };

  if (!currentCards.length) {
    return <p>I AM LOADING or empty...</p>;
  }

  return (
    <>
      <div>
        <h1>Tarot Reader</h1>
      </div>
      <div>
        <button
          onClick={() => {
            setReadingType("single");
            drawSingleCard();
          }}
        >
          Single Card
        </button>
        <button
          onClick={() => {
            setReadingType("three");
            drawThreeCards();
          }}
        >
          Three-Card Spread
        </button>
      </div>

      <section>
        <div className="card">
          {currentCards.map((card, index) => (
            <TarotCard
              key={index}
              card={card}
              onCardClick={handleCardClick}
              // isFaceDown={readingType === "three"}
            />
          ))}
        </div>
        {currentCards.length === 1 && <Modal card={currentCards[0]} />}
      </section>
      <div></div>
    </>
  );
}

export default App;
