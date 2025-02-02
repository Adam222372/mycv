import React from "react";
import styles from "./Section.module.css";

interface SectionProps {
    id: string;
    title: string;
    description: string;
    onClick: (event: React.MouseEvent) => void;
    expanded: boolean;
    isHidden: boolean;
}

const Section: React.FC<SectionProps> = ({ id, title, description, onClick, expanded, isHidden }) => {
    return (
        <div
            id={id}
            className={`${styles[id]} ${styles.section} ${expanded ? styles.expanded : ""} ${isHidden ? styles.hidden : ""}`}
            onClick={onClick}
        >
            <h2>{title}</h2>
            <p>{description}</p>
        </div>
    );
};

export default Section;
