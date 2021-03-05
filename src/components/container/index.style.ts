import styled from 'styled-components';

interface ContainerStyledProps {
    alignVertical?: boolean;
    alignHorizontal?: boolean;
}

export const ContainerStyled = styled.div<ContainerStyledProps>`
    width: 75%;
    height: 100vh;
    margin: 0 auto;
    display: flex;

    background-color: ${props => props.theme.currentPallet.background.primary};

    ${props => props.alignVertical && 'align-items: center;'}
    ${props => props.alignHorizontal && 'justify-content: center;'}
`