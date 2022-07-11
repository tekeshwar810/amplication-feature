import * as React from "react";
import { Create, SimpleForm, CreateProps, TextInput } from "react-admin";

export const FiCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="address" multiline source="address" />
        <TextInput label="name" source="name" />
      </SimpleForm>
    </Create>
  );
};
