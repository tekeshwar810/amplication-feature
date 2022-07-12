import { BranchCreateNestedManyWithoutUsersInput } from "./BranchCreateNestedManyWithoutUsersInput";

export type UserCreateInput = {
  branches?: BranchCreateNestedManyWithoutUsersInput;
  email: string;
  firstName?: string | null;
  lastName?: string | null;
  password: string;
  roles: Array<string>;
  username: string;
};
