import React from "react";
import styles from './AppFooter.module.css';

import Clock from "../Clock/Clock";

export const AppFooter = () => {
    return (
        <footer className={styles.appFooter}>
            <div>
                <p>&copy; 2023</p>
            </div>
            <div className={styles.hora}>
                <p>HORA ATUAL:  </p>
                <Clock />
            </div>
        </footer>
    );
}

export default AppFooter;