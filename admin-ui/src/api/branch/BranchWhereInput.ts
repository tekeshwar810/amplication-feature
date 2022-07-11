import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type BranchWhereInput = {
  address?: StringNullableFilter;
  branchCode?: StringNullableFilter;
  branchName?: StringNullableFilter;
  id?: StringFilter;
  managerid?: UserWhereUniqueInput;
};
