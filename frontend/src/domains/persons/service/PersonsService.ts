import { personsApi } from '../api/personsApi';
import type { Person } from './types';


export class PersonsService {
    static async getClients(): Promise<Person[]> {
        const response = await personsApi.getClients();
        return response.data.data;
    }
    static async getSuppliers(): Promise<Person[]> {
        const response = await personsApi.getSuppliers();
        return response.data.data;
    }
}
