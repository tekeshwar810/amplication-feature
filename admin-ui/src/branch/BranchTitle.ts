import { Branch as TBranch } from "../api/branch/Branch";

export const BRANCH_TITLE_FIELD = "branchName";

export const BranchTitle = (record: TBranch): string => {
  return record.branchName || record.id;
};
