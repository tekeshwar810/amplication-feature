import { StringNullableFilter } from "../../util/StringNullableFilter";
import { IntNullableFilter } from "../../util/IntNullableFilter";
import { StringFilter } from "../../util/StringFilter";

export type BranchWhereInput = {
  address?: StringNullableFilter;
  branchCode?: StringNullableFilter;
  branchmanagerid?: IntNullableFilter;
  branchName?: StringNullableFilter;
  id?: StringFilter;
};
