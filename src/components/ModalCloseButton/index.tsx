import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRectangleXmark } from "@fortawesome/free-solid-svg-icons";

import styles from "./styles.module.scss";

type Props = {
  onClick: () => void;
};

export function ModalCloseButton({ onClick }: Props) {
  return (
    <FontAwesomeIcon
      icon={faRectangleXmark}
      size="lg"
      onClick={onClick}
      className={styles["close-button"]}
    />
  );
}
