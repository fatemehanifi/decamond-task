import React from "react";

import Loading from "@/components/Loading/Loading";

import styles from './Button.module.scss';

interface ButtonProps {
    text: string;
    onClick?: () => void;
    disabled?: boolean;
    loading?: boolean;
}

export default function Button({
   text,
   onClick,
   disabled = false,
   loading = false,
}: ButtonProps) {

    return (
        <button
            className={`${styles.button} ${disabled && styles.disabled}`}
            onClick={onClick}
            disabled={disabled}
        >
            {loading ?
                <Loading />
                : <p className={styles.buttonText}>{text}</p>}
        </button>
    );
}
