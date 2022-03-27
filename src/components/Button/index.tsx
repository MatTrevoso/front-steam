import styles from "./styles.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserCircle } from "@fortawesome/free-solid-svg-icons";

type Props = {
  text: string;
  isRound: boolean;
};

export function Button({ text, isRound = false }: Props) {
  console.log(styles.button + styles.round);
  return (
    <>
      <button className={styles.button + " " + styles.round}>
        <FontAwesomeIcon icon={faUserCircle} />
        {text}
      </button>
    </>
  );
}
