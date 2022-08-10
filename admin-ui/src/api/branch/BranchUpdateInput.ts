import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type BranchUpdateInput = {
  address?: string | null;
  branchCode?: string | null;
  branchmanagerid?: UserWhereUniqueInput | null;
  branchName?: string | null;
  location?: string | null;
  status?: string | null;
  test?: UserWhereUniqueInput | null;
};
