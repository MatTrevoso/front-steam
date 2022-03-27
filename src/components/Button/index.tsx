import styles from "./styles.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserCircle } from "@fortawesome/free-solid-svg-icons";
import { ButtonHTMLAttributes, useMemo } from "react";

type Props = ButtonHTMLAttributes<HTMLButtonElement> & {
  text: string;
  isRound?: boolean;
};

export function Button({ text, isRound = false, ...rest }: Props) {
  const roundButton = useMemo(() => {
    if (isRound) {
      return styles.button + " " + styles.round;
    }
    return styles.button;
  }, []);

  return (
    <>
      <button className={roundButton} {...rest}>
        <FontAwesomeIcon icon={faUserCircle} size="lg" />
        {text}
      </button>
    </>
  );
}
