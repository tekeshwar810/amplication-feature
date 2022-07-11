import { Branch } from "../branch/Branch";
import { Product } from "../product/Product";

export type User = {
  branches?: Array<Branch>;
  createdAt: Date;
  email: string;
  firstName: string | null;
  id: string;
  lastName: string | null;
  products?: Array<Product>;
  roles: Array<string>;
  updatedAt: Date;
  username: string;
};
