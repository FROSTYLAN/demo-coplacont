/**
 * Tipos de persona disponibles
 */
type PersonType = 'NATURAL' | 'JURIDICA';

/**
 * Interface para una persona (cliente o proveedor)
 */
interface Person {
  id: number;
  isProveedor: boolean;
  isCliente: boolean;
  type: PersonType;
  documentNumber: string;
  firstName: string | null;
  maternalSurname: string | null;
  paternalSurname: string | null;
  businessName: string | null;
  active: boolean;
  address: string;
  phone: string;
  displayName: string;
  createdAt: string;
  updatedAt: string;
}

/**
 * Interface para el response de la API de personas
 */
interface PersonsApiResponse {
  success: boolean;
  message: string;
  data: Person[];
}

export type { Person, PersonType, PersonsApiResponse };
