import { BranchWhereUniqueInput } from "../branch/BranchWhereUniqueInput";
import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { ProductListRelationFilter } from "../product/ProductListRelationFilter";

export type UserWhereInput = {
  branch?: BranchWhereUniqueInput;
  email?: StringFilter;
  firstName?: StringNullableFilter;
  id?: StringFilter;
  lastName?: StringNullableFilter;
  products?: ProductListRelationFilter;
  username?: StringFilter;
};
