import { apiClient } from "@/shared";
import { ENDPOINTS } from './endpoints';
import type { 
  ConfiguracionPeriodo, 
  CreateConfiguracionPeriodoDto, 
  UpdateConfiguracionPeriodoDto,
  UpdateMetodoValoracionDto,
  PeriodosResponse,
  PeriodoFilters,
  ConfiguracionPeriodoResponse
} from '../../types';

/**
 * Servicio API para gestión de periodos contables
 */
export const Api = {
  /**
   * Obtiene todos los periodos contables con filtros opcionales
   */
  getPeriodos: (filters?: PeriodoFilters) => 
    apiClient.get<PeriodosResponse>(ENDPOINTS.GET_PERIODOS, { params: filters }),

  /**
   * Crea un nuevo periodo contable
   */
  postPeriodo: (payload: CreateConfiguracionPeriodoDto) => 
    apiClient.post<ConfiguracionPeriodo>(ENDPOINTS.POST_PERIODO, payload),

  /**
   * Obtiene un periodo contable por ID
   */
  getPeriodo: (id: number) => 
    apiClient.get<ConfiguracionPeriodo>(ENDPOINTS.GET_PERIODO.replace(':id', String(id))),

  /**
   * Actualiza un periodo contable
   */
  patchPeriodo: (id: number, payload: UpdateConfiguracionPeriodoDto) => 
    apiClient.patch<ConfiguracionPeriodo>(ENDPOINTS.PATCH_PERIODO.replace(':id', String(id)), payload),

  /**
   * Elimina un periodo contable
   */
  deletePeriodo: (id: number) => 
    apiClient.delete(ENDPOINTS.DELETE_PERIODO.replace(':id', String(id))),

  /**
   * Obtiene la configuración del período actual
   */
  getConfiguracion: () => 
    apiClient.get<ConfiguracionPeriodoResponse>(ENDPOINTS.GET_CONFIGURACION),

  /**
   * Actualiza el método de valoración en la configuración del período activo
   */
  updateMetodoValoracion: (payload: UpdateMetodoValoracionDto) => 
    apiClient.put(ENDPOINTS.UPDATE_METODO_VALORACION, payload),

  /**
   * Obtiene el periodo contable activo
   */
  getPeriodoActivo: () => 
    apiClient.get<ConfiguracionPeriodo>(ENDPOINTS.GET_PERIODO_ACTIVO),

  /**
   * Cierra un periodo contable
   */
  cerrarPeriodo: (id: number, payload: { fechaCierre?: string; observaciones?: string }) => 
    apiClient.put(ENDPOINTS.CERRAR_PERIODO.replace(':id', String(id)), payload),

  /**
   * Reabre un periodo contable
   */
  reabrirPeriodo: (id: number) => 
    apiClient.put(ENDPOINTS.REABRIR_PERIODO.replace(':id', String(id)), {}),

  /**
   * Valida si una fecha está dentro del período activo
   */
  validarFecha: (fecha: string) => 
    apiClient.get(ENDPOINTS.VALIDAR_FECHA, { params: { fecha } }),

  /**
   * Valida si se permite un movimiento retroactivo
   */
  validarMovimientoRetroactivo: (fecha: string) => 
    apiClient.get(ENDPOINTS.VALIDAR_RETROACTIVO, { params: { fecha } }),
} as const;