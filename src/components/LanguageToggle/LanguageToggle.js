// LanguageToggle.js
import React from 'react';
import { useLanguage } from '../../pages/LanguageContext';
import styles from './LanguageToggle.module.css';

import ReactCountryFlag from "react-country-flag"

const LanguageToggle = () => {
  const { changeLanguage } = useLanguage();

  return (
    <div className={styles.languageDiv}>
      <button onClick={() => changeLanguage('pt')}>
        <ReactCountryFlag
          countryCode="BR"
          svg
          style={{
              width: '2em',
              height: '2em',
              borderRadius: '50%',
              border: '1px solid #8f9199',
          }}
          title="BR"
          />
      </button>
      <button onClick={() => changeLanguage('en')}>
        <ReactCountryFlag
          countryCode="US"
          svg
          style={{
              width: '2em',
              height: '2em',
              borderRadius: '50%',
              border: '1px solid #8f9199',
          }}
          title="US"
        />
      </button>
      <button onClick={() => changeLanguage('es')}>
        <ReactCountryFlag
          countryCode="ES"
          svg
          style={{
              width: '2em',
              height: '2em',
              borderRadius: '50%',
              border: '1px solid #8f9199',
          }}
          title="ES"
        />
      </button>
    </div>
  );
};

export default LanguageToggle;
