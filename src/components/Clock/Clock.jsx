import React, { useState, useEffect } from 'react';
import styles from './Clock.module.css';

const Clock = () => {
  const [dateTime, setDateTime] = useState(getCurrentDateTime());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setDateTime(getCurrentDateTime());
    }, 1000);

    return () => clearInterval(intervalId);

  }, []);

  function getCurrentDateTime() {
    const now = new Date();
    const dateOptions = { day: 'numeric', month: 'long' };
    const timeOptions = { hour: '2-digit', minute: '2-digit', second: '2-digit' };

    const formattedDate = now.toLocaleDateString('pt-BR', dateOptions);
    const formattedTime = now.toLocaleTimeString('pt-BR', timeOptions);

    return `${formattedDate}, ${formattedTime}`;
  }

  return (
    <div className={styles.clock}>
      <p>{dateTime}</p>
    </div>
  );
};

export default Clock;
