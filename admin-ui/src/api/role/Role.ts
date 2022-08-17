import { JsonValue } from "type-fest";

export type Role = {
  createdAt: Date;
  fiadminid: JsonValue;
  id: string;
  name: string | null;
  roleId: number | null;
  updatedAt: Date;
  userid: string | null;
};
