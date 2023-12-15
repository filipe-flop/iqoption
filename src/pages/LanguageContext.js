// ThemeContext.js
import { createContext, useContext, useState, useMemo } from 'react';
import { IntlProvider } from 'react-intl';

const LanguageContext = createContext();

export const useLanguage = () => {
  return useContext(LanguageContext);
};

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState('pt');

  const changeLanguage = (newLanguage) => {
    setLanguage(newLanguage);
  };

  const lang = {
    language,
    changeLanguage,
  };

  const messages = {
    pt: {
        content: 'Olá, mundo!',
    },
    en: {
        content: 'Hello, world!',
    },
    es: {
        content: '¡Hola, mundo!',
    },
  };

  const intlConfig = {
    locale: language,
    messages: messages[language],
  };

  const intlProviderValue = useMemo(() => {
    return { ...lang, ...intlConfig };
  }, [lang, intlConfig]);

  return (
    <LanguageContext.Provider value={lang}>
      <IntlProvider {...intlConfig}>{children}</IntlProvider>
    </LanguageContext.Provider>
  );
};
