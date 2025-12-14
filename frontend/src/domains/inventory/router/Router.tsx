import { Route, Routes } from "react-router-dom";

import { 
    KardexRouter,
    InventoryAdjusmentRouter,
    InventoryRouter
} from '../pages';
import { INVENTORY_ROUTES } from '@/router';

export const Router = () => {
  return (
    <Routes>
      <Route path={INVENTORY_ROUTES.KARDEX} element={<KardexRouter />} />
      <Route path={INVENTORY_ROUTES.INVENTORY_ADJUSTMENT} element={<InventoryAdjusmentRouter />} />
      <Route path={INVENTORY_ROUTES.INVENTORY} element={<InventoryRouter />} />
    </Routes>
  );
};