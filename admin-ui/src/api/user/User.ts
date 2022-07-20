import { Branch } from "../branch/Branch";

export type User = {
  branches?: Array<Branch>;
  createdAt: Date;
  email: string;
  firstName: string | null;
  id: string;
  lastName: string | null;
  roles: Array<string>;
  test?: Array<Branch>;
  updatedAt: Date;
  username: string;
};
