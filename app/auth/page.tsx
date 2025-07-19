import Image from "next/image";

import LoginForm from "@/components/LoginForm/LoginForm";

import styles from "./LoginPage.module.scss"

export default function LoginPage() {
    return (
        <div className={styles.loginPage}>
            <div className={styles.imageColumn}>
                <Image
                    src="/login-vector.jpg"
                    alt="login-vector"
                    fill
                    style={{ objectFit: "cover" }}
                />
            </div>

            <div className={styles.formColumn}>
                <p>ورود / ثبت نام</p>
                <p>برای ورود یا ثبت نام شماره همراه خود را وارد کنید.</p>
                <LoginForm />
            </div>
        </div>
    )
}