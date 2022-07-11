import { Fi as TFi } from "../api/fi/Fi";

export const FI_TITLE_FIELD = "name";

export const FiTitle = (record: TFi): string => {
  return record.name || record.id;
};
