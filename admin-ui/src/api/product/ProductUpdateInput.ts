import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type ProductUpdateInput = {
  description?: string | null;
  name?: string;
  userId?: UserWhereUniqueInput;
};
