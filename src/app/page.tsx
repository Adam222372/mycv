"use client"
import styles from "./page.module.css"
import React from "react";

export default function Home() {
    const [clickedElement, setClickedElement] = React.useState<[string, boolean]>(["", false]);

    const handleClick = (event: React.MouseEvent<HTMLDivElement, MouseEvent>): void => {
        const clickedDiv = event.currentTarget.id;
        setClickedElement([clickedDiv, true]);
    }
    const handleCrossButtonClick = (): void => {
        setClickedElement(["", false]);
    };

    return (
        <div className={styles.gridContainer}>

            <div
                id="sectionA"
                className={styles.sectionA}
                onClick={handleClick}>
                <div>
                    <h1>About me</h1>
                </div>
                <div className={styles.profilePicture}/>
                <button className={styles.crossButton} onClick={handleCrossButtonClick} style={{
                    display: clickedElement[1] && clickedElement[0] === "sectionA" ? "block" : "none",
                }}
                >X</button>
            </div>

            <div
                id="sectionB"
                className={styles.sectionB}
                onClick={handleClick}>
                <h1>Carrier</h1>
                <button className={styles.crossButton}>X</button>
            </div>

            <div id="sectionC" className={styles.sectionC} onClick={handleClick}>
                <h1>Education</h1>
                <button className={styles.crossButton}>X</button>
            </div>

            <div
                id="sectionD"
                className={styles.sectionD} onClick={handleClick}>
                <h1>Experiences</h1>
                <button className={styles.crossButton}>X</button>
            </div>
        </div>
    );
}
