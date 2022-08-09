import React from "react"
import styles from "./footer.module.css"
import Moderator from "../assets/Tail-Moderator.png"
import Developer from "../assets/Tail-Developer.png"
import Media from "../assets/Tail-Media.png"

export default function Footer() {
    return (
        <footer className={styles.footer}>
            <div className={styles.title}>
                <p>Discord</p>
                <p>Roles</p>
            </div>
            <div className={styles.tailSection}>
                <img src={Moderator} className={styles.tail} />
                <img src={Developer} className={styles.tail} />
                <img src={Media} className={styles.tail} />
            </div>
        </footer>
    )
}