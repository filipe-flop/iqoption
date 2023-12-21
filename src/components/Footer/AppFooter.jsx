// AppFooter.js
import React from "react";
import {
  FooterContainer,
  RightContainer,
  SupportButtonContainer,
  ClockContainer,
} from './AppFooterStyled';
import Clock from "../Clock/Clock";
import LanguageToggle from '../LanguageToggle/LanguageToggle';
import SupportButton from "../SupportButton/SupportButton";
import { useTheme } from '../../context/ThemeContext';

const AppFooter = () => {
    const { isDarkTheme } = useTheme();

  return (
    <FooterContainer isDarkTheme={isDarkTheme}>
      <div>
        <LanguageToggle />
      </div>
      <RightContainer>
        <ClockContainer>
          <Clock />
        </ClockContainer>
        <SupportButtonContainer>
          <SupportButton />
        </SupportButtonContainer>
      </RightContainer>
    </FooterContainer>
  );
}

export default AppFooter;
