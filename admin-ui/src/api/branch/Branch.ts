import { User } from "../user/User";

export type Branch = {
  address: string | null;
  branchCode: string | null;
  branchmanagerid?: User | null;
  branchName: string | null;
  createdAt: Date;
  id: string;
  status?: "Option1" | null;
  updatedAt: Date;
};
