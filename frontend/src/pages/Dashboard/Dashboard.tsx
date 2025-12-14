import React from 'react';
import { PageLayout, Text, Button } from '@/components';
import { useNavigate } from 'react-router-dom';
import { MAIN_ROUTES, TRANSACTIONS_ROUTES, INVENTORY_ROUTES, FINANCIAL_STATEMENTS_ROUTES, MAINTAINERS_ROUTES } from '@/router';
import { useAuth } from '@/domains/auth';
import styles from './Dashboard.module.scss';

/**
 * Componente principal del Dashboard
 * Muestra un resumen de las funcionalidades principales del sistema
 */
export const Dashboard: React.FC = () => {
  const navigate = useNavigate();
  const { user } = useAuth();

  // Construir el nombre completo del usuario
  const userName = user?.persona 
    ? user.persona.nombreEmpresa
    : user?.email || 'Usuario';

  const userRole= user?.roles[0].nombre;

  /**
   * Configuración de las tarjetas del dashboard
   */
  const dashboardCards = [
    {
      title: 'Transacciones',
      description: 'Gestiona compras y ventas del negocio',
      icon: '💼',
      actions: [
        { 
          label: 'Ver Compras', 
          path: `${MAIN_ROUTES.TRANSACTIONS}${TRANSACTIONS_ROUTES.PURCHASES}`,
          variant: 'primary' as const
        },
        { 
          label: 'Ver Ventas', 
          path: `${MAIN_ROUTES.TRANSACTIONS}${TRANSACTIONS_ROUTES.SALES}`,
          variant: 'secondary' as const
        }
      ]
    },
    {
      title: 'Inventario',
      description: 'Control de stock y movimientos de inventario',
      icon: '📦',
      actions: [
        { 
          label: 'Ver Inventario', 
          path: `${MAIN_ROUTES.INVENTORY}${INVENTORY_ROUTES.INVENTORY}`,
          variant: 'primary' as const
        },
        { 
          label: 'Ver Kardex', 
          path: `${MAIN_ROUTES.INVENTORY}${INVENTORY_ROUTES.KARDEX}`,
          variant: 'secondary' as const
        }
      ]
    },
    {
      title: 'Estados Financieros',
      description: 'Reportes y análisis financiero',
      icon: '📊',
      actions: [
        { 
          label: 'Costo de Ventas', 
          path: `${MAIN_ROUTES.FINANCIAL_STATEMENTS}${FINANCIAL_STATEMENTS_ROUTES.COST_OF_SALES_STATEMENT}`,
          variant: 'primary' as const
        },
        { 
          label: 'Costo Consolidado', 
          path: `${MAIN_ROUTES.FINANCIAL_STATEMENTS}${FINANCIAL_STATEMENTS_ROUTES.COST_OF_SALES_STATEMENT_BY_INVENTORY}`,
          variant: 'secondary' as const
        }
      ]
    }
  ];

  /**
   * Maneja la navegación a una ruta específica
   */
  const handleNavigation = (path: string) => {
    navigate(path);
  };

  return (
    <PageLayout
      title="Panel de control"
      subtitle="Accede directamente a las funcionalidades principales del sistema de gestión contable"
    >
      <div className={styles.dashboard}>
        {/* Sección de bienvenida */}
        <div className={styles.welcomeSection}>
          <div className={styles.welcomeContent}>
            <Text size="2xl" weight={600} color="neutral-primary">
              ¡Bienvenido, {userName}!
            </Text>
          </div>
        </div>
        
        { userRole !== 'ADMIN' &&
          <>
        <div className={styles.cardsGrid}>
          {dashboardCards.map((card, index) => (
            <div key={index} className={styles.card}>
              <div className={styles.cardHeader}>
                <div className={styles.cardIcon}>
                  <span>{card.icon}</span>
                </div>
                <div className={styles.cardInfo}>
                  <Text size="xl" weight={600} color="neutral-primary">
                    {card.title}
                  </Text>
                  <Text size="sm" color="neutral-secondary">
                    {card.description}
                  </Text>
                </div>
              </div>
              <div className={styles.cardActions}>
                {card.actions.map((action, actionIndex) => (
                  <Button
                    key={actionIndex}
                    variant={action.variant}
                    size="medium"
                    onClick={() => handleNavigation(action.path)}
                  >
                    {action.label}
                  </Button>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className={styles.quickAccessSection}>
          <Text size="xl" weight={600} color="neutral-primary" className={styles.sectionTitle}>
            Accesos Rápidos
          </Text>
          <div className={styles.quickAccessGrid}>
            <button 
              className={styles.quickAccessItem}
              onClick={() => handleNavigation(`${MAIN_ROUTES.TRANSACTIONS}${TRANSACTIONS_ROUTES.PURCHASES}/register`)}
            >
              <span className={styles.quickAccessIcon}>➕</span>
              <Text size="sm" weight={500}>Nueva Compra</Text>
            </button>
            <button 
              className={styles.quickAccessItem}
              onClick={() => handleNavigation(`${MAIN_ROUTES.TRANSACTIONS}${TRANSACTIONS_ROUTES.SALES}/register`)}
            >
              <span className={styles.quickAccessIcon}>💰</span>
              <Text size="sm" weight={500}>Nueva Venta</Text>
            </button>
            <button 
              className={styles.quickAccessItem}
              onClick={() => handleNavigation(`${MAIN_ROUTES.MAINTAINERS}${MAINTAINERS_ROUTES.PRODUCTS}`)}
            >
              <span className={styles.quickAccessIcon}>📝</span>
              <Text size="sm" weight={500}>Nuevo Producto</Text>
            </button>
            <button 
              className={styles.quickAccessItem}
              onClick={() => handleNavigation(`${MAIN_ROUTES.INVENTORY}${INVENTORY_ROUTES.INVENTORY}`)}
            >
              <span className={styles.quickAccessIcon}>📋</span>
              <Text size="sm" weight={500}>Ver Stock</Text>
            </button>
          </div>
        </div>
        </>
        }
      </div>
    </PageLayout>
  );
};