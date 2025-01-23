import styles from "@/app/page.module.css";
import React from "react";

interface Section {
    id: string,
    title: string,
    description: string,
}

export default function Section({id, title, description}: Section) {
    const [clicked, setClicked] = React.useState<[string, boolean]>([id, false]);

    const handleClick = () => {
        setClicked([id, true]);
    }
    const handleBtnHideClick = () => {
        setClicked(["", false]);
    }

    return (
        <div id={id} onClick={handleClick} className={clicked[0] === "" ? styles[id] : }>
            <h1>{title}</h1>
            <h3>{description}</h3>
            <button className={styles.crossButton} onClick={handleBtnHideClick}>X</button>
        </div>
    )
}