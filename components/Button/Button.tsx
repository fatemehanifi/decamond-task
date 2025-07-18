import React from "react";

import Loading from "@/components/Loading/Loading";

import styles from './Button.module.scss';

interface ButtonProps {
    children: React.ReactNode;
    onClick?: () => void;
    disabled?: boolean;
    loading?: boolean;
}

export default function Button({
   children,
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
            {loading ? <Loading /> : children}
        </button>
    );
}
