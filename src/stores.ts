import React, { useContext } from 'react';
import { WebsiteThemeSupported } from './assets';
import { Teste } from './stores/teste';

declare global {
    // eslint-disable-next-line @typescript-eslint/no-namespace
    interface Window {
        __theme__: {
            type: WebsiteThemeSupported
        }
    }
}

const teste = new Teste();

const stores = {
    teste,
};

if (typeof window !== 'undefined') {
    if (!window.__theme__) {
        window.__theme__ = {
            type: localStorage.getItem('websiteTheme') as WebsiteThemeSupported || 'dark',
        };
    }
}

export const StoreContext = React.createContext(stores);

export const useStores = () => useContext(StoreContext);