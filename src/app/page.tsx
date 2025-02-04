"use client";
import styles from "./page.module.css";
import React from "react";
import Section from "@/components/Section";

export default function Home() {
    const [clickedIndex, setClickedIndex] = React.useState<string | undefined>(undefined);
    const sections = [
        { id: "sectionA", title: "About Me", description: "", text: "", photo: <img alt={""} className={styles.profilePicture}/> },
        { id: "sectionB", title: "Carrier", description: "Curious about my carrier?", text: ""},
        { id: "sectionC", title: "Education", description: "", text: "" },
        { id: "sectionD", title: "Experiences", description: "", text: ""}
    ];

    function onClick(event: React.MouseEvent) {
        const id = event.currentTarget.id;
        setClickedIndex(id);
    }

    function clickOnCross() {
        setClickedIndex(undefined);
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
                    backBtn={ clickedIndex === section.id }
                    clickOnCross={clickOnCross}
                    text={section.text}
                    photo={section.photo}
                />
            ))}
        </div>
    );
}
