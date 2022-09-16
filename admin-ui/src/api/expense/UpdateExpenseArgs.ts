import { ExpenseWhereUniqueInput } from "./ExpenseWhereUniqueInput";
import { ExpenseUpdateInput } from "./ExpenseUpdateInput";

export type UpdateExpenseArgs = {
  where: ExpenseWhereUniqueInput;
  data: ExpenseUpdateInput;
};
