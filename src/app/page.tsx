"use client"
import styles from "./page.module.css"
import React from "react";
import Section from "@/components/Section";
export default function Home() {
    const [clickedIndex, setClickedIndex] = React.useState<string | undefined>(undefined);

    function onClick(event: React.MouseEvent<HTMLButtonElement>) {
        const id = event.currentTarget.id;
        setClickedIndex(id);
    }

    return (
        <div className={styles.gridContainer}>
            <Section id={"sectionA"} title={"About me"} description={""} onClick={onClick}/>
            <Section id={"sectionB"} title={"Carrier"} description={""} onClick={onClick}></Section>
            <Section id={"sectionC"} title={"Education"} description={""} onClick={onClick}></Section>
            <Section id={"sectionD"} title={"Experiences"} description={""} onClick={onClick}></Section>
        </div>
    );
}
