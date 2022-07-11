import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { IntNullableFilter } from "../../util/IntNullableFilter";

export type RoleWhereInput = {
  id?: StringFilter;
  name?: StringNullableFilter;
  roleId?: IntNullableFilter;
};
