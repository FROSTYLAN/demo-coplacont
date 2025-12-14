import { apiClient } from "../../../shared/services/apiService";
import { AUTH_ENDPOINTS } from "./endpoints";

export const authApi = {
    login: async (payload: {email: string, contrasena: string}) => {
        try {
            const response = await apiClient.post(AUTH_ENDPOINTS.LOGIN, payload);
            console.log('authApi: Login exitoso', {
                status: response.status,
                hasData: !!response.data,
                dataStructure: response.data ? Object.keys(response.data) : []
            });
            return response;
        } catch (error) {
            console.error('authApi: Error en login', {
                error: error,
                message: error instanceof Error ? error.message : 'Error desconocido'
            });
            throw error;
        }
    },
    recoverPassword: (payload: {email: string}) => apiClient.post(AUTH_ENDPOINTS.RECOVER_PASSWORD, payload),
    validateResetToken: (payload: {token: string}) => apiClient.post(AUTH_ENDPOINTS.VALIDATE_RESET_TOKEN, payload),
    resetPassword: (payload: {token: string, password: string}) => apiClient.post(AUTH_ENDPOINTS.RESET_PASSWORD, payload),
} as const;

export type AuthApi = typeof authApi;