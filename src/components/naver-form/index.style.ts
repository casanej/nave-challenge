import styled from 'styled-components';

export const ContainerNaveForm = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    background-color: ${props => props.theme.currentPallet.background.primary};
    width: 100%;
    height: 100vh;
`

export const NaverFormHeader = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    cursor: pointer;

    div {
        margin-left: 10px;
    }
`

export const NaverFormBody = styled.div`
    display: grid;
    grid-template-columns: 6fr 6fr;

    div:nth-child(2n+1) {
        margin-right: 10px;
    }
`

export const NaverFormFooter = styled.div`

`
