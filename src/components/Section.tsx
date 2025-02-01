import styles from "@/app/page.module.css";
import React from "react";


interface Section {
    id: string,
    title: string,
    description: string,
    onClick: (event: React.MouseEvent) => void,
}

export default function Section({id, title, description, onClick}: Section) {

    return (
        <div onClick={onClick} className={styles[id]}>
            <h1>{title}</h1>
            <h3>{description}</h3>
        </div>


    )
}