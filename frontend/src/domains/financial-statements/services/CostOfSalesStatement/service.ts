import { handleApiError } from "@/shared";
import { financialStatementsApi } from "../../api/financialStatementsApi";
import type { CostOfSalesParams } from "../../api/financialStatementsApi";
import type { CostOfSalesStatement, CostOfSalesStatementByInventory } from "./types";

export class CostOfSalesStatementService {
  static async getCostOfSalesStatement(params: CostOfSalesParams): Promise<CostOfSalesStatement> {
    try {
      const response = await financialStatementsApi.getCostOfSalesStatement(params);
      return response.data;
    } catch (error) {
      throw handleApiError(error);
    }
  };
  
  static async getCostOfSalesStatementByInventory(params: CostOfSalesParams): Promise<CostOfSalesStatementByInventory> {
    try {
      const response = await financialStatementsApi.getCostOfSalesStatementByInventory(params);
      return response.data;
    } catch (error) {
      throw handleApiError(error);
    }
  }
}
