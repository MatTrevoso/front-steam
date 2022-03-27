import { InputHTMLAttributes } from "react";
import styles from "./styles.module.scss";

type Props = InputHTMLAttributes<HTMLInputElement> & {
  htmlFor: string;
  text: string;
};

export function Input({ htmlFor, text, ...rest }: Props) {
  return (
    <label htmlFor={htmlFor} className={styles.label}>
      {text}
      <input className={styles.input} {...rest} />
    </label>
  );
}
