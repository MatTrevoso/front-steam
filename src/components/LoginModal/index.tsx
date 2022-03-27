import { useContext } from "react";
import Modal from "react-modal";
import ModalContext from "../../contexts/Modal";
import { Button } from "../Button";
import { Input } from "../Input";

import lomanGames from "../../assets/images/lomanGames.svg";
import banner4 from "../../assets/images/banner4.png";

import styles from "./styles.module.scss";
import { ModalCloseButton } from "../ModalCloseButton";

export function LoginModal() {
  const { isModalOpen, closeModal } = useContext(ModalContext);

  return (
    <Modal
      isOpen={isModalOpen}
      onRequestClose={() => closeModal()}
      className={styles.modal}
      overlayClassName={styles["modal-overlay"]}
      contentLabel="Example Modal"
    >
      <div className={styles.form}>
        <div className="logo">
          <img src={lomanGames} alt="Logo" />
        </div>
        <form action="">
          <Input
            text="E-mail"
            htmlFor="email"
            type="email"
            name="email"
            id="email"
          />
          <Input
            text="Password"
            htmlFor="password"
            type="password"
            name="password"
            id="password"
          />
          <Button text="Sign in" />
        </form>
      </div>
      <div className="swiper swiper-banner-3">
        <div className="swiper-wrapper">
          <div className="swiper-slide">
            <div /*  className="container" */>
              <img src={banner4} alt="Banner-4" />
            </div>
          </div>
        </div>
        <div className="swiper-pagination swiper-pagination-3"></div>
      </div>
      <ModalCloseButton onClick={() => closeModal()} />
    </Modal>
  );
}
