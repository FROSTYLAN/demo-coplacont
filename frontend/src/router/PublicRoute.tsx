import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';

import { useAuth } from '../domains/auth';
import { Loader } from '@/components';
import { MAIN_ROUTES } from './routes';

/**
 * Componente para rutas públicas que solo deben ser accesibles sin autenticación
 * Redirige a la página principal si el usuario ya está autenticado
 */
export const PublicRoute: React.FC = () => {
  const { isAuthenticated, isLoading }= useAuth();

  if (isLoading) {
    return <Loader />
  }

  if (isAuthenticated) {
    return <Navigate to={MAIN_ROUTES.HOME} replace />;
  }

  return (
    <Outlet />
  );
};