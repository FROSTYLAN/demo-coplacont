import React from 'react';
import { PageLayout, Text, Button, Badge } from '@/components';
import { useNavigate } from 'react-router-dom';
import { MAIN_ROUTES, SETTINGS_ROUTES } from '@/router';
import styles from './MainPage.module.scss';

/**
 * Interfaz para las tarjetas del dashboard de configuración
 */
interface ConfigCard {
  title: string;
  description: string;
  icon: string;
  path: string;
  badge?: {
    text: string;
    variant: 'success' | 'warning' | 'danger' | 'info' | 'default';
  };
  actions: {
    label: string;
    variant: 'primary' | 'secondary';
  }[];
}

/**
 * Componente principal del Dashboard de Configuración
 * Proporciona acceso rápido a todas las funcionalidades de configuración
 */
export const MainPage: React.FC = () => {
  const navigate = useNavigate();

  /**
   * Navegar a una ruta específica
   */
  const handleNavigation = (path: string) => {
    navigate(path);
  };

  /**
   * Configuración de las tarjetas del dashboard
   */
  const configCards: ConfigCard[] = [
    {
      title: 'Periodos Contables',
      description: 'Gestiona los periodos contables y métodos de valoración del sistema',
      icon: '📅',
      path: `${MAIN_ROUTES.SETTINGS}${SETTINGS_ROUTES.ACCOUNTING_PERIODS}`,
      badge: {
        text: 'Activo',
        variant: 'success'
      },
      actions: [
        {
          label: 'Gestionar Periodos',
          variant: 'primary'
        }
      ]
    },
    {
      title: 'Métodos de Valoración',
      description: 'Configura los métodos de valoración de inventario disponibles',
      icon: '⚖️',
      path: `${MAIN_ROUTES.SETTINGS}${SETTINGS_ROUTES.VALUATION_METHODS}`,
      actions: [
        {
          label: 'Configurar Métodos',
          variant: 'primary'
        }
      ]
    },
    {
      title: 'Usuarios y Roles',
      description: 'Administra usuarios del sistema y sus permisos',
      icon: '👥',
      path: `${MAIN_ROUTES.SETTINGS}${SETTINGS_ROUTES.USERS}`,
      badge: {
        text: 'Admin',
        variant: 'info'
      },
      actions: [
        {
          label: 'Gestionar Usuarios',
          variant: 'primary'
        }
      ]
    },
    {
      title: 'Parámetros del Sistema',
      description: 'Configura parámetros generales y opciones avanzadas',
      icon: '⚙️',
      path: `${MAIN_ROUTES.SETTINGS}${SETTINGS_ROUTES.PARAMS}`,
      actions: [
        {
          label: 'Ver Parámetros',
          variant: 'primary'
        }
      ]
    }
  ];

  /**
   * Acciones rápidas del dashboard
   */
  const quickActions = [
    {
      icon: '➕',
      label: 'Nuevo Periodo',
      description: 'Crear nuevo periodo contable',
      onClick: () => handleNavigation(`${MAIN_ROUTES.SETTINGS}${SETTINGS_ROUTES.ACCOUNTING_PERIODS}`)
    },
    {
      icon: '🔄',
      label: 'Cambiar Método',
      description: 'Actualizar método de valoración',
      onClick: () => handleNavigation(`${MAIN_ROUTES.SETTINGS}${SETTINGS_ROUTES.VALUATION_METHODS}`)
    },
    {
      icon: '👤',
      label: 'Nuevo Usuario',
      description: 'Agregar usuario al sistema',
      onClick: () => handleNavigation(`${MAIN_ROUTES.SETTINGS}${SETTINGS_ROUTES.USERS}`)
    },
    {
      icon: '📊',
      label: 'Ver Reportes',
      description: 'Acceder a reportes de configuración',
      onClick: () => handleNavigation(`${MAIN_ROUTES.SETTINGS}${SETTINGS_ROUTES.PARAMS}`)
    }
  ];

  return (
    <PageLayout title="Panel de Configuración">
      <div className={styles.dashboardContainer}>
        {/* Header */}
        <div className={styles.header}>
          <div className={styles.titleSection}>
            <Text as="h1" size="3xl" weight={600} color="neutral-primary">
              Panel de Configuración
            </Text>
            <Text size="lg" color="neutral-secondary" className={styles.subtitle}>
              Gestiona la configuración general del sistema contable
            </Text>
          </div>
        </div>

        {/* Tarjetas principales */}
        <div className={styles.cardsSection}>
          <Text size="xl" weight={600} color="neutral-primary" className={styles.sectionTitle}>
            Módulos de Configuración
          </Text>
          <div className={styles.cardsGrid}>
            {configCards.map((card, index) => (
              <div key={index} className={styles.configCard}>
                <div className={styles.cardHeader}>
                  <div className={styles.cardIcon}>
                    <span>{card.icon}</span>
                  </div>
                  <div className={styles.cardTitleSection}>
                    <div className={styles.cardTitleRow}>
                      <Text size="lg" weight={600} color="neutral-primary">
                        {card.title}
                      </Text>
                      {card.badge && (
                        <Badge variant={card.badge.variant} size="small">
                          {card.badge.text}
                        </Badge>
                      )}
                    </div>
                    <Text size="sm" color="neutral-secondary" className={styles.cardDescription}>
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
                      onClick={() => handleNavigation(card.path)}
                      className={styles.cardButton}
                    >
                      {action.label}
                    </Button>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Acciones rápidas */}
        <div className={styles.quickActionsSection}>
          <Text size="xl" weight={600} color="neutral-primary" className={styles.sectionTitle}>
            Acciones Rápidas
          </Text>
          <div className={styles.quickActionsGrid}>
            {quickActions.map((action, index) => (
              <button
                key={index}
                className={styles.quickActionItem}
                onClick={action.onClick}
              >
                <span className={styles.quickActionIcon}>{action.icon}</span>
                <div className={styles.quickActionContent}>
                  <Text size="sm" weight={500} color="neutral-primary">
                    {action.label}
                  </Text>
                  <Text size="xs" color="neutral-secondary">
                    {action.description}
                  </Text>
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* Información del sistema */}
        <div className={styles.systemInfoSection}>
          <div className={styles.systemInfoCard}>
            <Text size="lg" weight={600} color="neutral-primary" className={styles.systemInfoTitle}>
              Estado del Sistema
            </Text>
            <div className={styles.systemInfoGrid}>
              <div className={styles.systemInfoItem}>
                <Text size="sm" color="neutral-secondary">Periodo Activo</Text>
                <div className={styles.systemInfoValue}>
                  <Text size="sm" weight={500} color="neutral-primary">Enero 2024</Text>
                  <Badge variant="success" size="small">Activo</Badge>
                </div>
              </div>
              <div className={styles.systemInfoItem}>
                <Text size="sm" color="neutral-secondary">Método de Valoración</Text>
                <div className={styles.systemInfoValue}>
                  <Text size="sm" weight={500} color="neutral-primary">Promedio Ponderado</Text>
                  <Badge variant="info" size="small">Configurado</Badge>
                </div>
              </div>
              <div className={styles.systemInfoItem}>
                <Text size="sm" color="neutral-secondary">Usuarios Activos</Text>
                <div className={styles.systemInfoValue}>
                  <Text size="sm" weight={500} color="neutral-primary">5 usuarios</Text>
                  <Badge variant="default" size="small">Online</Badge>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </PageLayout>
  );
};

export default MainPage;