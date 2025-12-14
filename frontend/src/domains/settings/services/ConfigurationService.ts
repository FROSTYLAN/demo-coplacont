import { handleApiError } from "@/shared";
import { PeriodosApi } from "../api/periodosApi";
import type { MetodoValoracion, UpdateMetodoValoracionDto, ConfiguracionPeriodoResponse } from "../types";

/**
 * Servicio para gestión de configuración de períodos
 * Maneja las operaciones relacionadas con la configuración del sistema
 */
export class ConfigurationService {
  /**
   * Obtiene la configuración actual del período
   * @returns Promise con la configuración actual
   */
  static async getConfiguration(): Promise<ConfiguracionPeriodoResponse> {
    try {
      const response = await PeriodosApi.getConfiguracion();
      return response.data;
    } catch (error) {
      throw handleApiError(error);
    }
  }

  /**
   * Actualiza el método de valoración en la configuración
   * @param metodoValoracion - Nuevo método de valoración a establecer
   * @returns Promise con la respuesta del servidor
   */
  static async updateValuationMethod(metodoValoracion: MetodoValoracion) {
    try {
      const payload: UpdateMetodoValoracionDto = {
        metodoValoracion
      };
      
      const response = await PeriodosApi.updateMetodoValoracion(payload);
      return response.data;
    } catch (error) {
      throw handleApiError(error);
    }
  }
}