import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { UserListRelationFilter } from "../user/UserListRelationFilter";

export type BranchWhereInput = {
  address?: StringNullableFilter;
  branchCode?: StringNullableFilter;
  branchName?: StringNullableFilter;
  id?: StringFilter;
  userId?: UserListRelationFilter;
};
