import React, { useState } from 'react';
import { PageLayout, Button, Table  } from '@/components';
import styles from './HomePurchasePage.module.scss';
import { type TableRow } from '@/components/organisms/Table';

/**
 * Interfaz para las transacciones de compra
 */
interface Transaction {
  id: number;
  correlativo: string;
  fecha: string;
  comprobante: string;
  serie: string;
  numero: string;
  total: string;
  status?: string;
}

export const BulkRegisterPage: React.FC = () => {
  // Datos de ejemplo para simular las ventas/compras cargadas
  const [transactions, setTransactions] = useState<Transaction[]>([
    { id: 1, correlativo: 'XXXXXXXXXXXXX', fecha: 'XXXXXXX', comprobante: 'XXXXXXXXXXXXXX', serie: 'XXXXXXXX', numero: 'XXXXXXXX', total: 'XXXXX' },
    { id: 2, correlativo: 'XXXXX XXXXXXXXX', fecha: 'XXXXXXX', comprobante: 'XXXXX@XXXXXX.XXX', serie: 'XX-XX-XXXX', numero: 'XXXXXXXX', total: 'XXXXX' },
    { id: 3, correlativo: 'XXXXX XXXXXXXXX', fecha: 'XXXXXXX', comprobante: 'XXXXX@XXXXXX.XXX', serie: 'XX-XX-XXXX', numero: 'XXXXXXXX', total: 'XXXXX' },
    { id: 4, correlativo: 'XXXXX XXXXXXXXX', fecha: 'XXXXXXX', comprobante: 'XXXXX@XXXXXX.XXX', serie: 'XX-XX-XXXX', numero: 'XXXXXXXX', total: 'XXXXX' },
    { id: 5, correlativo: 'XXXXX XXXXXXXXX', fecha: 'XXXXXXX', comprobante: 'XXXXX@XXXXXX.XXX', serie: 'XX-XX-XXXX', numero: 'XXXXXXXX', total: 'XXXXX' },
    { id: 6, correlativo: 'XXXXX XXXXXXXXX', fecha: 'XXXXXXX', comprobante: 'XXXXX@XXXXXX.XXX', serie: 'XX-XX-XXXX', numero: 'XXXXXXXX', total: 'XXXXX' },
    { id: 7, correlativo: 'XXXXX XXXXXXXXX', fecha: 'XXXXXXX', comprobante: 'XXXXX@XXXXXX.XXX', serie: 'XX-XX-XXXX', numero: 'XXXXXXXX', total: 'XXXXX' },
    { id: 8, correlativo: 'XXXXX XXXXXXXXX', fecha: 'XXXXXXX', comprobante: 'XXXXX@XXXXXX.XXX', serie: 'XX-XX-XXXX', numero: 'XXXXXXXX', total: 'XXXXX' },
    { id: 9, correlativo: 'XXXXX XXXXXXXXX', fecha: 'XXXXXXX', comprobante: 'XXXXX@XXXXXX.XXX', serie: 'XX-XX-XXXX', numero: 'XXXXXXXX', total: 'XXXXX' },
  ]);

  // Cabeceras de la tabla
  const headers = [
    'Correlativo',
    'Fecha', 
    'Comprobante',
    'Serie',
    'Número',
    'Total',
    'Estado',
    'Acciones',
  ];

  // Función para manejar el cambio de estado
  const handleToggleStatus = (id: number, currentStatus: string) => {
    setTransactions(prev => 
      prev.map(transaction => 
        transaction.id === id 
          ? { ...transaction, status: currentStatus === 'Procesado' ? 'Pendiente' : 'Procesado' }
          : transaction
      )
    );
  };

  // Transformar datos en filas de tabla
  const rows: TableRow[] = transactions.map((transaction) => ({
    id: transaction.id,
    cells: [
      transaction.correlativo,
      transaction.fecha,
      transaction.comprobante,
      transaction.serie,
      transaction.numero,
      transaction.total,
      (
        <Button
          size="small"
          variant={transaction.status === 'Procesado' ? 'primary' : 'secondary'}
          onClick={() => handleToggleStatus(transaction.id, transaction.status || 'Pendiente')}
        >
          {transaction.status || 'Pendiente'}
        </Button>
      ),
      (
        <div style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
          <Button size="small" variant="secondary">
            📝
          </Button>
          <Button size="small" variant="secondary">
            Ver mas ▼
          </Button>
        </div>
      ),
    ],
  }));

  const handleConfirm = () => {
    // Lógica para confirmar y guardar
    console.log('Confirmando registros...');
  };

  const gridTemplate = '2fr 1fr 2fr 1fr 1fr 1fr 1fr 1.5fr';

  return (
    <PageLayout
      title="Nuevas ventas"
      subtitle="Presenta lista masiva de ventas con acciones para modificar o adjuntar su detalle."
      className={styles.homePurchasePage}
    >
      {/* Tabla de registros */}
      <Table 
        headers={headers} 
        rows={rows} 
        gridTemplate={gridTemplate}
        ariaLabel="Tabla de nuevas ventas masivas"
      />
      
      {/* Botón de confirmación */}
      <div style={{ 
        display: 'flex', 
        justifyContent: 'flex-end', 
        marginTop: '24px',
        paddingTop: '24px'
      }}>
        <Button 
          size="large" 
          variant="primary"
          onClick={handleConfirm}
        >
          Confirmar y guardar
        </Button>
      </div>
    </PageLayout>
  );
};