import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";

export type FiWhereInput = {
  address?: StringFilter;
  id?: StringFilter;
  name?: StringNullableFilter;
};
