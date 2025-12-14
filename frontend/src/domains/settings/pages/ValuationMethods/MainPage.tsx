import React, { useState } from 'react';
import styles from './MainPage.module.scss';
import { 
  PageLayout, 
  Table, 
  Button, 
  Modal, 
  StateTag, 
  Input, 
  Text, 
  ComboBox,
  Loader
} from '@/components';
import { MetodoValoracion, METODO_VALORACION_OPTIONS, formatMetodoValoracion } from '../../types';

interface ValuationMethodConfig {
  id: number;
  metodo: MetodoValoracion;
  descripcion: string;
  activo: boolean;
  fechaCreacion: string;
  fechaActualizacion: string;
}

/**
 * Página principal para la configuración de métodos de valoración
 * Permite gestionar los métodos de valoración disponibles en el sistema
 */
export const MainPage: React.FC = () => {
  const [methods, setMethods] = useState<ValuationMethodConfig[]>([
    {
      id: 1,
      metodo: MetodoValoracion.promedio,
      descripcion: 'Método de valoración por promedio ponderado',
      activo: true,
      fechaCreacion: '2024-01-15',
      fechaActualizacion: '2024-01-15'
    },
    {
      id: 2,
      metodo: MetodoValoracion.fifo,
      descripcion: 'Método de valoración FIFO (Primero en Entrar, Primero en Salir)',
      activo: true,
      fechaCreacion: '2024-01-15',
      fechaActualizacion: '2024-01-15'
    }
  ]);
  
  const [isOpen, setIsOpen] = useState(false);
  const [isView, setIsView] = useState(false);
  const [isCreate, setIsCreate] = useState(false);
  console.log(isCreate);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const [search, setSearch] = useState('');
  const [statusFilter, setStatusFilter] = useState('');
  
  const [selectedMethod] = useState<ValuationMethodConfig | null>(null);
  const [newMethod, setNewMethod] = useState<{
    metodo: MetodoValoracion;
    descripcion: string;
    activo: boolean;
  }>({
    metodo: MetodoValoracion.promedio,
    descripcion: '',
    activo: true
  });

  /**
   * Maneja la creación de un nuevo método
   */
  const handleCreate = async () => {
    try {
      setIsLoading(true);
      setError('');
      
      // Validaciones
      if (!newMethod.descripcion.trim()) {
        setError('La descripción es requerida');
        return;
      }
      
      // Verificar que no exista ya el método
      const exists = methods.some(m => m.metodo === newMethod.metodo);
      if (exists) {
        setError('Este método de valoración ya existe');
        return;
      }
      
      // Crear nuevo método
      const newMethodConfig: ValuationMethodConfig = {
        id: Math.max(...methods.map(m => m.id)) + 1,
        metodo: newMethod.metodo,
        descripcion: newMethod.descripcion,
        activo: newMethod.activo,
        fechaCreacion: new Date().toISOString().split('T')[0],
        fechaActualizacion: new Date().toISOString().split('T')[0]
      };
      
      setMethods(prev => [...prev, newMethodConfig]);
      setIsOpen(false);
      resetForm();
    } catch (error) {
      console.error('Error al crear método:', error);
      setError('Error al crear el método de valoración');
    } finally {
      setIsLoading(false);
    }
  };

  /**
   * Resetea el formulario
   */
  const resetForm = () => {
    setNewMethod({
      metodo: MetodoValoracion.promedio,
      descripcion: '',
      activo: true
    });
    setError('');
  };

  // Filtrado de métodos
  const filteredMethods = methods.filter(method => {
    const matchesSearch = method.descripcion.toLowerCase().includes(search.toLowerCase()) ||
                         formatMetodoValoracion(method.metodo).toLowerCase().includes(search.toLowerCase());
    const matchesStatus = statusFilter === '' || 
                         (statusFilter === 'true' && method.activo) ||
                         (statusFilter === 'false' && !method.activo);
    return matchesSearch && matchesStatus;
  });

  // Configuración de la tabla
  const rows = filteredMethods.map(method => ({
    id: method.id,
    cells: [
      formatMetodoValoracion(method.metodo),
      method.descripcion,
      <StateTag key={`status-${method.id}`} state={method.activo} />
    ]
  }));

  const headers = [
    'Método',
    'Descripción',
    'Estado'
  ];
  
  const gridTemplate = '1fr 2fr 0.8fr';

  return (
    <PageLayout
      title="Métodos de Valoración"
      subtitle="Configuración de métodos de valoración de inventario"
    >
      {/* Filtros */}
      <section className={styles.MainPage}>
        <div className={styles.MainPage__Filter}>
          <Text size="xs" color="neutral-primary">
            Buscar método
          </Text>
          <Input
            placeholder="Buscar..."
            size="xs"
            variant="createSale"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
        <div className={styles.MainPage__Filter}>
          <Text size="xs" color="neutral-primary">
            Estado
          </Text>
          <ComboBox
            options={[
              { label: 'Todos', value: '' },
              { label: 'Activo', value: 'true' },
              { label: 'Inactivo', value: 'false' }
            ]}
            size="xs"
            variant="createSale"
            value={statusFilter}
            onChange={(v) => setStatusFilter(v as string)}
            placeholder="Seleccionar"
          />
        </div>
      </section>

      <Table headers={headers} rows={rows} gridTemplate={gridTemplate} />

      {/* Modal para crear/ver método */}
      <Modal
        isOpen={isOpen}
        onClose={() => {
          setIsOpen(false);
          setIsCreate(false);
          setIsView(false);
          setError('');
          resetForm();
        }}
        title={isView ? 'Detalles del método' : 'Agregar nuevo método'}
        description={
          isView
            ? 'Información del método de valoración seleccionado.'
            : 'Configura un nuevo método de valoración para el inventario.'
        }
        loading={isLoading}
        buttonText="Cerrar"
      >
        <div className={styles.FormMethod}>
          {/* Método de Valoración */}
          <div className={styles.FormMethod__Field}>
            <Text size="xs" color="neutral-primary">
              Método de valoración
            </Text>
            <ComboBox
              placeholder="Selecciona método"
              size="xs"
              variant="createSale"
              value={isView && selectedMethod ? selectedMethod.metodo : newMethod.metodo}
              onChange={(v) => {
                if (!isView) {
                  setNewMethod(prev => ({ ...prev, metodo: v as MetodoValoracion }));
                }
              }}
              options={METODO_VALORACION_OPTIONS}
              disabled={isView}
            />
          </div>

          {/* Descripción */}
          <div className={styles.FormMethod__Field}>
            <Text size="xs" color="neutral-primary">
              Descripción
            </Text>
            <Input
              placeholder="Descripción del método"
              size="xs"
              variant="createSale"
              value={isView && selectedMethod ? selectedMethod.descripcion : newMethod.descripcion}
              onChange={(e) => {
                if (!isView) {
                  setNewMethod(prev => ({ ...prev, descripcion: e.target.value }));
                }
              }}
              disabled={isView}
            />
          </div>

          {/* Estado */}
          <div className={styles.FormMethod__Field}>
            <Text size="xs" color="neutral-primary">
              Estado
            </Text>
            <ComboBox
              placeholder="Selecciona estado"
              size="xs"
              variant="createSale"
              value={isView && selectedMethod ? selectedMethod.activo.toString() : newMethod.activo.toString()}
              onChange={(v) => {
                if (!isView) {
                  setNewMethod(prev => ({ ...prev, activo: v === 'true' }));
                }
              }}
              options={[
                { label: 'Activo', value: 'true' },
                { label: 'Inactivo', value: 'false' }
              ]}
              disabled={isView}
            />
          </div>

          {/* Mostrar error */}
          {error && (
            <Text size="xs" color="danger">
              {error}
            </Text>
          )}

          {/* Botón de acción */}
          {!isView && (
            <Button
              disabled={isLoading}
              size="medium"
              onClick={handleCreate}
            >
              Guardar método
            </Button>
          )}
        </div>
      </Modal>
      
      {isLoading && <Loader text="Procesando..." />}
    </PageLayout>
  );
};