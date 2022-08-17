import { InputJsonValue } from "../../types";

export type RoleCreateInput = {
  fiadminid?: InputJsonValue;
  name?: string | null;
  roleId?: number | null;
  userid?: string | null;
};
