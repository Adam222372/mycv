"use client";
import styles from "./page.module.css";
import React from "react";
import Section from "@/components/Section";

export default function Home() {
    const [clickedIndex, setClickedIndex] = React.useState<string | undefined>(undefined);

    const sections = [
        { id: "sectionA", title: "Title A", description: "Description for Section A" },
        { id: "sectionB", title: "Title B", description: "Description for Section B" },
        { id: "sectionC", title: "Title C", description: "Description for Section C" },
        { id: "sectionD", title: "Title D", description: "Description for Section D" }
    ];

    function onClick(event: React.MouseEvent) {
        const id = event.currentTarget.id;
        setClickedIndex((prev) => (prev === id ? undefined : id)); // Toggle expansion
    }

    return (
        <div className={styles.gridContainer}>
            {sections.map((section) => (
                <Section
                    key={section.id}
                    id={section.id}
                    title={section.title}
                    description={section.description}
                    onClick={onClick}
                    expanded={clickedIndex === section.id}
                    isHidden={clickedIndex !== undefined && clickedIndex !== section.id}
                />
            ))}
        </div>
    );
}
