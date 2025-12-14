import React from "react";
import { Route, Routes } from "react-router-dom";

import { 
    BalanceSheetRouter, 
    IncomeStatementRouter,
    CashFlowStatementRouter,
    StatementOfChangesInEquityRouter,
    CostOfSalesStatementRouter,
    CostOfSalesStatementByInventoryRouter
} from '../pages'
import { FINANCIAL_STATEMENTS_ROUTES } from '@/router';

export const Router : React.FC = () => {
  return (
    <Routes>
      <Route path={FINANCIAL_STATEMENTS_ROUTES.BALANCE_SHEET} element={<BalanceSheetRouter />} />
      <Route path={FINANCIAL_STATEMENTS_ROUTES.INCOME_STATEMENT} element={<IncomeStatementRouter />} />
      <Route path={FINANCIAL_STATEMENTS_ROUTES.CASH_FLOW_STATEMENT} element={<CashFlowStatementRouter />} />
      <Route path={FINANCIAL_STATEMENTS_ROUTES.STATEMENT_OF_CHANGES_IN_EQUITY} element={<StatementOfChangesInEquityRouter />} />
      <Route path={FINANCIAL_STATEMENTS_ROUTES.COST_OF_SALES_STATEMENT} element={<CostOfSalesStatementRouter />} />
      <Route path={FINANCIAL_STATEMENTS_ROUTES.COST_OF_SALES_STATEMENT_BY_INVENTORY} element={<CostOfSalesStatementByInventoryRouter />} />
    </Routes>
  );
};