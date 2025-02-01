"use client"
import styles from "./page.module.css"
import React from "react";
import Section from "@/components/Section";
export default function Home() {
    const [clickedIndex, setClickedIndex] = React.useState<string | undefined>(undefined);

    function onClick(event: React.MouseEvent) {
        const id = event.currentTarget.id;
        setClickedIndex(id);
    }

    return (
        <div className={styles.gridContainer}>
            {["sectionA", "sectionB", "sectionC", "sectionD"].map(id => (
                <Section
                    key={id}
                    id={id}
                    title={id.replace("section", "")}
                    description=""
                    onClick={onClick}
                    className={clickedIndex === null || clickedIndex === id ? styles.expanded : styles.hidden}
                />
            ))}
        </div>
    );
}
