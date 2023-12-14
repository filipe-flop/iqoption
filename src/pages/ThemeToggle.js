// ThemeToggle.js
import React from 'react';
import { useTheme } from './ThemeContext';
import { StyledButton } from './ThemeToggleStyles';
import { FaSun, FaMoon } from 'react-icons/fa';

const ThemeToggle = () => {
  const { isDarkTheme, toggleTheme } = useTheme();

  return (
    <StyledButton isDarkTheme={isDarkTheme} onClick={toggleTheme}>
      {isDarkTheme ? <FaSun size={20}/> : <FaMoon size={20}/>}
    </StyledButton>
  );
};

export default ThemeToggle;
