import { StringNullableFilter } from "../../util/StringNullableFilter";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";
import { StringFilter } from "../../util/StringFilter";

export type BranchWhereInput = {
  address?: StringNullableFilter;
  branchCode?: StringNullableFilter;
  branchmanagerid?: UserWhereUniqueInput;
  branchName?: StringNullableFilter;
  id?: StringFilter;
  status?: StringNullableFilter;
};
