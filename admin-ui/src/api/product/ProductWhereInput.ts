import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type ProductWhereInput = {
  description?: StringNullableFilter;
  id?: StringFilter;
  name?: StringFilter;
  userid?: UserWhereUniqueInput;
};
