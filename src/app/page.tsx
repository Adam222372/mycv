"use client"
import styles from "./page.module.css"
import React from "react";

export default function Home() {
    const [clickedElement, setClickedElement] = React.useState(["", false]);

    const handleClick = (event: React.MouseEvent<HTMLDivElement>): void => {
        const hoveredItemId = event.currentTarget.id;
        setClickedElement();
    }
    const handleMouseLeave = (): void => {
        setClickedElement();
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
            </div>

            <div
                id="sectionB"
                className={styles.sectionB}
                onClick={handleClick}>
                <h1>Carrier</h1>
            </div>

            <div id="sectionC" className={styles.sectionC} onClick={handleClick}>
                <h1>Education</h1>
            </div>

            <div
                id="sectionD"
                className={styles.sectionD} onClick={handleClick}>
                <h1>Experiences</h1>
            </div>
        </div>
    );
}
