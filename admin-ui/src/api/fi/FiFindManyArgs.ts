import { FiWhereInput } from "./FiWhereInput";
import { FiOrderByInput } from "./FiOrderByInput";

export type FiFindManyArgs = {
  where?: FiWhereInput;
  orderBy?: Array<FiOrderByInput>;
  skip?: number;
  take?: number;
};
