import { BranchWhereUniqueInput } from "../branch/BranchWhereUniqueInput";
import { ProductCreateNestedManyWithoutUsersInput } from "./ProductCreateNestedManyWithoutUsersInput";

export type UserCreateInput = {
  branch?: BranchWhereUniqueInput | null;
  email: string;
  firstName?: string | null;
  lastName?: string | null;
  password: string;
  products?: ProductCreateNestedManyWithoutUsersInput;
  roles: Array<string>;
  username: string;
};
