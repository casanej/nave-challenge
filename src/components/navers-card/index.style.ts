import styled from 'styled-components';

export const NaverCardStyle = styled.div<{ fullscreen?: boolean; }>`
    display: flex;
    flex-direction: column;

    width: 20rem;
    height: 500px;
    margin: 0 10px;

    ${props => props.fullscreen && `
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100vh;
        margin: 0;
        justify-content: center;
        align-items: center;
        background-color: rgba(100, 100, 100, .75);
        z-index: 9999;

        ${NaverCardContent} {
            display: flex;
            flex-direction: row;
            width: 70%;

            div {
                background-color: white;
            }

            ${NaverCardHeader} {
                box-shadow: none;
                transition: none;
                width: 40%;
                border-radius: 10px 0px 0px 10px;

                &:hover {
                    cursor: context-menu;
                    transform: scale(1.0);
                    transition: none;
                }

                img {
                    border-radius: 10px 0px 0px 10px;;
                }
            }

            ${NaverCardBody} {
                margin: 0;
                width: 60%;
                display: flex;
                flex-direction: column;
                justify-content: center;
                border-radius: 0px 10px 10px 0px;
                position: relative;
                padding-left: 20px;
            }
        }
    `}
`

export const NaverCardSubtitles = styled.p`
    font-weight: bold;
`;

export const NaverCardContent = styled.div``;

export const NaverCardBlock = styled.div``;

export const NaverCardHeader = styled.div`
    box-shadow: 10px 10px 20px -1px black;
    transition: all .1s linear;

    &:hover {
        cursor: pointer;
        transform: scale(1.1);
        transition: all .1s linear;
    }
`;

export const NaverCardBody = styled.div`
    margin: 10px 0;

    div {
        margin: 10px 0;

        > &:first-child {
            font-weight: bold;
        }
    }
`;

export const NaverCardClose = styled.div`
    position: absolute;
    top: 0;
    right: 20px;
`;

export const NaverCardFooter = styled.div`
    display: flex;
    flex-direction: row;
    
    div {
        margin: 0 5px;
    }
`;

export const NaverCardActionButton = styled.div`
    cursor: pointer;
    font-size: 1.3em;
`