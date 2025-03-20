import {Funnel_Display} from "next/font/google";
import "./globals.css";
import React from "react";
import Link from "next/link";

const funelDisplay = Funnel_Display({
    subsets: ['latin'],
    weight: ['400']
})

export default function RootLayout({
                                      children
                                   }: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" className={funelDisplay.className}>
        <body>
        <nav className={"mx-8 flex justify-between items-center"}>
            <Link href={"/"}><h1 className={"text-3xl m-8"}>Adam Holeček</h1></Link>
            <ul className={"flex space-x-4 "}>
                <Link href={"/"}><li className={"p-5"}>Home</li></Link>
                <Link href={"/contact"} className={"p-5"}><li>Contact me</li></Link>
            </ul>
        </nav>
        {children}
        </body>
        </html>
    );
}
