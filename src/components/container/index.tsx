import React, { ReactElement } from 'react'
import { ContainerStyled } from './index.style';

interface Props {
    children: ReactElement | ReactElement[];
    alignVertical?: boolean;
    alignHorizontal?: boolean;
}

export const Container = (props: Props): ReactElement => {
    return (
        <ContainerStyled
            alignVertical={props.alignVertical}
            alignHorizontal={props.alignHorizontal}
        >
            {props.children}
        </ContainerStyled>
    );
};
