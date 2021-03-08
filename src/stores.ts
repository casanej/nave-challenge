import React, { useContext } from 'react';
import { AuthStore } from './stores/auth-store';
import { NaversStore } from './stores/navers-store';

declare global {
    // eslint-disable-next-line @typescript-eslint/no-namespace
    interface Window {
        __stores__: {
            authStore: AuthStore;
            naversStore: NaversStore;
        }
    }
}

const authStore = new AuthStore();
const naversStore = new NaversStore();

const stores = {
    authStore,
    naversStore
}

if (typeof window !== 'undefined') {
    if (!window.__stores__) {
        window.__stores__ = {
            authStore,
            naversStore
        };
    }
}

export const StoreContext = React.createContext(stores);

export const useStores = () => useContext(StoreContext);