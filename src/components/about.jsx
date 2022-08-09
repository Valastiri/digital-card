import React from "react"
import styles from "./content.module.css"

export default function About() {
    return (
        <main className={styles.main}>
            <h2 className={styles.title}>About</h2>
            <p className={styles.content}>
                I was originally invited to join the FlyByWire organization as part of the Media Team back in September 2020.
                Alongside marketing, I also now manage the FlyByWire documentation website
                to assist our end-users and provide a knowledge base for all flight sim enthusiasts.
            </p>
        </main>
    )
}