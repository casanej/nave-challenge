/* eslint-disable camelcase */
import { configure, makeAutoObservable } from 'mobx';
import RequestService from '../services/request-service';
import { formatDate } from '../utils'
configure({ enforceActions: 'never' });

export interface NaversData {
    id: string;
    name: string;
    admission_date: string;
    job_role: string;
    user_id: string;
    project: string;
    birthdate: string;
    url: string;
}

export interface NaverBasicData {
    name: string;
    job_role: string;
    birthdate: string;
    admission_date: string;
    project: string;
    url: string;
}

type NaverFunctionActive = 'update' | 'create';

export class NaversStore {
    private requestService: RequestService = new RequestService();

    public buttonValue = 'SEM FUNÇÃO';

    public title = '';
    public isOpen = false;
    public navers: NaversData[];
    public isLoading;

    public naverBasicId = '';
    public naverBasicData: NaverBasicData = {
        name: '',
        job_role: '',
        birthdate: '',
        admission_date: '',
        project: '',
        url: ''
    }

    constructor() {
        this.navers = [];
        this.isLoading = true;
        makeAutoObservable(this);
    }

    getAllNavers = async () => {
        const navers = await this.requestService.requestAuth<NaversData[]>('/navers', 'GET');

        this.isLoading = false;

        if (!navers.success) return;

        this.navers = navers.data;
    }

    getNaver = async (name: string) => {
        const naverResponse = await this.requestService.requestAuth<NaversData[]>(`/navers?name=${name}`, 'GET');

        if (!naverResponse.success) return;

        const naver = naverResponse.data[0];

        this.naverBasicId = naver.id;
        this.naverBasicData = {
            name: naver.name,
            job_role: naver.job_role,
            birthdate: formatDate(naver.birthdate, 'yyyy-mm-dd'),
            admission_date: formatDate(naver.admission_date, 'yyyy-mm-dd'),
            project: naver.project,
            url: naver.url
        }
    }

    resetNaver = () => {
        this.naverBasicId = '';
        this.naverBasicData = {
            name: '',
            job_role: '',
            birthdate: '',
            admission_date: '',
            project: '',
            url: ''
        }
        this.isOpen = false;
        this.title = '';
    }

    startRemove = (id: string) => {
        window.__stores__.modalStore.addQueue({ key: 'naver_remover', type: 'info', urgency: 0, bypass: false, isPersistent: false, modal: { content: 'Tem certeza que deseja excluir esse naver ?', header: 'Excluir Naver', buttons: [{ text: 'Fechar', type: 'light' }, { function: () => this.remove(id), text: 'Remover', type: 'dark' }] } });
    }

    remove = async (id: string) => {
        const deleteNaver = await this.requestService.requestAuth(`/navers/${id}`, 'DELETE');

        if (deleteNaver.success === false) return;

        this.getAllNavers();
    }

    startEdit = async (name: string) => {
        this.isOpen = true;
        this.title = 'Editar Naver';
        await this.getNaver(name);
    }

    startCreate = () => {
        this.isOpen = true;
        this.title = 'Criar Naver';
    }

    activeFunction = (typeFunction: NaverFunctionActive, naver: NaverBasicData) => {
        switch (typeFunction) {
        case 'create': this.saveCreate(naver); break;
        case 'update': this.saveEdit(naver); break;
        default: console.log('[NAVERSTORE] Function', typeFunction, 'not exist');
        }
    }

    saveEdit = async (naver: NaverBasicData) => {
        const editSaving = await this.requestService.requestAuth(`/navers/${this.naverBasicId}`, 'PUT', naver);

        this.resetNaver();

        if (editSaving.success === false) return;

        window.__stores__.modalStore.addQueue({ key: 'naver_editado', type: 'info', urgency: 0, bypass: false, isPersistent: false, modal: { content: 'Naver atualizado com sucesso!', header: 'Naver atualizado', buttons: [{ text: 'Fechar', type: 'dark' }] } });

        this.getAllNavers();
    }

    saveCreate = async (naver: NaverBasicData) => {
        const createSaving = await this.requestService.requestAuth('/navers', 'POST', naver);

        this.resetNaver();

        if (createSaving.success === false) return;

        window.__stores__.modalStore.addQueue({ key: 'naver_criado', type: 'info', urgency: 0, bypass: false, isPersistent: false, modal: { content: 'Naver criado com sucesso!', header: 'Naver criado', buttons: [{ text: 'Fechar', type: 'dark' }] } });

        this.getAllNavers();
    }

}