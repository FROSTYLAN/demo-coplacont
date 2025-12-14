/**
 * Tipos de persona disponibles
 */
type PersonType = 'NATURAL' | 'JURIDICA';

/**
 * Interface para una persona (cliente o proveedor)
 */
interface Entidad {
  id: number;
  esProveedor: boolean;
  esCliente: boolean;
  tipo: PersonType;
  numeroDocumento: string;
  nombre: string | null;
  apellidoMaterno: string | null;
  apellidoPaterno: string | null;
  razonSocial: string | null;
  activo: boolean;
  direccion: string;
  telefono: string;
  nombreCompleto: string;
  createdAt: string;
  updatedAt: string;
}

export type EntidadParcial = Pick<Entidad, "esProveedor" | "esCliente" | "tipo" | "numeroDocumento" | "nombre" | "apellidoMaterno" | "apellidoPaterno" | "razonSocial" | "direccion" | "telefono"> & {
  id?: number;
};


export type EntidadToUpdate = Pick<Entidad, "nombre" | "apellidoMaterno" | "apellidoPaterno" | "razonSocial" | "direccion" | "telefono">;

/**
 * Interface para el response de la API de personas
 */
interface EntidadesApiResponse {
  success: boolean;
  message: string;
  data: Entidad[];
}

export type { Entidad, PersonType, EntidadesApiResponse };
