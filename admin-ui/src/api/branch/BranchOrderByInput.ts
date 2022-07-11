import { SortOrder } from "../../util/SortOrder";

export type BranchOrderByInput = {
  address?: SortOrder;
  branchCode?: SortOrder;
  branchName?: SortOrder;
  createdAt?: SortOrder;
  id?: SortOrder;
  updatedAt?: SortOrder;
};
