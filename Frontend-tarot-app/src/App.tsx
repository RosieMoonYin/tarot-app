import "./App.css";
import { useEffect, useState } from "react";
import { TarotCardType } from "./types/tarotCardType";
import Modal from "./components/modal";
import TarotCard from "./components/tarotcard";

function App() {
  const [tarotCards, setTarotCards] = useState<TarotCardType[]>([]);
  const [currentCard, setCurrentCard] = useState(tarotCards[0]);

  useEffect(() => {
    const fetchTarotCards = async () => {
      try {
        const response = await fetch("http://localhost:5070/api/TarotCard");
        if (!response.ok) throw new Error("sorry 200 OK was not returned");
        const tarotCardData = await response.json();
        setTarotCards(tarotCardData);
        setCurrentCard(tarotCardData[0]);
      } catch (error) {
        console.error("fetch didnt work:", error);
      }
    };
    fetchTarotCards();
  }, []);

  const handleCardClick = () => {
    const randomIndex = Math.floor(Math.random() * tarotCards.length);
    setCurrentCard(tarotCards[randomIndex]);
    const modal = document.getElementById("my_modal_5") as HTMLDialogElement;
    if (modal) {
      modal.showModal();
    }
  };
  if (!currentCard) {
    return <p>I AM LOADING or empty...</p>;
  }
  return (
    <>
      <div>
        <h1>Tarot Reader</h1>
      </div>
      <section>
        <TarotCard card={currentCard} onCardClick={handleCardClick} />
        {currentCard && <Modal card={currentCard} />}
      </section>
    </>
  );
}

export default App;
