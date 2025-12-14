import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { MainPage } from './MainPage';

/**
 * Router para el Dashboard de Configuración
 * Define las rutas disponibles dentro del módulo de dashboard
 */
export const Router: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<MainPage />} />
    </Routes>
  );
};