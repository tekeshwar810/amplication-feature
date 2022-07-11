import { User } from "../user/User";

export type Product = {
  createdAt: Date;
  description: string | null;
  id: string;
  name: string;
  updatedAt: Date;
  userId?: User;
};
