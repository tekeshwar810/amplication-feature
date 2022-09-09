import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";

export type FeatureWhereInput = {
  featureName?: StringNullableFilter;
  id?: StringFilter;
};
