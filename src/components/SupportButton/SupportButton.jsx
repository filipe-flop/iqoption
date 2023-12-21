import React from "react";

import styles from './SupportButton.module.css';
import { FormattedMessage } from 'react-intl';
import { PiChatsCircleFill } from "react-icons/pi";

export const SupportButton = () => {
    return (
        <button className={styles.supButtonStyle}>
            <div className={styles.supButtonIcon}>
                <PiChatsCircleFill size={14}/>
            </div>
            <div className={styles.supButtonText}>
                <FormattedMessage id="supButton"/>
            </div>
        </button>
    );
}

export default SupportButton;