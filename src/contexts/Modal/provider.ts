export interface Provider {
  closeModal: () => void;
  openModal: () => void;
  isModalOpen: boolean; //React.Dispatch<React.SetStateAction<boolean>>;
}
