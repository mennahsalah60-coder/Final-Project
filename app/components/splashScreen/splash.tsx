'use client';

import { useEffect, useState } from "react";
import logo from '../../../public/Logo.png'
import Image from "next/image";
import "./splash.css";

export default function SplashScreen({
    children,
}: {
    children: React.ReactNode;
}) {

    const [hide, setHide] = useState(false);
    const [showSplash, setShowSplash] = useState(true);

    useEffect(() => {
        const timer1 = setTimeout(() => {
            setHide(true);
        }, 2000);

        const timer2 = setTimeout(() => {
            setShowSplash(false);
        }, 2800);

        return () => {
            clearTimeout(timer1);
            clearTimeout(timer2);
        };
    }, []);

    return (
        <>
            {showSplash && (
                <div className={`splash ${hide ? "hide" : ""}`}>
                    <Image src={logo} alt="" />
                    {/* <h1>Ecobazar</h1> */}
                </div>
            )}

            {children}
        </>
    );
}