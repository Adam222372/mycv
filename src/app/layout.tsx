import {Funnel_Display} from "next/font/google";
import "./globals.css";
import React from "react";


//const [preferedTheme, setTheme] = useState("dark");

const funelDisplay = Funnel_Display({
    subsets: ['latin'],
    weight: ['400']
})
/*
const handleClick = () => {
  window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', event => {
    const newColorScheme = event.matches ? "dark" : "light";
  });
}*/

export default function RootLayout({
                                      children
                                   }: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" className={funelDisplay.className}>
        <body>
        <nav className={"mx-8 flex justify-between items-center"}>
            <h1>Adam Holeček</h1>
            <ul className={"flex space-x-6"}>
                <li>Home</li>
                <li>Contact me</li>
            </ul>
        </nav>
        {children}
        </body>
        </html>
    );
}
