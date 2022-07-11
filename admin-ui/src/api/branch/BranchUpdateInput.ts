import { UserUpdateManyWithoutBranchesInput } from "./UserUpdateManyWithoutBranchesInput";

export type BranchUpdateInput = {
  address?: string | null;
  branchCode?: string | null;
  branchName?: string | null;
  userId?: UserUpdateManyWithoutBranchesInput;
};
