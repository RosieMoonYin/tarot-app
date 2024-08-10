import { TarotCardType } from "../types/tarotCardType";

interface ModalProps {
  card: TarotCardType;
}

const Modal = ({ card }: ModalProps) => {
  return (
    <dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
      <div className="modal-box">
        <h3 className="font-bold text-lg">{card.name}</h3>
        <p className="py-4">{card.meaning}</p>
        <div className="modal-action">
          <form method="dialog">
            <button className="btn">Close</button>
          </form>
        </div>
      </div>
    </dialog>
  );
};

export default Modal;
