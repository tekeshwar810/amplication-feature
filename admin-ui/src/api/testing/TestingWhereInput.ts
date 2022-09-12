import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";

export type TestingWhereInput = {
  id?: StringFilter;
  lastName?: StringNullableFilter;
  testName?: StringNullableFilter;
};
