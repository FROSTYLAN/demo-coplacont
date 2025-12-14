import  { ProductApi } from '../api';
import type { CreateProductPayload, Product, UpdateProductPayload } from '../types';


export class ProductService {
    static async getAll(includeInactive?: boolean): Promise<Product[]> {
        const response = await ProductApi.getProducts(includeInactive);
        return response.data;
    }
    
    static async getById(id: number): Promise<Product> {
        const response = await ProductApi.getProduct(id);
        return response.data;
    }

    static async create(product: CreateProductPayload): Promise<Product> {
        const response = await ProductApi.postProduct(product);
        return response.data;
    }

    static async update(id: number, product: UpdateProductPayload): Promise<Product> {
        const response = await ProductApi.patchProduct(id, product);
        return response.data;
    }

    static async delete(id: number): Promise<void> {
        await ProductApi.deleteProduct(id);
    }

    static async getByDescription(description: string): Promise<Product[]> {
        const response = await ProductApi.getProductByDescription(description);
        return response.data;
    }

    static async getByCategory(categoryId: number): Promise<Product[]> {
        const response = await ProductApi.getProductByCategory(categoryId);
        return response.data;
    }

    static async getLowStock(): Promise<Product[]> {
        const response = await ProductApi.getProductLowStock();
        return response.data;
    }
}
