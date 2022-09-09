import { Demo as TDemo } from "../api/demo/Demo";

export const DEMO_TITLE_FIELD = "demoname";

export const DemoTitle = (record: TDemo): string => {
  return record.demoname || record.id;
};
