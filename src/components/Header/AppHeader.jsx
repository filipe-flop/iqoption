import React from "react";
// import styles from './AppHeader.module.css';
import { StyledHeader } from "./AppHeaderStyled";
import logo from '../../assets/logobr.png';

import ThemeToggle from '../ThemeToggle/ThemeToggle';
// import LanguageToggle from '../LanguageToggle/LanguageToggle';
import { useTheme } from '../../context/ThemeContext';

export const AppHeader = () => {

    const { isDarkTheme } = useTheme();
    
    return (
        <StyledHeader isDarkTheme={isDarkTheme}>
             <img src={logo} style={{maxHeight:'75%'}}alt="Logo" />
             <ThemeToggle />
             {/* <LanguageToggle /> */}
        </StyledHeader>
    );
}

export default AppHeader