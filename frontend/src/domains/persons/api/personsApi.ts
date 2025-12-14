import { apiClient } from "../../../shared/services/apiService";
import { PERSONS_ENDPOINTS } from "./endpoints";
import type { PersonsApiResponse } from "../service/types";

export const personsApi = {
    getClients: () => apiClient.get<PersonsApiResponse>(PERSONS_ENDPOINTS.GET_CLIENTS),
    getSuppliers: () => apiClient.get<PersonsApiResponse>(PERSONS_ENDPOINTS.GET_SUPPLIERS),
} as const;
