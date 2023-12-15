// LanguageToggle.js
import React from 'react';
import { useLanguage } from './LanguageContext';

const LanguageToggle = () => {
  const { changeLanguage } = useLanguage();

  return (
    <div>
      <button onClick={() => changeLanguage('pt')}>PT</button>
      <button onClick={() => changeLanguage('en')}>EN</button>
      <button onClick={() => changeLanguage('es')}>ES</button>
    </div>
  );
};

export default LanguageToggle;
