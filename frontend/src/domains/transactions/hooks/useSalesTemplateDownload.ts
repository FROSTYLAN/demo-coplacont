import { useCallback } from 'react';
import { downloadExcelTemplate, type ExcelColumn } from '@/shared';

/**
 * Hook para descargar plantilla de ventas
 */
export const useSalesTemplateDownload = () => {
  
  /**
   * Descarga una plantilla de Excel para ventas
   */
  const downloadSalesTemplate = useCallback(() => {
    const salesColumns: ExcelColumn[] = [
      { key: 'ruc', label: 'Ruc', example: '20608529609' },
      { key: 'razonSocial', label: 'Razon Social', example: 'COMERCIO Y DISTRIBUCION NACIONAL S.A.C.' },
      { key: 'periodo', label: 'Periodo', example: '202507' },
      { key: 'carSunat', label: 'CAR SUNAT', example: '2060852960903BT010000000013' },
      { key: 'fechaEmision', label: 'Fecha de emisión', example: '15/08/2025' },
      { key: 'fechaVencimiento', label: 'Fecha Vcto/Pago', example: '30/08/2025' },
      { key: 'tipoComprobante', label: 'Tipo CP/Doc.', example: '03' },
      { key: 'serieCdp', label: 'Serie del CDP', example: 'BT01' },
      { key: 'numeroCdp', label: 'Nro CP o Doc. Inicial (rango)', example: '13' },
      { key: 'nroFinal', label: 'Nro Final (rango)', example: '' },
      { key: 'tipoDocIdentidad', label: 'Tipo Doc Identidad', example: '1' },
      { key: 'nroDocIdentidad', label: 'Nro Doc Identidad', example: '71059242' },
      { key: 'apellidosNombres', label: 'Apellidos Nombres/ Razón Social', example: '-' },
      { key: 'valorFacturadoExportacion', label: 'Valor Facturado Exportación', example: '0' },
      { key: 'biGravada', label: 'BI Gravada', example: '135.59' },
      { key: 'dsctoBi', label: 'Dscto BI', example: '0'},
      { key: 'igvIpm', label: 'IGV/IPM', example: '24.41'},
      { key: 'dsctoIgvIpm', label: 'Dscto IGV/IPM', example: '0'},
      { key: 'mtoExonerado', label: 'Mto Exonerado', example: '0'},
      { key: 'mtoInafecto', label: 'Mto Inafecto', example: '0'},
      { key: 'isc', label: 'ISC', example: '0'},
      { key: 'biGravIvap', label: 'BI Grav IVAP', example: '0'},
      { key: 'ivap', label: 'IVAP', example: '0'},
      { key: 'icbper', label: 'ICBPER', example: '0'},
      { key: 'otrosTributos', label: 'Otros Tributos', example: '0'},
      { key: 'totalCp', label: 'Total CP', example: '160'},
      { key: 'moneda', label: 'Moneda', example: 'PEN'},
      { key: 'tipoCambio', label: 'Tipo Cambio', example: '1.000'},
      { key: 'fechaEmisionDocModificado', label: 'Fecha Emision Doc Modificado', example: ''},
      { key: 'tipoCpModificado', label: 'Tipo CP Modificado', example: ''},
      { key: 'serieCpModificado', label: 'Serie CP Modificado', example: ''},
      { key: 'nroCpModificado', label: 'Nro CP Modificado', example: ''},
      { key: 'idProyectoOperadoresAtribucion', label: 'ID Proyecto Operadores Atribución', example: ''},
      { key: 'tipoNota', label: 'Tipo de Nota', example: ''},
      { key: 'estComp', label: 'Est. Comp', example: '1'},
      { key: 'valorFobEmbarcado', label: 'Valor FOB Embarcado', example: '0'},
      { key: 'valorOpGratuitas', label: 'Valor OP Gratuitas', example: '0'},
      { key: 'tipoOperacion', label: 'Tipo Operación', example: ''},
      { key: 'damCp', label: 'Dam / CP', example: ''},
      { key: 'clu', label: 'CLU', example: ''}
    ];

    downloadExcelTemplate(
      salesColumns,
      'plantilla_ventas_coplacont.csv',
      true
    );
  }, []);

  return {
    downloadSalesTemplate,
  };
};