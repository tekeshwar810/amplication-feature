import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  NumberInput,
} from "react-admin";

export const RoleCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <div />
        <TextInput label="name" source="name" />
        <NumberInput step={1} label="roleId" source="roleId" />
        <TextInput label="userid" multiline source="userid" />
      </SimpleForm>
    </Create>
  );
};
