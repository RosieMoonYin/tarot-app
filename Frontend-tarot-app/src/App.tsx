import "./App.css";
import { useEffect, useState } from "react";
import { TarotCardType } from "./types/tarotCardType";
import { imageMap } from "./utils/imageMap";
import Card from "./components/card.tsx";
import Modal from "./components/modal.tsx";

function App() {
  const [tarotCards, setTarotCards] = useState<TarotCardType[]>([]);
  const [isFront, setIsFront] = useState(true);
  const [currentCard, setCurrentCard] = useState(tarotCards[0]);

  const [readingType, setReadingType] = useState<"oneCard" | "threeCard">(
    "oneCard"
  );

  useEffect(() => {
    fetch("http://localhost:5070/api/TarotCard")
      .then((response) => {
        if (!response.ok) {
          throw new Error("sorry 200 OK was not returned");
        }
        return response.json();
      })
      .then((data) => {
        setTarotCards(data);
        setCurrentCard(data[0]);
      })
      .catch((error) => {
        console.error("DEBUG the fetch didnt work here is the error:", error);
      });
  }, []);

  const showModal = (id: string) => {
    const modal = document.getElementById(id) as HTMLDialogElement;
    if (modal) {
      modal.showModal();
    }
  };

  const handleClick = () => {
    setIsFront(!isFront);

    if (isFront) {
      const randomIndex = Math.floor(Math.random() * tarotCards.length);
      setCurrentCard(tarotCards[randomIndex]);
      showModal("my_modal_5");
    }
  };
  if (!currentCard) {
    return <p>I AM LOADING or empty...</p>;
  }
  return (
    <>
      <div>
        <h1 className="text-3xl font-bold underline">Tarot Reader</h1>
      </div>
      <div>
        <button
          className={`btn ${readingType === "oneCard"}`}
          onClick={() => setReadingType("oneCard")}
        >
          One card reading
        </button>
        <button
          className={`btn ${readingType === "threeCard"}`}
          onClick={() => setReadingType("threeCard")}
        >
          Three card reading
        </button>
      </div>
      <section className="">
        <Card
          card={currentCard}
          isFront={isFront}
          imageMap={imageMap}
          onClick={handleClick}
        />
        <Modal card={currentCard} />
      </section>
    </>
  );
}

export default App;
