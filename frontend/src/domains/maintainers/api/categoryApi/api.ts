import { apiClient } from "@/shared";
import { ENDPOINTS } from './endpoints';
import type { Category, CreateCategoryPayload } from '../../types';

export const Api = {
    getCategories: (includeInactive?: boolean) => apiClient.get<Category[]>(ENDPOINTS.GET_CATEGORIES, { params: { includeInactive } }),
    postCategory: (payload: CreateCategoryPayload) => apiClient.post<Category>(ENDPOINTS.POST_CATEGORY, payload),
    getCategory: (id: number) => apiClient.get<Category>(ENDPOINTS.GET_CATEGORY.replace(':id', String(id))),
    patchCategory: (id: number, payload: Partial<CreateCategoryPayload>) => apiClient.patch<Category>(ENDPOINTS.PATCH_CATEGORY.replace(':id', String(id)), payload),
    deleteCategory: (id: number) => apiClient.delete(ENDPOINTS.DELETE_CATEGORY.replace(':id', String(id))),
    getCategoryByName: (name: string) => apiClient.get<Category[]>(ENDPOINTS.GET_CATEGORY_BY_NAME.replace(':nombre', name)),
} as const;