import { JsonFilter } from "../../util/JsonFilter";
import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { IntNullableFilter } from "../../util/IntNullableFilter";

export type RoleWhereInput = {
  fiadminid?: JsonFilter;
  id?: StringFilter;
  name?: StringNullableFilter;
  roleId?: IntNullableFilter;
  userid?: StringNullableFilter;
};
