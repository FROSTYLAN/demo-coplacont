import type { ComboBoxOption } from '@/components';

export const filterTypeOptions: ComboBoxOption[] = [
  { value: 'mes-anio', label: 'Mes/Año' },
  { value: 'rango-fechas', label: 'Rango de fechas' },
];

export const monthOptions: ComboBoxOption[] = [
  { value: '01', label: 'Enero' },
  { value: '02', label: 'Febrero' },
  { value: '03', label: 'Marzo' },
  { value: '04', label: 'Abril' },
  { value: '05', label: 'Mayo' },
  { value: '06', label: 'Junio' },
  { value: '07', label: 'Julio' },
  { value: '08', label: 'Agosto' },
  { value: '09', label: 'Setiembre' },
  { value: '10', label: 'Octubre' },
  { value: '11', label: 'Noviembre' },
  { value: '12', label: 'Diciembre' },
];

export const yearOptions: ComboBoxOption[] = Array.from({ length: 7 }, (_, i) => 2022 + i).map(y => ({ value: String(y), label: String(y) }));

export const documentTypeOptions: ComboBoxOption[] = [
  { value: 'factura', label: 'Factura' },
  { value: 'boleta', label: 'Boleta' },
  { value: 'nota-credito', label: 'Nota de crédito' },
  { value: 'nota-debito', label: 'Nota de débito' },
];

export const sunatStatusOptions: ComboBoxOption[] = [
  { value: 'aprobado', label: 'Aprobado' },
  { value: 'pendiente', label: 'Pendiente' },
  { value: 'rechazado', label: 'Rechazado' },
];