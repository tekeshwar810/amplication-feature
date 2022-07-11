import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";

export type BranchWhereInput = {
  address?: StringNullableFilter;
  branchCode?: StringNullableFilter;
  branchName?: StringNullableFilter;
  id?: StringFilter;
};
