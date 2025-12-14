/**
 * Datos de filtros para la página principal de operaciones
 * Contiene las opciones disponibles para los filtros de búsqueda y selección
 */

export const documentTypeOptions = [
  { value: "", label: "Todos los tipos" },
  { value: "factura", label: "Factura" },
  { value: "boleta", label: "Boleta" },
  { value: "nota_credito", label: "Nota de Crédito" },
  { value: "nota_debito", label: "Nota de Débito" },
  { value: "recibo", label: "Recibo" },
  { value: "comprobante_pago", label: "Comprobante de Pago" },
];

export const filterTypeOptions = [
  { value: "mes-anio", label: "Mes y Año" },
  { value: "rango-fechas", label: "Rango de Fechas" },
];

export const monthOptions = [
  { value: "", label: "Seleccionar mes" },
  { value: "1", label: "Enero" },
  { value: "2", label: "Febrero" },
  { value: "3", label: "Marzo" },
  { value: "4", label: "Abril" },
  { value: "5", label: "Mayo" },
  { value: "6", label: "Junio" },
  { value: "7", label: "Julio" },
  { value: "8", label: "Agosto" },
  { value: "9", label: "Septiembre" },
  { value: "10", label: "Octubre" },
  { value: "11", label: "Noviembre" },
  { value: "12", label: "Diciembre" },
];

export const yearOptions = [
  { value: "", label: "Seleccionar año" },
  { value: "2024", label: "2024" },
  { value: "2023", label: "2023" },
  { value: "2022", label: "2022" },
  { value: "2021", label: "2021" },
  { value: "2020", label: "2020" },
];