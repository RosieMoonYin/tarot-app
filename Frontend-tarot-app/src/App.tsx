import "./App.css";

import { useEffect, useState } from "react";
import { TarotCardType } from "./types/tarotCardType";
import { imageMap } from "./utils/imageMap";

function App() {
  const [tarotCards, setTarotCards] = useState<TarotCardType[]>([]);

  const [isFront, setIsFront] = useState(true);
  const [currentCard, setCurrentCard] = useState(tarotCards[0]);

  useEffect(() => {
    console.log("DEBUG useEffect is running");
    fetch("http://localhost:5070/api/TarotCard")
      .then((response) => {
        console.log("DEBUG Fetch response YAY:", response);

        if (!response.ok) {
          throw new Error("sorry 200 OK was not returned");
        }
        return response.json();
      })
      .then((data) => {
        console.log("DEBUG Fetched data YAY:", data);
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
      <section className="">
        <div className="card">
          <img
            src={
              isFront
                ? imageMap[currentCard.id].backImg
                : imageMap[currentCard.id].frontImg
            }
            alt="tarot card"
            className="card-image"
            onClick={handleClick}
          />
        </div>
        <dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
          <div className="modal-box">
            <h3 className="font-bold text-lg">{currentCard.name}</h3>
            <p className="py-4">{currentCard.meaning}</p>
            <div className="modal-action">
              <form method="dialog">
                <button className="btn">Close</button>
              </form>
            </div>
          </div>
        </dialog>
      </section>
    </>
  );
}

export default App;
