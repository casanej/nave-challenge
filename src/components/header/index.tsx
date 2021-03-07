import React, { useEffect, useState } from 'react'
import { useStores } from '../../stores';
import { HeaderStyle } from './index.style';

const Header = () => {
    const { authStore } = useStores();

    return (
        <HeaderStyle>
            <div>
                <a href='/'> <img src='http://casanje.com/projects/nave-rs/assets/logo.png' height='37' /> </a>
            </div>
            <div style={{cursor: 'pointer'}} onClick={authStore.logout}>Sair</div>
        </HeaderStyle>
    );
};

export { Header };
