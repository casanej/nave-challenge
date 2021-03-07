import React, { useContext } from 'react';
import { AuthStore } from './stores/auth-store';

declare global {
    // eslint-disable-next-line @typescript-eslint/no-namespace
    interface Window {
        __stores__: {
            authStore: AuthStore;
        }
    }
}

const authStore = new AuthStore();

const stores = {
    authStore
}

if (typeof window !== 'undefined') {
    if (!window.__stores__) {
        window.__stores__ = {
            authStore,
        };
    }
}

export const StoreContext = React.createContext(stores);

export const useStores = () => useContext(StoreContext);