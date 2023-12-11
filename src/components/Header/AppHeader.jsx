import React from "react";
import styles from './AppHeader.module.css';
import logo from '../../assets/logobr.png';

export const AppHeader = () => {
    return (
        <header className={styles.headerDiv}>
             <img src={logo} alt="Logo" />
        </header>
    );
}

export default AppHeader