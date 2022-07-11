import { User } from "../user/User";

export type Branch = {
  address: string | null;
  branchCode: string | null;
  branchName: string | null;
  createdAt: Date;
  id: string;
  managerid?: User | null;
  updatedAt: Date;
};
