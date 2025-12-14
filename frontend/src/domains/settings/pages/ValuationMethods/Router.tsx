import { Route, Routes } from "react-router-dom";

import { MainPage } from './MainPage';

/**
 * Router para el módulo de métodos de valoración
 * Define las rutas disponibles para la gestión de métodos de valoración
 */
export const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<MainPage />} />
    </Routes>
  );
};