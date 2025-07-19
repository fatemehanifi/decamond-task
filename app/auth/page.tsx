import Image from "next/image";

import LoginForm from "@/components/LoginForm/LoginForm";

import styles from "./LoginPage.module.scss"

export default function LoginPage() {
    return (
        <div className={styles.loginPage}>
            <div className={styles.formColumn}>
                <p>Login / Signup</p>
                <p>Enter your phone number to login or signup</p>
                <LoginForm />
            </div>

            <div className={styles.imageColumn}>
                <Image
                    src="/login-vector.jpg"
                    alt="login-vector"
                    fill
                    style={{ objectFit: "cover" }}
                />
            </div>
        </div>
    )
}