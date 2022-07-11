import { BranchUpdateManyWithoutUsersInput } from "./BranchUpdateManyWithoutUsersInput";
import { ProductUpdateManyWithoutUsersInput } from "./ProductUpdateManyWithoutUsersInput";

export type UserUpdateInput = {
  branches?: BranchUpdateManyWithoutUsersInput;
  email?: string;
  firstName?: string | null;
  lastName?: string | null;
  password?: string;
  products?: ProductUpdateManyWithoutUsersInput;
  roles?: Array<string>;
  username?: string;
};
