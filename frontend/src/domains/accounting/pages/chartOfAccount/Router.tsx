import { Route, Routes } from "react-router-dom";

import { MainPage } from '.';

export const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<MainPage />} />
    </Routes>
  );
};