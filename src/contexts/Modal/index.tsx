import { createContext, useCallback, useState } from "react";
import { Provider } from "./provider";

const ModalContext = createContext<Provider>({} as Provider);
export default ModalContext;

type Props = {
  children: React.ReactChild;
};

export function ModalProvider({ children }: Props) {
  const [toggleModal, setToggleModal] = useState(false);

  const closeModal = useCallback(() => {
    setToggleModal(false);
  }, []);

  const openModal = useCallback(() => {
    setToggleModal(true);
  }, []);

  return (
    <ModalContext.Provider
      value={{
        closeModal,
        isModalOpen: toggleModal,
        openModal,
      }}
    >
      {children}
    </ModalContext.Provider>
  );
}
