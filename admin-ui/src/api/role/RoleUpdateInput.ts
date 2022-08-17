import { InputJsonValue } from "../../types";

export type RoleUpdateInput = {
  fiadminid?: InputJsonValue;
  name?: string | null;
  roleId?: number | null;
  userid?: string | null;
};
