import { useCallback } from 'react';
import { downloadExcelTemplate, type ExcelColumn } from '@/shared';

/**
 * Hook para descargar plantilla de compras
 */
export const usePurchasesTemplateDownload = () => {
  
  /**
   * Descarga una plantilla de Excel para compras
   */
  const downloadPurchasesTemplate = useCallback(() => {
    const purchasesColumns: ExcelColumn[] = [
      { key: 'correlativo', label: 'Correlativo', example: 'C-001' },
      { key: 'tipoComprobante', label: 'Tipo Comprobante', example: 'Factura' },
      { key: 'serie', label: 'Serie', example: 'F001' },
      { key: 'numero', label: 'Número', example: '001' },
      { key: 'fechaEmision', label: 'Fecha Emisión', example: '15/08/2025' },
      { key: 'fechaVencimiento', label: 'Fecha Vencimiento', example: '30/08/2025' },
      { key: 'moneda', label: 'Moneda', example: 'PEN' },
      { key: 'tipoCambio', label: 'Tipo Cambio', example: '3.75' },
      { key: 'totalGravada', label: 'Total Gravada', example: '100.00' },
      { key: 'totalExonerada', label: 'Total Exonerada', example: '0.00' },
      { key: 'totalInafecta', label: 'Total Inafecta', example: '0.00' },
      { key: 'totalIgv', label: 'Total IGV', example: '18.00' },
      { key: 'totalIsc', label: 'Total ISC', example: '0.00' },
      { key: 'totalGeneral', label: 'Total General', example: '118.00' }
    ];

    downloadExcelTemplate(
      purchasesColumns,
      'plantilla_compras_coplacont.csv',
      true
    );
  }, []);

  return {
    downloadPurchasesTemplate,
  };
};