import styles from "./styles.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserCircle } from "@fortawesome/free-solid-svg-icons";
import { ButtonHTMLAttributes, useMemo, useState } from "react";

import DotLoader from "react-spinners/PropagateLoader";

type Props = ButtonHTMLAttributes<HTMLButtonElement> & {
  text: string;
  isRound?: boolean;
  isLoading?: boolean;
};

export function Button({
  text,
  isLoading = false,
  isRound = false,
  ...rest
}: Props) {
  const roundButton = useMemo(() => {
    if (isRound) {
      return styles.button + " " + styles.round;
    }
    return styles.button;
  }, []);

  return (
    <>
      <button className={roundButton} {...rest}>
        {isLoading ? (
          <DotLoader size={10} />
        ) : (
          <>
            <FontAwesomeIcon icon={faUserCircle} size="lg" />
            {text}
          </>
        )}
      </button>
    </>
  );
}
