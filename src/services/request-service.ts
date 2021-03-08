import { ApiResponse } from 'models';
import { AuthStore } from '../stores/auth-store'

type RequestMethod = 'GET' | 'POST' | 'PUT' | 'DELETE';

export default class RequestService {
    private authStore: AuthStore = window?.__stores__?.authStore;

    private BASE_URL = process.env.API_URL;

    private errorTreatment = <TData>(error: unknown) => {
        console.warn(error);
        return this.formatResponse<TData>(false, undefined, 'Erro desconhecido. Contate o administrador para mais informações.')
    }

    private formatResponse = <TData>(isOk: boolean, data?: TData, message?: string): ApiResponse<TData> => {
        if (!isOk) {
            return { success: false, error: `${message}` }
        }

        return { success: true, data: data as TData };
    }

    private responseTreatment = async <IResponse>(response: Response): Promise<ApiResponse<IResponse>> => {
        if (!response.ok) {
            if (response.status === 400) return this.formatResponse<IResponse>(false, undefined, 'Houve um erro com a requisição, revise os dados enviados e tente novamente.');
            if (response.status === 401) return this.formatResponse<IResponse>(false, undefined, 'Você não tem permissão para realizar essa operação.');
            if (response.status === 404) return this.formatResponse<IResponse>(false, undefined, 'Não foi possível achar o conteúdo especificado.');

            return this.formatResponse<IResponse>(false, undefined, 'Houve algum erro com a requisição. Tente novamente mais tarde ou contate um administrador');
        }

        const data = await response.json() as IResponse
        return this.formatResponse<IResponse>(true, data)
    }

    public requestAuth = async <TData>(endpoint: string, method: RequestMethod, payload?: unknown): Promise<ApiResponse<TData>> => await this.makeRequestAuth<TData>(endpoint, method, payload);

    private makeRequestAuth = async <TData>(route: string, method: RequestMethod, payload?: unknown): Promise<ApiResponse<TData>> => {
        const endpoint = `${this.BASE_URL}${route}`

        // const token = this.authStore.user.token;
        const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6Ijg3N2VjZjY0LWJjMzUtNGE5YS05MjJhLWY3ODhkZTY0YzcxNiIsImVtYWlsIjoicmFmYWVsLmNhc2FuamVAZ21haWwuY29tIiwiaWF0IjoxNjE1MTY2MjgyfQ.RipV9QUGVH_00VbUD6dtodV155wHPSbs0S6ihBNQ3hk';
        const headers = {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`
        };

        try {
            const response = await fetch(
                endpoint,
                {
                    method: method,
                    body: JSON.stringify(payload),
                    headers,
                },
            )

            return this.responseTreatment<TData>(response);
        } catch (error) {
            return this.errorTreatment(error);
        }
    };

    public request = async <TData>(route: string, method: RequestMethod, payload?: unknown): Promise<ApiResponse<TData>> => {
        const endpoint = `${this.BASE_URL}${route}`

        try {
            const response = await fetch(
                endpoint,
                {
                    method: method,
                    body: JSON.stringify(payload),
                    headers: { 'Content-Type': 'application/json' },
                },
            )

            return this.responseTreatment<TData>(response);
        } catch (error) {
            return this.errorTreatment(error);
        }
    }

}
