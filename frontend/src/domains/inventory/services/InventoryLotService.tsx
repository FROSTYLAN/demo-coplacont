import { handleApiError } from "@/shared";
import { inventoryLotApi } from "../api/inventoryLotApi";

/**
 * Tipos para lotes de inventario
 */
export interface InventoryLot {
  id: number;
  fechaIngreso: string;
  fechaVencimiento?: string;
  cantidadInicial: number;
  cantidadActual: number;
  costoUnitario: number;
  numeroLote?: string;
  observaciones?: string;
  estado: boolean;
  inventario: {
    id: number;
    stockActual: number;
    almacen: {
      id: number;
      nombre: string;
    };
    producto: {
      id: number;
      nombre: string;
    };
  };
}

export interface CreateInventoryLotPayload {
  idInventario: number;
  fechaIngreso: string;
  cantidadInicial: number;
  cantidadActual: number;
  costoUnitario: number;
  fechaVencimiento?: string;
  numeroLote?: string;
  observaciones?: string;
}

/**
 * Servicio de lotes de inventario
 * Maneja todas las operaciones relacionadas con los lotes de inventario
 */
export class InventoryLotService {
  /**
   * Crea un nuevo lote de inventario
   * @param payload - Datos del lote a crear
   * @returns Promise con la respuesta del servidor
   */
  static async createInventoryLot(payload: CreateInventoryLotPayload): Promise<InventoryLot> {
    try {
      const response = await inventoryLotApi.createInventoryLot(payload);
      return response.data;
    } catch (error) {
      throw handleApiError(error);
    }
  }

  /**
   * Obtiene todos los lotes de inventario
   * @returns Promise con la respuesta del servidor
   */
  static async getAllInventoryLots(): Promise<InventoryLot[]> {
    try {
      const response = await inventoryLotApi.getAllInventoryLots();
      return response.data;
    } catch (error) {
      throw handleApiError(error);
    }
  }

  /**
   * Obtiene los lotes de inventario por inventario
   * @param idInventario - ID del inventario
   * @returns Promise con la respuesta del servidor
   */
  static async getInventoryLotsByInventory(idInventario: number): Promise<InventoryLot[]> {
    try {
      const response = await inventoryLotApi.getInventoryLotsByInventory(idInventario);
      return response.data;
    } catch (error) {
      throw handleApiError(error);
    }
  }

  /**
   * Obtiene los lotes activos
   * @param idInventario - ID del inventario (opcional)
   * @returns Promise con la respuesta del servidor
   */
  static async getActiveInventoryLots(idInventario?: number): Promise<InventoryLot[]> {
    try {
      const response = await inventoryLotApi.getActiveInventoryLots(idInventario);
      return response.data;
    } catch (error) {
      throw handleApiError(error);
    }
  }
}