import React, { useEffect, useState } from 'react';
import { Modal } from '../../components';
import { ModalContent } from '../../stores/index';
import { useStores } from '../../stores';

const ModalManager = () => {
    const { modalStore } = useStores();

    const [isOpen, setIsOpen] = useState<boolean>(true);
    const [currentModal, setCurrentModal] = useState<ModalContent | null | undefined>(null);

    const toggleModal = () => {
        setIsOpen(false);
        setCurrentModal(null);
        setTimeout(callNextModal, 250);
    };

    useEffect(() => {
        console.log('[ModalManager] Started with success');
        modalStore.addQueue({
            key: 'naver_criado',
            type: 'info',
            urgency: 0,
            bypass: false,
            isPersistent: false,
            modal: {
                content: 'Naver criado com sucesso!',
                header: 'Naver criado',
                buttons: [
                    {
                        text: 'Fechar',
                        type: 'dark'
                    }
                ]
            }
        });
    }, []);

    useEffect(() => {
        callNextModal();
    }, [modalStore?.queue.length]);

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
