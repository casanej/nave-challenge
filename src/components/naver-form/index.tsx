/* eslint-disable camelcase */
import { faAngleLeft } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { observer } from 'mobx-react-lite';
import React, { ReactElement, useEffect, useState } from 'react'
import { NaverBasicData } from '../../stores/index';
import { useStores } from '../../stores';
import { FormGroup } from '../form-group';
import { Button, Input } from '../inputs';
import { NaverCardActionButton } from '../navers-card/index.style';
import { ContainerNaveForm, NaverFormBody, NaverFormFooter, NaverFormHeader } from './index.style';
import { formatDate } from '../../utils';

interface Props {
    isOpen: boolean;
}

export const NaverForm = observer((props: Props): ReactElement | null => {
    const { naversStore } = useStores();

    const [name, setName] = useState<string>('');
    const [jobRole, setJobRole] = useState<string>('');
    const [birthdate, setBirthdate] = useState<string>('');
    const [admissionDate, setAdmissionDate] = useState<string>('');
    const [project, setProject] = useState<string>('');
    const [url, setUrl] = useState<string>('');

    useEffect(() => {
        setName(naversStore.naverBasicData.name)
        setJobRole(naversStore.naverBasicData.job_role)
        setBirthdate(formatDate(naversStore.naverBasicData.birthdate, 'yyyy-mm-dd'))
        setAdmissionDate(formatDate(naversStore.naverBasicData.admission_date, 'yyyy-mm-dd'))
        setProject(naversStore.naverBasicData.project)
        setUrl(naversStore.naverBasicData.url)
    }, [naversStore.naverBasicData.name])

    const handleFunction = () => {
        const naver: NaverBasicData = {
            name,
            job_role: jobRole,
            birthdate: formatDate(birthdate, 'dd-mm-aaaa'),
            admission_date: formatDate(admissionDate, 'dd-mm-aaaa'),
            project,
            url,
        }

        naversStore.activeFunction(naversStore.naverBasicId ? 'update' : 'create', naver);
    }

    const handleClose = () => {
        naversStore.isOpen = false;
    }

    if(!props.isOpen) return null;

    return (
        <ContainerNaveForm>
            <NaverFormHeader onClick={handleClose}>
                <NaverCardActionButton ><FontAwesomeIcon icon={faAngleLeft} /></NaverCardActionButton>
                <div>{naversStore.title}</div>
            </NaverFormHeader>
            <NaverFormBody>
                <FormGroup>
                    <Input label='Nome' id='name' value={name} onChange={(value) => setName(value)} ></Input>
                </FormGroup>

                <FormGroup>
                    <Input label='Cargo' id='jobRole' value={jobRole} onChange={(value) => setJobRole(value)} ></Input>
                </FormGroup>

                <FormGroup>
                    <Input label='Idade' id='birthdate' value={birthdate} type='date' onChange={(value) => setBirthdate(value)} ></Input>
                </FormGroup>

                <FormGroup>
                    <Input label='Tempo de Empresa' id='admissionDate' value={admissionDate} type='date' onChange={(value) => setAdmissionDate(value)} ></Input>
                </FormGroup>

                <FormGroup>
                    <Input label='Projetos que Participou' id='projects' value={project} onChange={(value) => setProject(value)} ></Input>
                </FormGroup>

                <FormGroup>
                    <Input label='URL da foto' id='url' value={url} onChange={(value) => setUrl(value)} ></Input>
                </FormGroup>
            </NaverFormBody>
            <NaverFormFooter>
                <FormGroup>
                    <Button onClick={handleFunction} >Enviar</Button>
                </FormGroup>
            </NaverFormFooter>
        </ContainerNaveForm>
    );
});
