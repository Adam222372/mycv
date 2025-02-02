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
}

const Section: React.FC<SectionProps> = ({ id, title, description, onClick, expanded, isHidden, backBtn, clickOnCross }) => {
    return (
        <div
            id={id}
            className={`${styles[id]} ${expanded ? styles.expanded : ""} ${isHidden ? styles.hidden : ""}`}
            onClick={onClick}
        >
            <h1 className={styles.title}>{title}</h1>
            <p className={styles.description}>{description}</p>
            <button onClick={(event) =>{
                event.stopPropagation();
                clickOnCross();
            }} className={`${backBtn ? styles.crossButton : styles.hidden}`}>X</button>
        </div>
    );
};

export default Section;
