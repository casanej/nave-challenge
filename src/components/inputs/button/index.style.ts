import styled from 'styled-components';

interface ButtonProps {
    color: 'primary' | 'secondary' | 'success' | 'danger' | 'info' | 'dark' | 'light';
}

export const ButtonStyled = styled.button<ButtonProps>`
    background-color: ${props => props.theme.currentPallet.button.dark};
    color: ${props => props.theme.currentPallet.text.light};
    cursor: pointer;

    font-size: 1em;
    line-height: 2.2em;
`