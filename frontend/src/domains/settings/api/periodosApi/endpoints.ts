export const ENDPOINTS = {
  GET_PERIODOS: '/periodos-contables',
  POST_PERIODO: '/periodos-contables',
  GET_PERIODO: '/periodos-contables/:id',
  PATCH_PERIODO: '/periodos-contables/:id',
  DELETE_PERIODO: '/periodos-contables/:id',
  GET_CONFIGURACION: '/periodos-contables/configuracion',
  UPDATE_METODO_VALORACION: '/periodos-contables/configuracion/metodo-valoracion',
  GET_PERIODO_ACTIVO: '/periodos-contables/activo',
  CERRAR_PERIODO: '/periodos-contables/:id/cerrar',
  REABRIR_PERIODO: '/periodos-contables/:id/reabrir',
  VALIDAR_FECHA: '/periodos-contables/validar-fecha',
  VALIDAR_RETROACTIVO: '/periodos-contables/validar-retroactivo',
} as const;