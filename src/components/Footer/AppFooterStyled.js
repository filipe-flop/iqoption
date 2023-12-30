// FooterStyles.js
import styled from 'styled-components';

export const FooterContainer = styled.footer`
  background: ${({ isDarkTheme }) => 
        (isDarkTheme ? '#1a202d' : '#999999')};
  color: #8f9199;
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-height: 3vh;
  font-size: 12px;
  padding-left: 10px;
  padding-right: 55px;
`;

export const RightContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const SupportButtonContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: 20px;
`;

export const ClockContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-left: 10px;
`;
