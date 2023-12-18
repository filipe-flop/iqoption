import React, { useState, useEffect } from 'react';
import styles from './Clock.module.css';

import { FormattedMessage } from 'react-intl';
import { useLanguage } from '../../context/LanguageContext';

const Clock = () => {
  const { language } = useLanguage();
  const [dateTime, setDateTime] = useState(getCurrentDateTime(language));

  useEffect(() => {
    const intervalId = setInterval(() => {
      setDateTime(getCurrentDateTime(language));
    }, 1000);

    return () => clearInterval(intervalId);
  }, [language]);

  function getCurrentDateTime(lang) {
    const now = new Date();
    const dateOptions = { day: 'numeric', month: 'long' };
    const timeOptions = {
      hour: 'numeric',
      minute: '2-digit',
      second: '2-digit',
      // hour12: true,
    };
  
    const formattedDate = formatDateTime(now, dateOptions, lang);
    const formattedTime = formatDateTime(now, timeOptions, lang);
  
    return `${formattedDate}, ${formattedTime}`;
  }
  
  function formatDateTime(date, options, lang) {
    const formatter = new Intl.DateTimeFormat(lang, options);
    return formatter.format(date);
  }

  return (
    <div className={styles.clock}>
      <div className={styles.clockLabel}>
        <FormattedMessage id="clock"/>
      </div>
      <div className={styles.clockTime}>
        {dateTime}
      </div>
      <div className={styles.clockTimezone}>
        (UTC-3)
      </div>
    </div>
  );
};

export default Clock;
