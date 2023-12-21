// LanguageContext.js
import { createContext, useContext, useEffect, useState } from 'react';
import { IntlProvider } from 'react-intl';

const LanguageContext = createContext();

export const useLanguage = () => {
  return useContext(LanguageContext);
};

export const LanguageProvider = ({ children }) => {
  const storedLanguage = localStorage.getItem('language');
  const [language, setLanguage] = useState(storedLanguage || 'pt');

  const changeLanguage = (newLanguage) => {
    setLanguage(newLanguage);
  };

  useEffect(() => {
    // Atualizar o localStorage sempre que o idioma mudar
    localStorage.setItem('language', language);
  }, [language]);

  const lang = {
    language,
    changeLanguage,
  };

  const messages = {
    pt: {
      sidebarNavio: 'NAVIO',
      sidebarPatio: 'PÁTIO',
      sidebarCFS: 'CFS',
      sidebarDepot: 'DEPOT',
      sidebarGate: 'GATE',
      content: 'Olá, mundo!',
      clock: 'HORA ATUAL:',
      supButton: 'SUPORTE'
    },
    en: {
      sidebarNavio: 'VESSEL',
      sidebarPatio: 'YARD',
      sidebarCFS: 'CFS',
      sidebarDepot: 'DEPOT',
      sidebarGate: 'GATE',
      content: 'Hello, world!',
      clock: 'CURRENT TIME:',
      supButton: 'SUPPORT'
    },
    // es: {
    //     sidebarNavio: 'BARCO',
    //     sidebarPatio: 'PATIO',
    //     sidebarCFS: 'CFS',
    //     sidebarDepot: 'DEPOT',
    //     sidebarGate: 'GATE',
    //     content: '¡Hola, mundo!',
    // },
  };

  const intlConfig = {
    locale: language,
    messages: messages[language],
  };

  return (
    <LanguageContext.Provider value={lang}>
      <IntlProvider {...intlConfig}>{children}</IntlProvider>
    </LanguageContext.Provider>
  );
};
