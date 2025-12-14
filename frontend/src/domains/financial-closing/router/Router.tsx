import { Route, Routes } from "react-router-dom";

import { 
    AccountingWorksheetRouter,
    ClosingAdjustmentRouter,
    TrialBalanceRouter
} from '../pages';
import { FINANCIAL_CLOSING_ROUTES } from '@/router';

export const Router = () => {
  return (
    <Routes>
      <Route path={FINANCIAL_CLOSING_ROUTES.ACCOUNTING_WORKSHEET} element={<AccountingWorksheetRouter />} />
      <Route path={FINANCIAL_CLOSING_ROUTES.CLOSING_ADJUSTMENT} element={<ClosingAdjustmentRouter />} />
      <Route path={FINANCIAL_CLOSING_ROUTES.TRIAL_BALANCE} element={<TrialBalanceRouter />} />
    </Routes>
  );
};