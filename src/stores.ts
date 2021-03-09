import React, { useContext } from 'react';
import { AuthStore } from './stores/auth-store';
import { ModalStore } from './stores/modal-store';
import { NaversStore } from './stores/navers-store';

declare global {
    // eslint-disable-next-line @typescript-eslint/no-namespace
    interface Window {
        __stores__: {
            authStore: AuthStore;
            naversStore: NaversStore;
            modalStore: ModalStore;
        }
    }
}

const authStore = new AuthStore();
const naversStore = new NaversStore();
const modalStore = new ModalStore();

const stores = {
    authStore,
    naversStore,
    modalStore
}

if (typeof window !== 'undefined') {
    if (!window.__stores__) {
        window.__stores__ = {
            authStore,
            naversStore,
            modalStore
        };
    }
}

export const StoreContext = React.createContext(stores);

export const useStores = () => useContext(StoreContext);