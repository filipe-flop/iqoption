import styled from 'styled-components';

export const StyledHeader = styled.header`
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 24px;
    font-weight: bold;
    background: ${({ isDarkTheme }) => (isDarkTheme ? '#2a3148' : '#F96302')};
    border-bottom: 1px solid #8f9199;
    height: 5vh;
    padding-left: 10px;
    padding-right: 10px;
    padding-top: 5px;
`;