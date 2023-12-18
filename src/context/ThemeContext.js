// ThemeContext.js
import { createContext, useContext, useEffect, useState } from 'react';

const ThemeContext = createContext();

export const useTheme = () => {
  return useContext(ThemeContext);
};

export const ThemeProvider = ({ children }) => {
  // Verifica se há um tema salvo no localStorage, caso contrário, define como 'dark'
  const storedTheme = localStorage.getItem('theme') || 'dark';
  const [isDarkTheme, setIsDarkTheme] = useState(storedTheme === 'dark');

  const toggleTheme = () => {
    setIsDarkTheme((prevTheme) => {
      const newTheme = !prevTheme ? 'dark' : 'light';
      localStorage.setItem('theme', newTheme);
      return !prevTheme;
    });
  };

  useEffect(() => {
    // Atualizar o localStorage sempre que o tema mudar
    localStorage.setItem('theme', isDarkTheme ? 'dark' : 'light');
  }, [isDarkTheme]);

  const theme = {
    isDarkTheme,
    toggleTheme,
  };

  return (
    <ThemeContext.Provider value={theme}>
      {children}
    </ThemeContext.Provider>
  );
};
