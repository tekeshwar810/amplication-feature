import { SortOrder } from "../../util/SortOrder";

export type TestingOrderByInput = {
  createdAt?: SortOrder;
  id?: SortOrder;
  testName?: SortOrder;
  updatedAt?: SortOrder;
};
