import { BranchWhereUniqueInput } from "../branch/BranchWhereUniqueInput";

export type UserUpdateInput = {
  branches?: BranchWhereUniqueInput;
  email?: string;
  firstName?: string | null;
  lastName?: string | null;
  password?: string;
  roles?: Array<string>;
  username?: string;
};
