import React, { ReactElement } from 'react'
import { NaversData } from '../../../stores/index';
import { NaverCardBody, NaverCardContent, NaverCardSubtitles, NaverCardHeader, NaverCardStyle, NaverCardBlock, NaverCardFooter, NaverCardActionButton, NaverCardClose } from '../index.style';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash, faPen, faTimes } from '@fortawesome/free-solid-svg-icons';

interface Props {
    naverInfo: NaversData
    delete: (id: string) => void;
    edit: (id: string) => void;
    onClose: () => void;
}

export const NaverCardFullscreen = (props: Props): ReactElement => {
    const handleClose = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
        const target = e.target as HTMLElement;
        if(target.id === 'cart-blackout') props.onClose();
    }

    return (
        <NaverCardStyle id='cart-blackout' fullscreen onClick={handleClose}>
            <NaverCardContent>
                <NaverCardHeader>
                    <img src={props.naverInfo.url} width='100%' height='100%' />
                </NaverCardHeader>
                <NaverCardBody>
                    <NaverCardClose>
                        <NaverCardActionButton onClick={props.onClose}><FontAwesomeIcon icon={faTimes} /></NaverCardActionButton>
                    </NaverCardClose>
                    <NaverCardBlock></NaverCardBlock>
                    <h1>{props.naverInfo.name}</h1>
                    <div>{props.naverInfo.job_role}</div>
                    <NaverCardBlock>
                        <NaverCardSubtitles>Idade</NaverCardSubtitles>
                        <div>{props.naverInfo.birthdate}</div>
                    </NaverCardBlock>
                    <NaverCardBlock>
                        <NaverCardSubtitles>Tempo de empresa</NaverCardSubtitles>
                        <div>{props.naverInfo.admission_date}</div>
                    </NaverCardBlock>
                    <NaverCardBlock>
                        <NaverCardSubtitles>Projetos que participou</NaverCardSubtitles>
                        <div>{props.naverInfo.project}</div>
                    </NaverCardBlock>
                    <NaverCardFooter>
                        <NaverCardActionButton onClick={() => props.delete(props.naverInfo.id)} ><FontAwesomeIcon icon={faTrash} /></NaverCardActionButton>
                        <NaverCardActionButton onClick={() => props.edit(props.naverInfo.name)} ><FontAwesomeIcon icon={faPen} /></NaverCardActionButton>
                    </NaverCardFooter>
                </NaverCardBody>
            </NaverCardContent>
        </NaverCardStyle>
    );
};
