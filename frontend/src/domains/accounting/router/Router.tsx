import { Route, Routes } from "react-router-dom";

import {
  ChartOfAccountRouter,
  GeneralJournalRouter,
  GeneralLedgerRouter,
  InventoryAndBalanceStatementRouter,
} from '../pages';

import { ACCOUNTING_ROUTES } from '@/router';

export const Router = () => {
  return (
    <Routes>
      <Route path={ACCOUNTING_ROUTES.CHART_OF_ACCOUNT} element={<ChartOfAccountRouter />} />
      <Route path={ACCOUNTING_ROUTES.GENERAL_JOURNAL} element={<GeneralJournalRouter />} />
      <Route path={ACCOUNTING_ROUTES.GENERAL_LEDGER} element={<GeneralLedgerRouter />} />
      <Route path={ACCOUNTING_ROUTES.INVENTORY_AND_BALANCE_STATEMENT} element={<InventoryAndBalanceStatementRouter />} />
    </Routes>
  );
};