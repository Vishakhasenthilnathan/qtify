import React from "react";
import Logo from "../Logo.jsx"
import styles from "./NavBar.module.css"
import SearchBar from "../SearchBar/Search.jsx";
import FbButton from "../Button/FbButton.jsx";

function NavBar(){
    return (
        <nav className={styles.navbar}>
            <Logo/>
            <SearchBar placeholder="Search a album of your choice"/>
            <FbButton text="Give Feedback"/>
        </nav>
    )
}

export default NavBar;