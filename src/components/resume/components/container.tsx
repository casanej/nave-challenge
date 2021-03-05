import React, { useEffect } from 'react'
import styled from 'styled-components';

interface Props {
    children: React.ReactElement | React.ReactElement[];
}

const Container = (props: Props) => {
    return (
        <ContainerStyled> {props.children} </ContainerStyled>
    );
};

const ContainerStyled = styled.div`
    width: 67%;
    margin: 0 auto;
`

export { Container };
