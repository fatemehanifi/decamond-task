"use client"

import Input from "@/components/Input/Input";
import Button from "@/components/Button/Button";

import styles from "./LoginForm.module.scss";

export default function LoginForm() {
    return (
        <div className={styles.formWrapper}>
            <Input label={"شماره همراه"} name={"phone"} value={"09386005853"} onChange={() => {}} />
            <Button loading={false} text={"تایید"} disabled={false} onClick={() =>{}} />
        </div>
    )
}