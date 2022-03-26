import styles from "./styles.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconName } from "@fortawesome/fontawesome-svg-core";
import { faUserCircle } from "@fortawesome/free-solid-svg-icons";

type Props = {
  text: string;
};

export function Button({ text }: Props) {
  return (
    <>
      <button className={styles.button}>
        <FontAwesomeIcon icon={faUserCircle} />
        {text}
      </button>
    </>
  );
}
