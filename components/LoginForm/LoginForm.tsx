"use client"

import React from "react";
import { useState } from "react";
import { useRouter } from "next/navigation";

import { getRequest } from "@/lib/apiCalls";

import Input from "@/components/Input/Input";
import Button from "@/components/Button/Button";

import styles from "./LoginForm.module.scss";

type User = {
    results: [],
    info: {
        page: number,
        results: number,
        seed: string,
        version: string
    }
}

export default function LoginForm() {
    const router = useRouter();
    const [phone, setPhone] = useState<string>("");
    const [btnLoading, setBtnLoading] = useState<boolean>(false);

    const handleSubmit = async () => {
        const phoneRegex = /^(09\d{9}|9\d{9})$/;
        if (phoneRegex.test(phone)) {
            try {
                setBtnLoading(true);
                const user: User | null =
                    await getRequest<User>('https://randomuser.me/api/?results=1&nat=us');

                if (user) localStorage.setItem("user_info", user.info.seed)

                setBtnLoading(false);
                router.push("/dashboard");

            } catch (error) {
                console.error("Error fetching data:", error);
            }
        } else {
            alert("Please enter a valid phone number!!!");
        }
    }

    return (
        <div className={styles.formWrapper}>
            <Input
                label={"phone number"}
                name={"phone"}
                value={phone}
                onChange={e => setPhone(e.target.value)}
            />
            <Button
                text={"Submit"}
                disabled={false}
                loading={btnLoading}
                onClick={handleSubmit}
            />
        </div>
    )
}