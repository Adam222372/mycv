"use client"
import styles from "./page.module.css"
import React from "react";

export default function Home() {
    const [hoveredDivId, setHoveredDivId] = React.useState<string | null>(null);

    const handleHover = (event: React.MouseEvent<HTMLDivElement>): void => {
        const hoveredItemId = event.currentTarget.id;
        setHoveredDivId(hoveredItemId);
    }

    const handleMouseLeave = (): void => {
        setHoveredDivId(null);
    };

    return (
        <div className={styles.gridContainer}>
            <div
                id="sectionA"
                className={styles.sectionA}
                onMouseEnter={handleHover}
                style={{
                    display: hoveredDivId && hoveredDivId !== "sectionA" ? "none" : "flex",
                    gridColumn: hoveredDivId === "sectionA" ? "1 / -1" : "1/ span 2", // Stretches the element
                    gridRow: hoveredDivId === "sectionA" ? "1 / -1" : "auto",
                }}
                onMouseLeave={handleMouseLeave}>
                <div>
                    <h1>About me</h1>
                </div>
                <div className={styles.profilePicture}/>
            </div>

            <div
                id="sectionB"
                className={styles.sectionB}
                onMouseEnter={handleHover}
                style={{
                    display: hoveredDivId && hoveredDivId !== "sectionB" ? "none" : "grid",
                    gridColumn: hoveredDivId === "sectionB" ? "1 / -1" : "auto", // Stretches the element
                    gridRow: hoveredDivId === "sectionB" ? "1 / -1" : "auto",    // Stretches the element
                }}
                onMouseLeave={handleMouseLeave}
            >
                <h1>Carrier</h1>
            </div>

            <div
                id="sectionC"
                className={styles.sectionC}
                onMouseEnter={handleHover}
                style={{
                    display: hoveredDivId && hoveredDivId !== "sectionC" ? "none" : "grid",
                    gridColumn: hoveredDivId === "sectionC" ? "1 / -1" : "auto", // Stretches the element
                    gridRow: hoveredDivId === "sectionC" ? "1 / -1" : "2 / span 2",    // Stretches the element
                }}
                onMouseLeave={handleMouseLeave}
            >
                <h1>Education</h1>
            </div>

            <div
                id="sectionD"
                className={styles.sectionD}
                onMouseEnter={handleHover}
                style={{
                    display: hoveredDivId && hoveredDivId !== "sectionD" ? "none" : "grid",
                    gridColumn: hoveredDivId === "sectionD" ? "1 / -1" : "auto", // Stretches the element
                    gridRow: hoveredDivId === "sectionD" ? "1 / -1" : "auto",    // Stretches the element
                }}
                onMouseLeave={handleMouseLeave}
            >
                <h1>Experiences</h1>
            </div>
        </div>
    );
}
