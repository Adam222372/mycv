"use client"
import styles from "./page.module.css"
import React from "react";
import Section from "@/components/Section";
export default function Home() {
    return (
        <div className={styles.gridContainer}>
            <Section id={"sectionA"} title={"About me"} description={""}></Section>
            <Section id={"sectionB"} title={"Carrier"} description={""}></Section>
            <Section id={"sectionC"} title={"Education"} description={""}></Section>
            <Section id={"sectionD"} title={"Experiences"} description={""}></Section>
        </div>
    );
}
