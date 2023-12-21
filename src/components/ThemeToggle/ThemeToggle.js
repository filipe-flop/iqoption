import React from 'react';
import { useTheme } from '../../context/ThemeContext';
import Switch from '@mui/material/Switch';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { FaMoon } from "react-icons/fa";
import { FaSun } from "react-icons/fa6";

const ThemeToggle = () => {
  const { isDarkTheme, toggleTheme } = useTheme();

  const theme = createTheme({
    palette: {
      mode: isDarkTheme ? 'dark' : 'light',
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <Switch
        checked={isDarkTheme}
        onChange={toggleTheme}
        color="default"
        icon={<FaSun size={19}/>}
        checkedIcon={<FaMoon size={19} color='white' style={{ transform: 'scaleX(-1)' }} />}
        size="26"
      />
    </ThemeProvider>
  );
};

export default ThemeToggle;
