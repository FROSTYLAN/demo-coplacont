import { Route, Routes } from "react-router-dom";

import { MainPage } from './MainPage'
import { RegisterPage } from './RegisterPage'
import { COMMON_ROUTES } from '@/router';

export const Router = () => {
  return (
    <Routes>
      <Route index element={<MainPage />} />  
      <Route path={COMMON_ROUTES.REGISTER} element={<RegisterPage />} />
    </Routes>
  );
};