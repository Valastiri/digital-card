import React from "react"
import styles from "./content.module.css"

export default function About() {
    return (
        <main className={styles.main}>
            <h2 className={styles.title}>About</h2>
            <p className={styles.content}>
                I originally joined the FlyByWire organization as part of the Media Team.
                Alongside my marketing responsibilities, I also now manage our supporting documentation
                to assist our end-users and provide a knowledge base for all flight sim enthusiasts.
            </p>
        </main>
    )
}