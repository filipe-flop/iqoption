import React from "react";
import styles from './AppHeader.module.css';
import logo from '../../assets/logobr.png';

import ThemeToggle from '../../pages/ThemeToggle';

export const AppHeader = () => {
    return (
        <header className={styles.headerDiv}>
             <img src={logo} alt="Logo" />
             <ThemeToggle />
        </header>
    );
}

export default AppHeader