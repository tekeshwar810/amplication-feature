import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type ProductCreateInput = {
  description?: string | null;
  name: string;
  userid: UserWhereUniqueInput;
};
