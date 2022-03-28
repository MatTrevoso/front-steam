import { useCallback, useContext, useState } from "react";
import Modal from "react-modal";

import { toast } from "react-toastify";

import lomanGames from "../../assets/images/lomanGames.svg";
import banner4 from "../../assets/images/banner4.png";

import AuthContext from "../../contexts/Auth";
import ModalContext from "../../contexts/Modal";

import { ModalCloseButton } from "../ModalCloseButton";
import { Button } from "../Button";
import { Input } from "../Input";

import { AuthService } from "../../services/AuthService/authService";

import styles from "./styles.module.scss";

export function LoginModal() {
  const { signIn } = useContext(AuthContext);
  const { isModalOpen, closeModal } = useContext(ModalContext);

  const [isLoading, setIsloading] = useState(false);

  const handleSubmit = useCallback(async (e) => {
    e.preventDefault();

    setIsloading(true);
    await AuthService.signIn({
      email: e.target[0].value,
      password: e.target[1].value,
    })
      .then((res) => {
        signIn(res.data.userName);
        toast("Bem vindo novamente", { type: "success", position: "top-left" });
      })
      .catch((err) => {
        toast(err.message, {
          type: "error",
          position: "top-left",
        });
      })
      .finally(() => {
        setIsloading(false);
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
            required
          />
          <Input
            text="Password"
            htmlFor="password"
            type="password"
            name="password"
            id="password"
            required
          />
          <Button isLoading={isLoading} type="submit" text="Sign in" />
        </form>
      </div>
      <img src={banner4} alt="Banner-4" />
      <ModalCloseButton onClick={() => closeModal()} />
    </Modal>
  );
}
