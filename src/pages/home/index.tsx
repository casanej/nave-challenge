import { Button, Container, NaverCard, NaverForm } from '../../components';
import React, { ReactElement, useEffect, useState } from 'react'
import { HomeNaversCard, HomeTopMenu } from './index.style';
import { NaversData } from '../../stores/index';
import { toJS } from 'mobx';
import { observer } from 'mobx-react-lite';
import { useStores } from '../../stores';

export const Home = observer((): ReactElement => {
    const { naversStore } = useStores();
    const [naversList, setNaversList] = useState<NaversData[]>();

    useEffect(() => {
        naversStore.getAllNavers().then(() => {
            setNaversList(toJS(naversStore.navers));
        });
    }, [naversStore.navers.length]);

    const addNaver = () => {
        console.log('[ADDING]');
    }

    const deleteNaver = (id: string) => {
        naversStore.remove(id);
    }

    const editNaver = (name: string) => {
        naversStore.startEdit(name);
    }

    return (
        <Container>
            <NaverForm isOpen={naversStore.isOpen} />
            <HomeTopMenu>
                <div><h1>Navers</h1></div>
                <div><Button onClick={addNaver} >Adicionar Naver</Button></div>
            </HomeTopMenu>
            <HomeNaversCard>
                {
                    naversList
                        ? naversList.map(naver => <NaverCard
                            key={naver.id}
                            naverInfo={naver}
                            edit={editNaver}
                            delete={deleteNaver}
                        />)
                        : <h1>Não há Navers registrados</h1>

                }
            </HomeNaversCard>
        </Container>
    );
});
