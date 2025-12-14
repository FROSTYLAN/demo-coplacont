# Sistema de Enrutamiento - CoPlaCont Frontend

## 📋 Descripción

Este documento describe la implementación del sistema de enrutamiento usando **React Router DOM v6** en el proyecto CoPlaCont Frontend.

## 🛣️ Rutas Implementadas

### Rutas Públicas
| Ruta | Componente | Descripción |
|------|------------|-------------|
| `/auth/login` | `LoginPage` | Página de inicio de sesión |
| `/auth/recovery-password` | `RecoveryPasswordPage` | Página de recuperación de contraseña |
| `/auth/new-password` | `NewPasswordPage` | Página para establecer nueva contraseña |
| `/auth` | Redirección | Redirecciona automáticamente a `/auth/login` |

### Rutas Protegidas
| Ruta | Componente | Descripción |
|------|------------|-------------|
| `/` | `HomePage` | Página de inicio del dashboard |
| `/compras` | `PurchasePage` | Gestión de compras |
| `/ventas` | `SalePage` | Gestión de ventas |
| `/caja` | `CashPage` | Control de caja |
| `/asientos-manuales` | `ManualJournalEntry` | Asientos contables manuales |
| `/planillas` | `PayrollPage` | Gestión de planillas |
| `/productos` | `ProductPage` | Gestión de productos |
| `/kardex` | `KardexPage` | Control de kardex |
| `/ajustes-inventario` | `InventoryAdjustment` | Ajustes de inventario |
| `/plan-cuentas` | `ChartOfAccountPage` | Plan de cuentas contable |
| `/libro-diario` | `GeneralJournalPage` | Libro diario |
| `/libro-mayor` | `GeneralLedgerPage` | Libro mayor |
| `/libro-inventario-balance` | `InventoryAndBalanceStatementPage` | Libro de inventarios y balances |
| `/hoja-trabajo` | `AccountingWorksheetPage` | Hoja de trabajo contable |
| `/hoja-comprobacion` | `TrialBalancePage` | Balance de comprobación |
| `/ajustes-cierre` | `ClosingAdjustmentPage` | Ajustes de cierre contable |
| `/balance-general` | `BalanceSheetPage` | Balance general |
| `/estado-resultados` | `IncomeStatementPage` | Estado de resultados |
| `/flujo-efectivo` | `CashFlowStatementPage` | Estado de flujo de efectivo |
| `/estado-patrimonio` | `StatementOfChangesInEquityPage` | Estado de cambios en el patrimonio |
| `/periodos-contables` | `AccountingPeriodPage` | Gestión de períodos contables |
| `/usuarios-roles` | `UserAndRolesPage` | Gestión de usuarios y roles |
| `/parametros` | `ParamsPage` | Configuración de parámetros |
| `*` | Redirección | Cualquier ruta no encontrada redirecciona a `/` |

## 🏗️ Estructura del Router

```
src/
├── router/
│   ├── AppRouter.tsx       # Configuración principal de rutas
│   ├── ProtectedRoute.tsx  # Componente para rutas protegidas
│   ├── PublicRoute.tsx     # Componente para rutas públicas
│   ├── IRouteProps.ts      # Interfaces de tipado
│   └── index.ts           # Exports del router
└── domains/               # Módulos de dominio con sus páginas
    ├── auth/
    ├── transactions/
    ├── inventory/
    ├── accounting/
    ├── financial-closing/
    ├── financial-statements/
    └── settings/
```

## 🔧 Configuración Técnica

### Componentes de Enrutamiento

#### ProtectedRoute
Componente que protege las rutas que requieren autenticación:
- Verifica si el usuario está autenticado
- Redirige a `/auth/login` si no hay sesión
- Muestra un loader mientras verifica la autenticación

#### PublicRoute
Componente para rutas públicas:
- Accesible sin autenticación
- Redirige a `/` si el usuario ya está autenticado
- Ideal para páginas de autenticación

#### MainLayout
Layout principal para rutas protegidas:
- Incluye navegación principal
- Sidebar con menú de opciones
- Header con información de usuario
- Área de contenido principal

## 🚀 Cómo Usar

### Agregar Nueva Ruta Protegida

```typescript
// En AppRouter.tsx
<Route element={<ProtectedRoute />}>
  <Route element={<MainLayout />}>
    <Route path="/nueva-ruta" element={<NuevaPagina />} />
  </Route>
</Route>
```

### Agregar Nueva Ruta Pública

```typescript
// En AppRouter.tsx
<Route element={<PublicRoute />}>
  <Route path="/auth/nueva-ruta" element={<NuevaPagina />} />
</Route>
```

### Navegación Programática

```typescript
import { useNavigate } from 'react-router-dom';

const MiComponente = () => {
  const navigate = useNavigate();
  
  const handleClick = () => {
    navigate('/ruta-destino');
  };
  
  return <button onClick={handleClick}>Navegar</button>;
};
```

## 📱 Responsive y Accesibilidad

- Todas las páginas son completamente responsive
- Enlaces con estados hover y focus
- Navegación accesible por teclado
- Semántica HTML correcta

## 🔮 Próximas Mejoras

- [ ] Lazy loading de componentes
- [ ] Breadcrumbs dinámicos
- [ ] Transiciones entre páginas
- [ ] Parámetros de URL dinámicos
- [ ] Query parameters para filtros
- [ ] Historial de navegación
- [ ] Rutas con permisos por rol

## 📚 Recursos

- [React Router DOM Documentation](https://reactrouter.com/)
- [React Router DOM v6 Migration Guide](https://reactrouter.com/upgrading/v5)
- [Atomic Design Pattern](./ATOMIC_DESIGN.md)

---

**Nota:** Este sistema de routing está diseñado para ser escalable y mantenible, siguiendo las mejores prácticas de React Router DOM v6 y la arquitectura de componentes atómicos del proyecto.