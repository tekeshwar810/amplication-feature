import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";

export type ExpenseWhereInput = {
  exprensename?: StringNullableFilter;
  id?: StringFilter;
};
