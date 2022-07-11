import { BranchCreateNestedManyWithoutUsersInput } from "./BranchCreateNestedManyWithoutUsersInput";
import { ProductCreateNestedManyWithoutUsersInput } from "./ProductCreateNestedManyWithoutUsersInput";

export type UserCreateInput = {
  branches?: BranchCreateNestedManyWithoutUsersInput;
  email: string;
  firstName?: string | null;
  lastName?: string | null;
  password: string;
  products?: ProductCreateNestedManyWithoutUsersInput;
  roles: Array<string>;
  username: string;
};
