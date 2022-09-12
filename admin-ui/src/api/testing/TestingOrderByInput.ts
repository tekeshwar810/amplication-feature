import { SortOrder } from "../../util/SortOrder";

export type TestingOrderByInput = {
  createdAt?: SortOrder;
  id?: SortOrder;
  lastName?: SortOrder;
  testName?: SortOrder;
  updatedAt?: SortOrder;
};
