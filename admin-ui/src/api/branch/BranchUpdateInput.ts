import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type BranchUpdateInput = {
  address?: string | null;
  branchCode?: string | null;
  branchName?: string | null;
  managerid?: UserWhereUniqueInput | null;
};
