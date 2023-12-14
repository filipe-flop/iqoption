// StyledComponents.js
import styled, { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  :root {
    --container-content-background-light: #ffffff;
    --container-content-text-light: #000000;
    --container-content-background-dark: #2a3148;
    --container-content-text-dark: #ffffff;
    --border-color: #8f9199;
  }
`;

export const ContainerGeral = styled.div`
  max-height: 100vh;
  overflow: hidden;
  transition: background-color 0.3s ease;
  background: ${({ isDarkTheme }) =>
    isDarkTheme
      ? 'var(--container-content-background-dark)'
      : 'var(--container-content-background-light)'};
  color: ${({ isDarkTheme }) =>
    isDarkTheme
      ? 'var(--container-content-text-dark)'
      : 'var(--container-content-text-light)'};
`;

export const ContainerBody = styled.div`
  height: 90vh;
  display: flex;
  flex-direction: row;
`;

export const ContainerSidebar = styled.div`
  height: max-content;
`;

export const ContainerContent = styled.div`
  flex: 1;
  border-left: 1px solid var(--border-color);
`;

export const ContainerFooter = styled.div`
  flex-shrink: 0;
`;
