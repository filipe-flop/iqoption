import React, { useState, useEffect } from 'react';
import { ClockGeral, ClockLabel, ClockTime, ClockTimezone } from './ClockStyled';

import { FormattedMessage } from 'react-intl';
import { useLanguage } from '../../context/LanguageContext';
import { useTheme } from '../../context/ThemeContext';

const Clock = () => {
  const { language } = useLanguage();
  const [dateTime, setDateTime] = useState(getCurrentDateTime(language));
  const { isDarkTheme } = useTheme();

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
    <ClockGeral >
      <ClockLabel isDarkTheme={isDarkTheme}>
        <FormattedMessage id="clock"/>
      </ClockLabel>
      <ClockTime>
        {dateTime}
      </ClockTime>
      <ClockTimezone isDarkTheme={isDarkTheme}>
        (UTC-3)
      </ClockTimezone>
    </ClockGeral>
  );
};

export default Clock;
