import Modal from "react-modal";

type Props = {
  isOpen: boolean;
  onRequestClose: () => void;
};

export function GameModal({ isOpen, onRequestClose }: Props) {
  const customStyles = {};

  <Modal
    isOpen={isOpen}
    //onAfterOpen={afterOpenModal}
    onRequestClose={onRequestClose}
    style={customStyles}
    contentLabel="Example Modal"
  >
    <div>I am a modal</div>
    <form>
      <input />
      <button>tab navigation</button>
      <button>stays</button>
      <button>inside</button>
      <button>the modal</button>
    </form>
  </Modal>;
}
