import { BranchListRelationFilter } from "../branch/BranchListRelationFilter";
import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { ProductListRelationFilter } from "../product/ProductListRelationFilter";

export type UserWhereInput = {
  branches?: BranchListRelationFilter;
  email?: StringFilter;
  firstName?: StringNullableFilter;
  id?: StringFilter;
  lastName?: StringNullableFilter;
  products?: ProductListRelationFilter;
  username?: StringFilter;
};
