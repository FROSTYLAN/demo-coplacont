import { apiClient } from "@/shared";
import { ENTITIES_ENDPOINTS } from "./endpoints";
import type { EntidadesApiResponse } from "../../services/entitiesService";
import type { EntidadParcial, EntidadToUpdate } from "../../services/entitiesService";

export const entitiesApi = {
    getClients: (includeInactive?: boolean) => apiClient.get<EntidadesApiResponse>(ENTITIES_ENDPOINTS.GET_CLIENTS, { params: { includeInactive } }),
    getSuppliers: (includeInactive?: boolean) => apiClient.get<EntidadesApiResponse>(ENTITIES_ENDPOINTS.GET_SUPPLIERS, { params: { includeInactive } }),
    postEntidad: (data: EntidadParcial) => apiClient.post(ENTITIES_ENDPOINTS.POST_ENTIDAD, data),
    deleteEntidad: (id: number) => apiClient.delete(`${ENTITIES_ENDPOINTS.DELETE_ENTIDAD}/${id}`),
    restoreEntidad: (id: number) => apiClient.patch(`${ENTITIES_ENDPOINTS.RESTORE_ENTIDAD}/${id}/restore`),
    updateEntidad: (id: number, data: EntidadToUpdate) => apiClient.patch(`${ENTITIES_ENDPOINTS.UPDATE_ENTIDAD}/${id}`, data),
} as const;
