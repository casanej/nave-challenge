/* eslint-disable camelcase */
import { configure, makeAutoObservable } from 'mobx';
import RequestService from '../services/request-service';
configure({ enforceActions: 'never' });

export interface NaversData {
    id: string;
    name: string;
    admission_date: Date;
    job_role: string;
    user_id: string;
    project: string;
    birthdate: Date;
    url: string;
}

export interface NaverBasicData {
    name: string;
    job_role: string;
    birthdate: Date;
    admission_date: Date;
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
        birthdate: new Date(),
        admission_date: new Date(),
        project: '',
        url: ''
    }

    constructor() {
        this.navers = [];
        this.isLoading = false;
        makeAutoObservable(this);
    }

    getAllNavers = async () => {
        const navers = await this.requestService.requestAuth<NaversData[]>('/navers', 'GET');

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
            birthdate: new Date(naver.birthdate),
            admission_date: new Date(naver.admission_date),
            project: naver.project,
            url: naver.url
        }
    }

    resetNaver = () => {
        this.naverBasicId = '';
        this.naverBasicData = {
            name: '',
            job_role: '',
            birthdate: new Date(),
            admission_date: new Date(),
            project: '',
            url: ''
        }
        this.isOpen = false;
        this.title = '';
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

    startCreate = async (name: string) => {
        this.isOpen = true;
        this.title = 'Criar Naver';
        await this.getNaver(name);
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

        if (editSaving.success === false) return;

        this.resetNaver();
    }

    saveCreate = async (naver: NaverBasicData) => {
        const createSaving = await this.requestService.requestAuth('/navers', 'POST', naver);

        if (createSaving.success === false) return;

        this.resetNaver();
    }

}