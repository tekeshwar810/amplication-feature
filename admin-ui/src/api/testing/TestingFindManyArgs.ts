import { TestingWhereInput } from "./TestingWhereInput";
import { TestingOrderByInput } from "./TestingOrderByInput";

export type TestingFindManyArgs = {
  where?: TestingWhereInput;
  orderBy?: Array<TestingOrderByInput>;
  skip?: number;
  take?: number;
};
