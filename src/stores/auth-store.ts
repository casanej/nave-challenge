import { makeAutoObservable } from 'mobx';
import { UserLoginObject } from 'models';
import RequestService from '../services/request-service';

interface UserData {
    email: string;
    id: string;
    token: string;
}

export class AuthStore {
    public user: UserData;

    private requestService: RequestService = new RequestService();

    constructor() {
        const userLocal: UserData | null = JSON.parse(window.localStorage.getItem('nave-user') || '{}');
        this.user = {
            email: userLocal?.email || '',
            id: userLocal?.id || '',
            token: userLocal?.token || ''
        }
        makeAutoObservable(this);
    }

    login = async (email: string, password: string) => {
        const login = await this.requestService.request<UserLoginObject>('/users/login', 'POST', { email, password });

        if (login.success === false) {
            console.log('[MAKE A ERROR LOG]');
            return;
        }

        this.user.id = login.data.id;
        this.user.email = login.data.email;
        this.user.token = login.data.token;

        window.localStorage.setItem('nave-user', JSON.stringify(this.user));
        window.location.href = '/';
    }

    logout = () => {
        this.user.id = '';
        this.user.email = '';
        this.user.token = '';
        window.localStorage.removeItem('nave-user');
        window.location.href = '/login';
    }
}