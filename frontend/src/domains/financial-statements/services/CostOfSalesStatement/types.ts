/**
 * Interface para los datos mensuales del reporte de costo de ventas
 */
export interface DatosMensuales {
  mes: number;
  nombreMes: string;
  comprasTotales: string;
  salidasTotales: string;
  inventarioFinal: string;
}

/**
 * Interface para las sumatorias del reporte de costo de ventas
 */
export interface Sumatorias {
  totalComprasAnual: string;
  totalSalidasAnual: string;
  inventarioFinalAnual: string;
}

/**
 * Interface para el reporte completo de costo de ventas
 */
export interface CostOfSalesStatement {
  año: number;
  almacen: string;
  producto: string;
  datosMensuales: DatosMensuales[];
  sumatorias: Sumatorias;
  fechaGeneracion: string;
}

/**
 * Interface para los datos de inventario en el reporte por inventario
 */
export interface DatosInventario {
  idInventario: number;
  nombreProducto: string;
  nombreAlmacen: string;
  nombreProductoAlmacen: string;
  entradasTotales: string;
  salidasTotales: string;
  inventarioFinal: string;
}

/**
 * Interface para las sumatorias del reporte por inventario
 */
export interface SumatoriasInventario {
  totalEntradasAnual: string;
  totalSalidasAnual: string;
  totalInventarioFinalAnual: string;
  cantidadInventarios: number;
}

/**
 * Interface para el reporte completo de costo de ventas por inventario
 */
export interface CostOfSalesStatementByInventory {
  año: number;
  datosInventarios: DatosInventario[];
  sumatorias: SumatoriasInventario;
  fechaGeneracion: string;
}