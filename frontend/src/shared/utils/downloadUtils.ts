/**
 * Utilidades para descarga de archivos
 */

export interface ExcelColumn {
  key: string;
  label: string;
  example?: string;
}

/**
 * Descarga un archivo blob
 */
export const downloadFile = (blob: Blob, filename: string): void => {
  const url = window.URL.createObjectURL(blob);
  const link = document.createElement('a');
  link.href = url;
  link.download = filename;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  window.URL.revokeObjectURL(url);
};

/**
 * Convierte datos a formato CSV
 */
export const arrayToCSV = (data: Record<string, unknown>[]): string => {
  if (data.length === 0) return '';
  
  const headers = Object.keys(data[0]);
  const csvContent = [
    headers.join(','),
    ...data.map(row => 
      headers.map(header => {
        const value = row[header];
        // Escapar comillas y envolver en comillas si contiene comas o espacios
        if (typeof value === 'string' && (value.includes(',') || value.includes('"') || value.includes('\n'))) {
          return `"${value.replace(/"/g, '""')}"`;
        }
        return value;
      }).join(',')
    )
  ].join('\n');
  
  return csvContent;
};

/**
 * Genera y descarga una plantilla de Excel en formato CSV
 */
export const downloadExcelTemplate = (
  columns: ExcelColumn[],
  filename: string,
  includeExampleRow: boolean = true
): void => {
  // Crear cabeceras
  const headers = columns.reduce((acc, col) => {
    acc[col.key] = col.label;
    return acc;
  }, {} as Record<string, string>);

  // Crear fila de ejemplo si se requiere
  const exampleRow = includeExampleRow ? 
    columns.reduce((acc, col) => {
      acc[col.key] = col.example || '';
      return acc;
    }, {} as Record<string, string>) : null;

  const data = exampleRow ? [headers, exampleRow] : [headers];
  
  const csvContent = arrayToCSV(data);
  
  // Agregar BOM para UTF-8 para mejor compatibilidad con Excel
  const BOM = '\uFEFF';
  const blob = new Blob([BOM + csvContent], { type: 'text/csv;charset=utf-8;' });
  
  downloadFile(blob, filename.endsWith('.csv') ? filename : `${filename}.csv`);
};

/**
 * Genera datos de ejemplo para plantillas
 */
export const generateExampleData = (columns: ExcelColumn[], count: number = 1): Record<string, unknown>[] => {
  return Array.from({ length: count }, () => 
    columns.reduce((acc, col) => {
      acc[col.key] = col.example || '';
      return acc;
    }, {} as Record<string, unknown>)
  );
};