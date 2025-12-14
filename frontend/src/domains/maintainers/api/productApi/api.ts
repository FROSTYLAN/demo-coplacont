import { apiClient } from "@/shared";
import { ENDPOINTS } from './endpoints';
import type { Product, CreateProductPayload, UpdateProductPayload } from '../../types';

export const Api = {
    getProducts: (includeInactive?: boolean) => apiClient.get<Product[]>(ENDPOINTS.GET_PRODUCTS, { params: { includeInactive } }),
    getProduct: (id: number) => apiClient.get<Product>(ENDPOINTS.GET_PRODUCT.replace(':id', id.toString())),
    postProduct: (data: CreateProductPayload) => apiClient.post<Product>(ENDPOINTS.POST_PRODUCT, data),
    patchProduct: (id: number, data: UpdateProductPayload) => apiClient.patch<Product>(ENDPOINTS.PATCH_PRODUCT.replace(':id', id.toString()), data),
    deleteProduct: (id: number) => apiClient.delete<Product>(ENDPOINTS.DELETE_PRODUCT.replace(':id', id.toString())),
    getProductByDescription: (description: string) => apiClient.get<Product[]>(ENDPOINTS.GET_PRODUCT_BY_DESCRIPTION.replace(':descripcion', description)),
    getProductByCategory: (categoryId: number) => apiClient.get<Product[]>(ENDPOINTS.GET_PRODUCT_BY_CATEGORY.replace(':categoriaId', categoryId.toString())),
    getProductLowStock: () => apiClient.get<Product[]>(ENDPOINTS.GET_PRODUCT_LOW_STOCK),
} as const;