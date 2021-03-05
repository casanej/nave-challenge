import React, { ReactElement } from 'react'
import { ButtonStyled } from './index.style'

interface Props {
    color?: 'primary' | 'secondary' | 'success' | 'danger' | 'info' | 'dark' | 'light';
    children: string | React.ReactElement | React.ReactElement[];
    onClick: () => void;
}

export const Button = (props: Props): ReactElement => {
    return (
        <ButtonStyled
            color={props.color || 'dark'}
            onClick={props.onClick}
        >
            {props.children}
        </ButtonStyled>
    );
};
