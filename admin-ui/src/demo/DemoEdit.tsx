import * as React from "react";
import { Edit, SimpleForm, EditProps, TextInput } from "react-admin";

export const DemoEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="demoname" source="demoname" />
      </SimpleForm>
    </Edit>
  );
};
