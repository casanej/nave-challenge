import { Button, Container } from '../../components';
import React, { ReactElement, useEffect } from 'react'
import { HomeNaversCard, HomeTopMenu } from './index.style';

export const Home = (): ReactElement => {
    useEffect(() => {
        console.log('[Home] Started with success');
    }, []);

    const addNaver = () => {
        console.log('[ADDING]');
    }

    return (
        <Container>
            <HomeTopMenu>
                <div><h1>Navers</h1></div>
                <div><Button onClick={addNaver} >Adicionar Naver</Button></div>
            </HomeTopMenu>
            <HomeNaversCard>

            </HomeNaversCard>
        </Container>
    );
};
