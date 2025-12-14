# Patrón de Diseño Atómico - Estructura del Proyecto

Este proyecto implementa el **Patrón de Diseño Atómico** (Atomic Design) creado por Brad Frost. Esta metodología organiza los componentes de UI en una jerarquía que va desde los elementos más básicos hasta las páginas completas.

## 🏗️ Estructura de Carpetas

```
src/
├── components/          # Componentes reutilizables
│   ├── atoms/          # Elementos básicos e indivisibles
│   ├── molecules/      # Grupos de átomos funcionando juntos
│   ├── organisms/      # Grupos de moléculas formando secciones
│   └── templates/      # Estructuras de página sin contenido
├── domains/            # Módulos de dominio
│   ├── auth/          # Autenticación y autorización
│   ├── accounting/    # Contabilidad general
│   ├── inventory/     # Gestión de inventario
│   ├── transactions/  # Transacciones comerciales
│   └── settings/      # Configuración del sistema
├── shared/             # Recursos compartidos
│   ├── hooks/         # Custom hooks de React
│   ├── services/      # Servicios y APIs
│   ├── types/         # Definiciones de tipos TypeScript
│   └── utils/         # Funciones utilitarias
└── styles/            # Estilos globales y variables
```

## ⚛️ Átomos (Atoms)

Los elementos más básicos de la interfaz. No pueden dividirse más sin perder su funcionalidad.

### Componentes Implementados:
- **Button**: Botón reutilizable con variantes (primary, secondary, danger)
- **Input**: Campo de entrada con validación y estados
- **Loader**: Indicador de carga
- **Icon**: Sistema de iconografía
- **Typography**: Componentes de texto (títulos, párrafos)

### Características:
- Altamente reutilizables
- Sin dependencias de otros componentes
- Props bien definidas con TypeScript
- Estilos modulares con SCSS

## 🧬 Moléculas (Molecules)

Combinaciones de átomos que trabajan juntos como una unidad.

### Componentes Implementados:
- **FormField**: Combina Input + Label + Mensajes de error
- **SearchBar**: Barra de búsqueda con iconos y botones
- **Card**: Contenedor flexible para mostrar contenido
- **DataDisplay**: Visualización de datos con etiquetas

### Características:
- Combinan múltiples átomos
- Tienen una función específica
- Reutilizables en diferentes contextos
- Manejan estados simples

## 🦠 Organismos (Organisms)

Grupos de moléculas y/o átomos que forman secciones complejas de la interfaz.

### Componentes Implementados:
- **LoginForm**: Formulario completo de inicio de sesión
- **DataTable**: Tabla de datos con ordenamiento y filtros
- **Navigation**: Sistema de navegación con menús
- **Header**: Encabezado de la aplicación

### Características:
- Funcionalidad completa y específica
- Pueden contener lógica de negocio
- Integración con servicios y APIs
- Estados complejos y efectos

## 📄 Templates

Definen la estructura y layout de las páginas sin contenido específico.

### Componentes Implementados:
- **MainLayout**: Layout principal con header, sidebar y contenido
- **AuthLayout**: Layout para páginas de autenticación
- **DashboardLayout**: Layout para páginas del dashboard

### Características:
- Definen la estructura de la página
- Manejan la disposición de organismos
- Responsive design incluido
- Contextos y providers globales

## 🏢 Dominios

Módulos funcionales que agrupan características relacionadas.

### Módulos Implementados:
- **Auth**: Autenticación y gestión de usuarios
- **Accounting**: Contabilidad y finanzas
- **Inventory**: Control de inventario
- **Transactions**: Compras y ventas
- **Settings**: Configuración del sistema

### Características:
- Organización por funcionalidad
- Encapsulación de lógica de negocio
- Servicios y tipos específicos
- Páginas y componentes propios

## 🚀 Ventajas del Patrón Atómico

1. **Reutilización**: Componentes modulares y versátiles
2. **Mantenibilidad**: Cambios localizados y predecibles
3. **Consistencia**: Design system coherente
4. **Escalabilidad**: Fácil agregar nuevos componentes
5. **Testing**: Pruebas unitarias y de integración
6. **Documentación**: Estructura clara y organizada

## 🛠️ Tecnologías Utilizadas

- **React 18** con TypeScript
- **Vite** como bundler
- **SCSS Modules** para estilos
- **ESLint** y **Prettier** para calidad de código

## 📋 Convenciones de Código

### Nomenclatura:
- Componentes: PascalCase (`Button`, `FormField`)
- Archivos: PascalCase para componentes (`Button.tsx`)
- Estilos: camelCase para módulos (`styles.module.scss`)
- Props: camelCase con interfaces tipadas

### Estructura de Componentes:
```typescript
// 1. Imports
import React from 'react';
import styles from './Component.module.scss';

// 2. Interface de Props
export interface ComponentProps {
  // props definition
}

// 3. Componente
export const Component: React.FC<ComponentProps> = (props) => {
  // component logic
};

// 4. Export default
export default Component;
```

### Exports:
- Cada módulo tiene su `index.ts` para exports limpios
- Exports nombrados para componentes
- Tipos exportados junto con componentes

## 🎯 Próximos Pasos

1. Implementar Storybook para documentación
2. Agregar pruebas unitarias y de integración
3. Mejorar el sistema de temas
4. Optimizar el rendimiento de componentes
5. Implementar lazy loading
6. Añadir animaciones y transiciones
7. Mejorar la accesibilidad

## 📚 Recursos

- [Atomic Design por Brad Frost](https://atomicdesign.bradfrost.com/)
- [React TypeScript Cheatsheet](https://react-typescript-cheatsheet.netlify.app/)
- [SCSS Modules](https://github.com/css-modules/css-modules)

---

**Nota:** Esta estructura está diseñada para ser escalable y mantenible, facilitando el desarrollo de nuevas características y la reutilización de componentes.