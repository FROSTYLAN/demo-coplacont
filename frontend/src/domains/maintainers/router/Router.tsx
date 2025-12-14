import { Route, Routes } from "react-router-dom";

import { 
    ProductsRouter,
    CategoriesRouter,
    WarehouseRouter,
    ClientsRouter,
    SuppliersRouter,
} from '../pages';

import { MAINTAINERS_ROUTES } from '@/router';

export const Router = () => {
  return (
    <Routes>
      <Route path={MAINTAINERS_ROUTES.PRODUCTS} element={<ProductsRouter />} />
      <Route path={MAINTAINERS_ROUTES.CATEGORIES} element={<CategoriesRouter />} />
      <Route path={MAINTAINERS_ROUTES.CLIENTS} element={<ClientsRouter />} />
      <Route path={MAINTAINERS_ROUTES.SUPPLIERS} element={<SuppliersRouter />} />
      <Route path={MAINTAINERS_ROUTES.WAREHOUSES} element={<WarehouseRouter />} />
    </Routes> 
  );
};