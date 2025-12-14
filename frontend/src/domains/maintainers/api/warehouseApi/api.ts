import { apiClient } from "@/shared";
import { ENDPOINTS } from './endpoints';
import type { CreateWarehousePayload, UpdateWarehousePayload, Warehouse } from "../../types";

export const Api = {
    getWarehouses: (includeInactive?: boolean) => apiClient.get<Warehouse[]>(ENDPOINTS.GET_WAREHOUSES, { params: { includeInactive } }),
    postWarehouse: (data: CreateWarehousePayload) => apiClient.post<Warehouse>(ENDPOINTS.POST_WAREHOUSE, data),
    patchWarehouse: (id: number, data: UpdateWarehousePayload) => apiClient.patch(ENDPOINTS.PATCH_WAREHOUSE.replace(':id', id.toString()), data),
    deleteWarehouse: (id: number) => apiClient.delete(ENDPOINTS.DELETE_WAREHOUSE.replace(':id', id.toString())),

} as const;