import styles from "@/app/page.module.css";
import React from "react";

interface Section {
    id: string,
    title: string,
    description: string,
    image: string,
}


export default function Section({id, title, description, image}: Section) {
    const [clicked, setClicked] = React.useState([id, false]);
    const [hideBtn, setHideBtn] = React.useState(false);

    const handleClick = () => {
        setClicked([id, true]);
    }
    const handleBtnHideClick = () => {

    }

    return (
        <div id={id} onClick={handleClick} className={}>
            <div>
                <h1>{title}</h1>
                <h3>{description}</h3>
            </div>
            <div className={styles.profilePicture}/>
            <button className={styles.crossButton} onClick={handleBtnHideClick}>X</button>
        </div>
    )
}