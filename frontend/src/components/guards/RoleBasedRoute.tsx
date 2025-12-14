import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { useAuth } from '@/domains/auth';
import { Loader } from '@/components';
import { 
  hasRouteAccess, 
  getDefaultRedirectRoute, 
  USER_ROLES,
  type UserRole 
} from '@/shared/constants/rolePermissions';

interface RoleBasedRouteProps {
  children: React.ReactNode;
  requiredRoles?: UserRole[];
  fallbackRoute?: string;
}

/**
 * Componente para proteger rutas basado en roles de usuario
 * Verifica si el usuario tiene los permisos necesarios para acceder a la ruta actual
 */
export const RoleBasedRoute: React.FC<RoleBasedRouteProps> = ({ 
  children, 
  requiredRoles,
  fallbackRoute 
}) => {
  const { user, isAuthenticated, isLoading } = useAuth();
  const location = useLocation();

  // Mostrar loader mientras se verifica la autenticación
  if (isLoading) {
    return <Loader />;
  }

  // Si no está autenticado, no debería llegar aquí (ProtectedRoute se encarga)
  // pero por seguridad, redirigimos
  if (!isAuthenticated || !user) {
    return <Navigate to="/auth/login" replace />;
  }

  // Obtener el rol del usuario (tomar el primer rol si tiene múltiples)
  const userRole = user.roles?.[0]?.nombre as UserRole;
  
  if (!userRole || !Object.values(USER_ROLES).includes(userRole)) {
    console.error('Usuario sin rol válido:', user);
    return <Navigate to="/auth/login" replace />;
  }

  // Si se especificaron roles requeridos, verificar si el usuario los tiene
  if (requiredRoles && requiredRoles.length > 0) {
    const hasRequiredRole = requiredRoles.includes(userRole);
    if (!hasRequiredRole) {
      const redirectRoute = fallbackRoute || getDefaultRedirectRoute(userRole);
      return <Navigate to={redirectRoute} replace />;
    }
  }

  // Verificar si el usuario tiene acceso a la ruta actual
  const currentPath = location.pathname;
  const hasAccess = hasRouteAccess(userRole, currentPath);

  if (!hasAccess) {
    const redirectRoute = fallbackRoute || getDefaultRedirectRoute(userRole);
    console.log(`Usuario ${userRole} sin acceso a ${currentPath}, redirigiendo a ${redirectRoute}`);
    return <Navigate to={redirectRoute} replace />;
  }

  // Si tiene acceso, renderizar el contenido
  return <>{children}</>;
};