import { faPen, faTrash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { ReactElement, useState } from 'react'
import { NaversData } from '../../stores/index';
import { NaverCardFullscreen } from './fullscreen';
import { NaverCardBody, NaverCardFooter, NaverCardHeader, NaverCardStyle, NaverCardActionButton } from './index.style';

interface Props {
    naverInfo: NaversData
    delete: (id: string) => void;
    edit: (id: string) => void;
}

export const NaverCard = (props: Props): ReactElement => {
    const [isFullscreen, setIsFullscreen] = useState<boolean>(false);

    const toggleFullscreen = () => {
        setIsFullscreen(!isFullscreen);
    }

    const handleDelete = (id: string) => {
        setIsFullscreen(false);
        props.delete(id);
    }

    return (
        <>
            {
                isFullscreen && <NaverCardFullscreen naverInfo={props.naverInfo} edit={props.edit} delete={handleDelete} onClose={toggleFullscreen} />
            }
            <NaverCardStyle>
                <NaverCardHeader onClick={toggleFullscreen}>
                    <img src={props.naverInfo.url} width='100%' height='100%' />
                </NaverCardHeader>
                <NaverCardBody>
                    <div>{props.naverInfo.name}</div>
                    <div>{props.naverInfo.job_role}</div>
                </NaverCardBody>
                <NaverCardFooter>
                    <NaverCardActionButton onClick={() => handleDelete(props.naverInfo.id)} ><FontAwesomeIcon icon={faTrash} /></NaverCardActionButton>
                    <NaverCardActionButton onClick={() => props.edit(props.naverInfo.name)} ><FontAwesomeIcon icon={faPen} /></NaverCardActionButton>
                </NaverCardFooter>
            </NaverCardStyle>
        </>
    );
};
