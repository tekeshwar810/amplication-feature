import { Expense as TExpense } from "../api/expense/Expense";

export const EXPENSE_TITLE_FIELD = "exprensename";

export const ExpenseTitle = (record: TExpense): string => {
  return record.exprensename || record.id;
};
