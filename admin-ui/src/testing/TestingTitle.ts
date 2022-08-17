import { Testing as TTesting } from "../api/testing/Testing";

export const TESTING_TITLE_FIELD = "testName";

export const TestingTitle = (record: TTesting): string => {
  return record.testName || record.id;
};
