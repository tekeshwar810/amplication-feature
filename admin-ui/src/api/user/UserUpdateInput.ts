import { BranchWhereUniqueInput } from "../branch/BranchWhereUniqueInput";
import { ProductUpdateManyWithoutUsersInput } from "./ProductUpdateManyWithoutUsersInput";

export type UserUpdateInput = {
  branch?: BranchWhereUniqueInput | null;
  email?: string;
  firstName?: string | null;
  lastName?: string | null;
  password?: string;
  products?: ProductUpdateManyWithoutUsersInput;
  roles?: Array<string>;
  username?: string;
};
