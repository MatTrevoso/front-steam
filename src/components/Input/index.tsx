import { useField } from "@unform/core";
import { InputHTMLAttributes, useEffect, useRef } from "react";
import styles from "./styles.module.scss";

type Props = InputHTMLAttributes<HTMLInputElement> & {
  htmlFor: string;
  text: string;
};

export function Input({ htmlFor, text, ...rest }: Props) {
  const inputRef = useRef(null);
  const { fieldName, defaultValue, registerField, error } = useField(
    rest.name ?? ""
  );
  useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputRef,
      getValue: (ref) => {
        return ref.current.value;
      },
      setValue: (ref, value) => {
        ref.current.value = value;
      },
      clearValue: (ref) => {
        ref.current.value = "";
      },
    });
  }, [fieldName, registerField]);

  return (
    <label htmlFor={htmlFor} className={styles.label}>
      {text}
      <input
        ref={inputRef}
        defaultValue={defaultValue}
        className={styles.input}
        {...rest}
      />
    </label>
  );
}
