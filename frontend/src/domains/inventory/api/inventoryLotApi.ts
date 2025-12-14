import { apiClient } from "@/shared";

/**
 * API para la gestión de lotes de inventario
 */
export const inventoryLotApi = {
  /**
   * Crear un nuevo lote de inventario
   * @param payload - Datos del lote a crear
   * @returns Promise con la respuesta del servidor
   */
  createInventoryLot: (payload: {
    idInventario: number;
    fechaIngreso: string;
    cantidadInicial: number;
    cantidadActual: number;
    costoUnitario: number;
    fechaVencimiento?: string;
    numeroLote?: string;
    observaciones?: string;
  }) => {
    return apiClient.post("/inventario-lote", payload);
  },

  /**
   * Obtener todos los lotes
   * @returns Promise con la respuesta del servidor
   */
  getAllInventoryLots: () => {
    return apiClient.get("/api/inventario-lote");
  },

  /**
   * Obtener lotes por inventario
   * @param idInventario - ID del inventario
   * @returns Promise con la respuesta del servidor
   */
  getInventoryLotsByInventory: (idInventario: number) => {
    return apiClient.get(`/api/inventario-lote/inventario/${idInventario}`);
  },

  /**
   * Obtener lotes activos
   * @param idInventario - ID del inventario (opcional)
   * @returns Promise con la respuesta del servidor
   */
  getActiveInventoryLots: (idInventario?: number) => {
    const params = idInventario ? `?idInventario=${idInventario}` : "";
    return apiClient.get(`/api/inventario-lote/reportes/activos${params}`);
  },
};