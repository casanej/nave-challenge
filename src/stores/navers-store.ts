import { configure, makeAutoObservable } from 'mobx';
import RequestService from '../services/request-service';
configure({ enforceActions: 'never' });

export interface NaversData {
    id: string;
    name: string;
    // eslint-disable-next-line camelcase
    admission_date: Date;
    // eslint-disable-next-line camelcase
    job_role: string;
    // eslint-disable-next-line camelcase
    user_id: string;
    project: string;
    birthdate: Date;
    url: string;
}

export class NaversStore {
    private requestService: RequestService = new RequestService();

    public navers: NaversData[];
    public isLoading;

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

    remove = async (id: string) => {
        const deleteNaver = await this.requestService.requestAuth(`/navers/${id}`, 'DELETE');

        if (deleteNaver.success === false) return;

        this.getAllNavers();
    }
}