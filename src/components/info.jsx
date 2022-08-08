import React from "react"
import styles from "./info.module.css"
import Photo from "../assets/profile.jpg"
import Logo from "../assets/FBW-Color-Light.svg"

export default function Info() {
    return (
        <div className={styles.container}>
            <header className={styles.header}>
                <img className={styles.profile} src={Photo} />
            </header>
            <div className={styles.infobox}>
                <h1 className={styles.name}>Valastiri</h1>
                <p className={styles.title}>Marketing</p>
                <p className={styles.title}>Documents Maintainer</p>
                <div className={styles.contacts}>
                    <a
                        target="_blank"
                        rel="noopener norferrer"
                        className={styles.button}
                        href="https://github.com/Valastiri"
                    >
                        GitHub
                    </a>
                    <a
                        target="_blank"
                        rel="noopener norferrer"
                        className={styles.button}
                        href="https://flybywiresim.com"
                    >
                        FBW Website
                    </a>      
                </div>
                <img className={styles.logo} src={Logo} />
            </div>
        </div>
    )
}