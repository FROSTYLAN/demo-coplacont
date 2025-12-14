import { Route, Routes } from "react-router-dom";
import MainPage from "./MainPage";
import RegisterPage from "./RegisterPage";

/**
 * Router component for operations pages
 * Handles routing between operations listing and registration
 */
const OperationsRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<MainPage />} />
      <Route path="/register" element={<RegisterPage />} />
    </Routes>
  );
};

export default OperationsRouter;