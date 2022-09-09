import * as React from "react";
import { Create, SimpleForm, CreateProps, TextInput } from "react-admin";

export const TestingCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="test_name" source="testName" />
      </SimpleForm>
    </Create>
  );
};
