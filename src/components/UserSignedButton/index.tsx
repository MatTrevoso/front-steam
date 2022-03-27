import { ButtonHTMLAttributes } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSignOut } from "@fortawesome/free-solid-svg-icons";

import styles from "./styles.module.scss";

type Props = ButtonHTMLAttributes<HTMLButtonElement> & {
  text: string;
};

export function UserSignedButton({ text, ...rest }: Props) {
  return (
    <button className={styles.button} {...rest}>
      {text}
      <FontAwesomeIcon icon={faSignOut} size="lg" />
    </button>
  );
}
