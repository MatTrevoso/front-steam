import { useCallback, useContext } from "react";
import Modal from "react-modal";

import { toast } from "react-toastify";

import lomanGames from "../../assets/images/lomanGames.svg";
import banner4 from "../../assets/images/banner4.png";

import AuthContext from "../../contexts/Auth";
import ModalContext from "../../contexts/Modal";

import { ModalCloseButton } from "../ModalCloseButton";
import { Button } from "../Button";
import { Input } from "../Input";

import styles from "./styles.module.scss";
import { AuthService } from "../../services/authService";

export function LoginModal() {
  const { signIn } = useContext(AuthContext);
  const { isModalOpen, closeModal } = useContext(ModalContext);

  const handleSubmit = useCallback(async (e) => {
    e.preventDefault();
    await AuthService.signIn({
      email: "aaaaa",
      password: "ssssss",
    })
      .then((res) => {
        console.log(res);
        signIn();
        toast("Bem vindo novamente: Mateus !!", {
          type: "success",
          draggable: true,
          delay: 500,
          position: "top-left",
        });
      })
      .catch((err) => {
        toast(err.message, {
          type: "success",
          draggable: true,
          delay: 500,
          position: "top-left",
        });
      })
      .finally(() => {
        closeModal();
      });
  }, []);

  return (
    <Modal
      isOpen={isModalOpen}
      onRequestClose={() => closeModal()}
      className={styles.modal}
      overlayClassName={styles["modal-overlay"]}
    >
      <div className={styles.form}>
        <div className={styles.logo}>
          <img src={lomanGames} alt="Logo" />
        </div>
        <form onSubmit={handleSubmit}>
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
          <Button type="submit" text="Sign in" />
        </form>
      </div>
      <img src={banner4} alt="Banner-4" />
      <ModalCloseButton onClick={() => closeModal()} />
    </Modal>
  );
}
