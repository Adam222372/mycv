import styles from "@/app/page.module.css";
import React from "react";
import {motion} from "motion/react"


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
        setClicked(["", !clicked[1]]);
    }

    return (


        <motion.div onClick={handleClick} className={styles[id]} animate={{
            gridColumn: clicked[1] ? '1 / -1' : styles.id,
            gridRow: clicked[1] ? '1 / -1' : styles.id,
        }} transition={{duration: 0.5}}>
            <h1>{title}</h1>
            <h3>{description}</h3>
            <button className={styles.crossButton} onClick={handleBtnHideClick}>X</button>


        </motion.div>


    )
}