'use client';

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

import styles from "./DashboardPage.module.scss";

export default function DashboardPage() {
    const router = useRouter();
    const [authorized, setAuthorized] = useState<boolean | null>(null);

    useEffect(() => {
        const userInfo = localStorage.getItem("user_info");
        if (!userInfo) {
            router.push("/auth");
        } else {
            setAuthorized(true);
        }
    }, []);

    if (authorized === null) {
        return null;
    }

    return (
        <div className={styles.dashboardWrapper}>
            <p>Welcome to the dashboard!</p>
        </div>
    );
}
