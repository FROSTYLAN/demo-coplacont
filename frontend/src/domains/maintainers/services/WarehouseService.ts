import  { WarehouseApi } from '../api';
import type { Warehouse, CreateWarehousePayload, UpdateWarehousePayload } from '../types';


export class WarehouseService {
    static async getAll(includeInactive?: boolean): Promise<Warehouse[]> {
        const response = await WarehouseApi.getWarehouses(includeInactive);
        return response.data;
    }
        
    static async create(warehouse: CreateWarehousePayload): Promise<Warehouse> {
        const response = await WarehouseApi.postWarehouse(warehouse);   
        return response.data;
    }

    static async update(id: number, warehouse: UpdateWarehousePayload): Promise<Warehouse> {
        const response = await WarehouseApi.patchWarehouse(id, warehouse);
        return response.data;
    }

    static async delete(id: number): Promise<void> {
        await WarehouseApi.deleteWarehouse(id);
    }

    static async restore(id: number, {estado}: {estado: boolean}): Promise<Warehouse> {
        const response = await WarehouseApi.patchWarehouse(id, {estado});
        return response.data;
    }

}   
