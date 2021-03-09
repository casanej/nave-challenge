import { ModalButton } from '../../stores/index';
import styled from 'styled-components';

interface Props {
    id: string;
    open: boolean;
    alignCenter?: boolean;
    size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
}

interface ButtonProps {
    readonly type: ModalButton['type'];
}

function getMaxWidth(size: string) {
    switch (size) {
    case 'xs':
        return '575px';
    case 'sm':
        return '767px';
    case 'md':
        return '991px';
    case 'lg':
        return '1200px';
    case 'xl':
        return '1700px';
    default:
        return '575px';
    }
}

const StyledModalBackground = styled.div<Props>` 
    ${props => props.open && `
        opacity: 1;
        visibility: visible;
        transform: scale(1);
        transition: visibility 0s linear 200ms, opacity 200ms 0s, transform 200ms;
    `}

    ${props => !props.open && `
        visibility: hidden;
        transition: visibility 0s linear .5s, opacity .5s 0s, transform .5s;
    `}
    
    display: flex;
    justify-content: center;
    align-items: center;
    position: fixed;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(52, 41, 55, 0.5);
    z-index: 999999;
    overflow: hidden;

`;

const StyledModal = styled.div<Props>`
    ${props => props.open && `
        animation: moveUp .5s cubic-bezier(0.165, 0.840, 0.440, 1.000) forwards;
    `}

    ${props => !props.open && `
        animation: moveDown .5s cubic-bezier(0.165, 0.840, 0.440, 1.000) forwards;
    `}

    ${props => props.alignCenter && `
        display: flex;
        align-items: center;
        justify-content: center;
    `}

    position: absolute;
    background: ${props => props.theme.currentPallet.background.primary};
    border: 2px solid darkgray;
    display: flex;
    flex-direction: column;
    color: ${props => props.theme.currentPallet.text.primary};
    box-shadow: 6px 6px 10px rgba(0, 0, 0, 0.25);
    border-radius: 5px;
    box-sizing: border-box;
    padding: 20px;
    min-width: 200px;
    max-width: ${props => getMaxWidth(props.size || 'md')};
    min-height: 200px;
    max-height: 90%;
    width: 100%;
    overflow: auto;

    @keyframes moveUp {
        0% {
            transform: translateY(1500px);
        }
        100% {
            transform: translateY(0);
        }
    }
 
    @keyframes moveDown {
        0% {
            transform: translateY(0px);
        }
        100% {
            transform: translateY(1500px);
        }
    }
`;

const StyledModalHeader = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;

    font-size: 2em;
    font-weight: bold;
`;
const StyledModalBody = styled.div`
    display: flex;
    flex: 1;
    line-height: 1.5em;
    font-size: 1.3em;
    margin: 20px 0;
`;
const StyledModalFooter = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: flex-end;

    div {
        margin: 0 2.5px;
    }
`;

const StyledModalButton = styled.div<ButtonProps>`
    ${props => props.type === 'error' && `
        background-color: red;
        color: white;
    `}

    ${props => props.type === 'info' && `
        background-color: lightblue;
        color: black;
    `}

    ${props => props.type === 'success' && `
        background-color: green;
        color: white;
    `}

    ${props => props.type === 'warning' && `
        background-color: orange;
        color: black;
    `}

    ${props => props.type === 'dark' && `
        background-color: black;
        color: white;
    `}

    ${props => props.type === 'light' && `
        background-color: white;
        color: black;
    `}

    padding: 0 10px;
    width: fit-content;
    min-width: 150px;
    max-width: 450px;
    line-height: 2.5em;
    font-size: 1em;
    font-weight: bold;
    text-align: center;
    border-radius: 5px;
    cursor: pointer;
`;

export { StyledModal, StyledModalBackground, StyledModalHeader, StyledModalBody, StyledModalFooter, StyledModalButton };
