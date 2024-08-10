import "./App.css";

import loversFront from "./assets/lovers.png";
import emperorFront from "./assets/emperor.png";
import hierophantFront from "./assets/hierophant.png";
import backImg from "./assets/tarot-card-back.png";
import { useState } from "react";

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
  const [currentCard, setCurrentCard] = useState(tarotCards[0]);

  // (document.getElementById("my_modal_5") as HTMLDialogElement).showModal();
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
  return (
    <>
      <div>
        <h1 className="text-3xl font-bold underline">Tarot Reader</h1>
      </div>
      <section className="">
        <div className="card">
          <img
            src={isFront ? currentCard.backImg : currentCard.frontImg}
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
