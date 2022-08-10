import { BranchUpdateManyWithoutUsersInput } from "./BranchUpdateManyWithoutUsersInput";

export type UserUpdateInput = {
  branches?: BranchUpdateManyWithoutUsersInput;
  email?: string;
  firstName?: string | null;
  lastName?: string | null;
  password?: string;
  roles?: Array<string>;
  test?: BranchUpdateManyWithoutUsersInput;
  username?: string;
};
