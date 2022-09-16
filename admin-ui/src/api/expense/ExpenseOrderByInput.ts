import { SortOrder } from "../../util/SortOrder";

export type ExpenseOrderByInput = {
  createdAt?: SortOrder;
  exprensename?: SortOrder;
  id?: SortOrder;
  updatedAt?: SortOrder;
};
