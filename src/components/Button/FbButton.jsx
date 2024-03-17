import React from "react";
import styles from "./FbButton.module.css"

function FbButton({text}){
    return (
            <button className={styles.fbButton}>{text}</button>
    )
}

export default FbButton;