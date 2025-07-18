import React from "react";

import styles from './Input.module.scss';

interface InputProps {
    label: string;
    name: string;
    inputType?: string;
    placeholder?: string;
    value: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export default function Input({
  label,
  name,
  inputType = "text",
  placeholder = "",
  value,
  onChange,
}: InputProps) {
    return (
        <div className={styles.inputWrapper}>
            <label htmlFor={name} className={styles.label}>
                {label}
            </label>
            <input
                id={name}
                name={name}
                type={inputType}
                value={value}
                onChange={onChange}
                placeholder={placeholder}
                className={styles.input}
            />
        </div>
    );
}
