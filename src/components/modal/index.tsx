import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { ModalButton } from '../../stores/index';
import { NaverCardActionButton } from '../navers-card/index.style';
import { StyledModal, StyledModalBackground, StyledModalFooter, StyledModalHeader, StyledModalBody, StyledModalButton } from './index.style';

interface Props {
    children: React.ReactNode;
    open: boolean;
    header?: React.ReactNode;
    size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
    buttons?: ModalButton[];
    onClose: () => void;
    alignCenter?: boolean;
}

const Modal = (props: Props) => {
    const handleClose = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
        const target = e.target as HTMLDivElement;

        if (target.id === 'modalBlackout') props.onClose();
    };

    const handleFunction = (execFunc: () => void) => {
        execFunc();
        props.onClose();
    }

    return (
        <StyledModalBackground
            id='modalBlackout'
            open={props.open}
            onClick={handleClose}
        >
            <StyledModal
                id='modal'
                alignCenter={props.alignCenter}
                open={props.open}
                size={props.size}
            >
                <StyledModalHeader>
                    <div>{props.header}</div>
                    <NaverCardActionButton><FontAwesomeIcon icon={faTimes} onClick={props.onClose} /></NaverCardActionButton>
                </StyledModalHeader>
                <StyledModalBody> {props.children} </StyledModalBody>
                {
                    props.buttons &&
                    <StyledModalFooter>
                        {
                            props.buttons.map((button, index:number) => <StyledModalButton key={index} type={button.type} onClick={() => handleFunction(button.function || props.onClose)}>{button.text}</StyledModalButton>)
                        }
                    </StyledModalFooter>
                }
            </StyledModal>
        </StyledModalBackground>
    );
};

export { Modal };
