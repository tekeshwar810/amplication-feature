import * as React from "react";
import { Edit, SimpleForm, EditProps, TextInput } from "react-admin";

export const FiEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="address" multiline source="address" />
        <TextInput label="name" source="name" />
      </SimpleForm>
    </Edit>
  );
};
