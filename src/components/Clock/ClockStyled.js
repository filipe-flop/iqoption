// FooterStyles.js
import styled from 'styled-components';

export const ClockGeral = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: row;
`;

export const ClockLabel = styled.div`
    color: ${({ isDarkTheme }) => 
        (isDarkTheme ? '#8f9199' : '#000000')};
`;

export const ClockTime = styled.div`
    color: white;
    padding: 5px;
`;

export const ClockTimezone = styled.div`
    color: ${({ isDarkTheme }) => 
        (isDarkTheme ? '#8f9199' : '#000000')};
`;

