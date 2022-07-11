import { Branch } from "../branch/Branch";

export type User = {
  branches?: Branch;
  createdAt: Date;
  email: string;
  firstName: string | null;
  id: string;
  lastName: string | null;
  roles: Array<string>;
  updatedAt: Date;
  username: string;
};
