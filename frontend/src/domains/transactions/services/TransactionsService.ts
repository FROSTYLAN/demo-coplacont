import { handleApiError } from "@/shared";
import { transactionsApi } from "../api/transactionsApi";
import type {
  RegisterSalePayload,
  RegisterPurchasePayload,
  RegisterOperationPayload,
} from "./types";
import type { Transaction } from "./types";

type RegisterTransferPayload = {
  idAlmacenOrigen: number;
  idAlmacenDestino: number;
  fechaEmision: string;
  moneda: string;
  tipoCambio?: number;
  serie: string;
  numero: string;
  fechaVencimiento?: string;
  detalles: {
    idProducto: number;
    cantidad: number;
    descripcion: string;
  }[];
};

/**
 * Servicio de transacciones
 * Maneja todas las operaciones relacionadas con las transacciones de ventas
 */
export class TransactionsService {
  /**
   * Registra una nueva venta
   * @param payload - Datos de la venta a registrar
   * @returns Promise con la respuesta del servidor
   */
  static async registerSale(payload: RegisterSalePayload) {
    try {
      const response = await transactionsApi.registerSale(payload);
      return response.data;
    } catch (error) {
      throw handleApiError(error);
    }
  }

  /**
   * Registra una nueva compra
   * @param payload - Datos de la compra a registrar
   * @returns Promise con la respuesta del servidor
   */
  static async registerPurchase(payload: RegisterPurchasePayload) {
    try {
      const response = await transactionsApi.registerPurchase(payload);
      return response.data;
    } catch (error) {
      throw handleApiError(error);
    }
  }

  /**
   * Crea una nueva operación general
   * @param payload - Datos de la operación a crear
   * @returns Promise con la respuesta del servidor
   */
  static async createOperation(payload: RegisterOperationPayload) {
    try {
      const response = await transactionsApi.createOperation(payload);
      return response.data;
    } catch (error) {
      throw handleApiError(error);
    }
  }

  /**
   * Obtiene todas las ventas
   * @returns Promise con la lista de ventas
   */
  static async getSales(): Promise<Transaction[]> {
    try {
      const response = await transactionsApi.getSales();
      return response.data;
    } catch (error) {
      throw handleApiError(error);
    }
  }

  /**
   * Obtiene el siguiente correlativo para un tipo de operación
   * @param idTipoOperacion - ID del tipo de operación (1 para venta, 2 para compra)
   * @returns Promise con el número de correlativo
   */
  static async getCorrelative(
    idTipoOperacion: number
  ): Promise<{ correlativo: string }> {
    try {
      const response = await transactionsApi.getSiguienteCorrelative(
        idTipoOperacion
      );
      return response.data;
    } catch (error) {
      throw handleApiError(error);
    }
  }

  /**
   * Obtiene todas las compras
   * @returns Promise con la lista de compras
   */
  static async getPurchases(): Promise<Transaction[]> {
    try {
      const response = await transactionsApi.getPurchases();
      return response.data;
    } catch (error) {
      throw handleApiError(error);
    }
  }

  /**
   * Obtiene el tipo de cambio de la SUNAT
   * @param date - Fecha en formato YYYY-MM-DD
   * @returns Promise con el tipo de cambio
   */
  static async getTypeExchange(date: string) {
    const response = await transactionsApi.getTypeExchange(date);
    return response.data;
  }

  /**
   * Obtiene todas las operaciones
   * @returns Promise con la lista de operaciones
   */
  static async getOperations(): Promise<Transaction[]> {
    try {
      const response = await transactionsApi.getOperations();
      console.log("response de operaciones", response.data);
      return response.data;
    } catch (error) {
      throw handleApiError(error);
    }
  }

  /**
   * Obtiene todas las transferencias
   * @returns Promise con la lista de transferencias
   */
  static async getTransfers(): Promise<Transaction[]> {
    try {
      const response = await transactionsApi.getTransfers();
      return response.data;
    } catch (error) {
      throw handleApiError(error);
    }
  }

  /**
   * Crea una nueva transferencia
   * @param payload - Datos de la transferencia a crear
   * @returns Promise con la respuesta del servidor
   */
  static async createTransfer(payload: RegisterTransferPayload) {
    try {
      const response = await transactionsApi.createTransfer(payload);
      return response.data;
    } catch (error) {
      throw handleApiError(error);
    }
  }
}
