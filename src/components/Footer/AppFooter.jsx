import React from "react";
import styles from './AppFooter.module.css';

import Clock from "../Clock/Clock";
import LanguageToggle from '../LanguageToggle/LanguageToggle';
import SupportButton from "../SupportButton/SupportButton";

export const AppFooter = () => {
    return (
        <footer className={styles.appFooter}>
            <div>
                {/* <p>&copy; 2023</p> */}
                <LanguageToggle />
            </div>
            <div className={styles.containerRight}>
                <div className={styles.hora}>
                    <Clock />
                </div>
                <div className={styles.supButton}>
                    <SupportButton />
                </div>
            </div>
        </footer>
    );
}

export default AppFooter;