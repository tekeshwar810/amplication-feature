import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  NumberInput,
} from "react-admin";

export const RoleEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <div />
        <TextInput label="name" source="name" />
        <NumberInput step={1} label="roleId" source="roleId" />
        <TextInput label="userid" multiline source="userid" />
      </SimpleForm>
    </Edit>
  );
};
