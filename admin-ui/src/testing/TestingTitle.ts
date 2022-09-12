import { Testing as TTesting } from "../api/testing/Testing";

export const TESTING_TITLE_FIELD = "lastName";

export const TestingTitle = (record: TTesting): string => {
  return record.lastName || record.id;
};
