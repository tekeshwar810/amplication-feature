import { DemoWhereInput } from "./DemoWhereInput";
import { DemoOrderByInput } from "./DemoOrderByInput";

export type DemoFindManyArgs = {
  where?: DemoWhereInput;
  orderBy?: Array<DemoOrderByInput>;
  skip?: number;
  take?: number;
};
