/**
 * Interface para un almacén
 */
export interface Warehouse {
  id: number;
  nombre: string;
  ubicacion: string;
  descripcion: string;
  capacidadMaxima: number;
  responsable: string;
  telefono: string;
  estado: boolean;
  fechaCreacion: string;
  fechaActualizacion: string;
}

export type WarehouseParcial = Pick<Warehouse, "nombre" | "ubicacion" | "descripcion" | "responsable" | "telefono" > & {
  capacidadMaxima?: number;
  id?: number;
  estado?: boolean;
};


/**
 * Interface para el payload de creación de un almacén
 */
export interface CreateWarehousePayload {
  nombre: string;
  ubicacion: string;
  descripcion: string;
  responsable: string;
  telefono: string;
}

/**
 * Interface para el payload de actualización de un almacén
 */
export interface UpdateWarehousePayload {
  nombre?: string;
  ubicacion?: string;
  descripcion?: string;
  capacidadMaxima?: number;
  responsable?: string;
  telefono?: string;
  estado?: boolean;
}