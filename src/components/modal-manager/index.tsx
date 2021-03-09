import React, { useEffect, useState } from 'react';
import { Modal } from '../../components';
import { ModalContent } from '../../stores/index';
import { useStores } from '../../stores';

const ModalManager = () => {
    const modalStore = window.__stores__.modalStore;

    const [isOpen, setIsOpen] = useState<boolean>(true);
    const [currentModal, setCurrentModal] = useState<ModalContent | null | undefined>(null);

    const toggleModal = () => {
        setIsOpen(false);
        setCurrentModal(null);
        setTimeout(callNextModal, 250);
    };

    useEffect(() => {
        setInterval(callNextModal, 250);
        callNextModal();
    })

    useEffect(() => {
        callNextModal();
    }, [modalStore.queue]);

    const callNextModal = () => {
        if (modalStore && currentModal === null) {
            const modal = modalStore.nextModal();

            if (modal) {
                setCurrentModal(modal);
                setIsOpen(true);
            }
        }

    };

    if (currentModal) {
        return (
            <Modal open={isOpen} header={currentModal.header} onClose={currentModal.onClose || toggleModal} buttons={currentModal.buttons}>{currentModal.content}</Modal>
        );
    }

    return null;

};

export { ModalManager };
