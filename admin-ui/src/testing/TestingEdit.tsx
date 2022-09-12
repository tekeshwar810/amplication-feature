import * as React from "react";
import { Edit, SimpleForm, EditProps, TextInput } from "react-admin";

export const TestingEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="last_name" source="lastName" />
        <TextInput label="test_name" source="testName" />
      </SimpleForm>
    </Edit>
  );
};
