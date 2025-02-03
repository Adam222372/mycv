import React from "react";
import styles from "./Section.module.css";

interface SectionProps {
    id: string;
    title: string;
    description: string;
    onClick: (event: React.MouseEvent) => void;
    expanded: boolean;
    isHidden: boolean;
    backBtn: boolean;
    clickOnCross: () => void;
    text?:string;
}

const Section: React.FC<SectionProps> = ({ id, title, description, onClick, expanded, isHidden, backBtn, clickOnCross, text }) => {
    return (
        <div
            id={id}
            className={`${styles[id]} ${expanded ? styles.expanded : ""} ${isHidden ? styles.hidden : ""}`}
            onClick={onClick}
        >
            <div className={styles.heading}>
                <h1 className={styles.title}>{title}</h1>
                <button onClick={(event) => {
                    event.stopPropagation();
                    clickOnCross();
                }} className={backBtn ? styles.crossButton : styles.hidden}>X
                </button>
            </div>
            <p className={expanded ? styles.hidden : styles.description}>{description}</p>
            <p className={styles.text}>{text}</p>
        </div>
    );
};

export default Section;
