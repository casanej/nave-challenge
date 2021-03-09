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
        naversStore.getAllNavers();
    }, [])

    useEffect(() => {
        setNaversList(toJS(naversStore.navers));
    }, [JSON.stringify(naversStore.navers)]);

    return (
        <Container>
            <NaverForm isOpen={naversStore.isOpen} />
            <HomeTopMenu>
                <div><h1>Navers</h1></div>
                <div><Button onClick={() => naversStore.startCreate()} >Adicionar Naver</Button></div>
            </HomeTopMenu>
            <HomeNaversCard>
                {
                    naversStore.isLoading && <h1>Carregando Navers...</h1>
                }
                {
                    !naversStore.isLoading && naversList &&
                        naversList.map(naver => <NaverCard
                            key={naver.id}
                            naverInfo={naver}
                            edit={(name) => naversStore.startEdit(name)}
                            delete={(id) => naversStore.startRemove(id)}
                        />)
                }
                {
                    !naversStore.isLoading && naversList?.length === 0 && <h1>Não há Navers registrados</h1>
                }
            </HomeNaversCard>
        </Container>
    );
});
