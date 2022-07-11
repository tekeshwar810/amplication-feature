import { UserCreateNestedManyWithoutBranchesInput } from "./UserCreateNestedManyWithoutBranchesInput";

export type BranchCreateInput = {
  address?: string | null;
  branchCode?: string | null;
  branchName?: string | null;
  userId?: UserCreateNestedManyWithoutBranchesInput;
};
