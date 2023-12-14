// ThemeToggleStyles.js
import styled from 'styled-components';
import { FaSun, FaMoon } from 'react-icons/fa';

export const StyledButton = styled.button`
  background-color: ${({ isDarkTheme }) => (isDarkTheme ? '#2a3148' : '#ffffff')};
  color: ${({ isDarkTheme }) => (isDarkTheme ? '#ffffff' : '#000000')};
  border: 1px solid #8f9199;
  border-radius: 50%;
  
  cursor: pointer;
  transition: background-color 0.3s ease, color 0.3s ease;

  &:hover {
    background-color: ${({ isDarkTheme }) =>
      isDarkTheme ? '#394260' : '#f2f2f2'};
    color: ${({ isDarkTheme }) => (isDarkTheme ? '#ffffff' : '#000000')};
  }
`;

// export const SunIcon = styled(FaSun)`
//   font-size: 15px;
// `;

// export const MoonIcon = styled(FaMoon)`
//   font-size: 15px;
// `;
