import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  DateField,
  TextField,
} from "react-admin";

export const RoleShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <DateField source="createdAt" label="Created At" />
        <TextField label="fiadminid" source="fiadminid" />
        <TextField label="ID" source="id" />
        <TextField label="name" source="name" />
        <TextField label="roleId" source="roleId" />
        <DateField source="updatedAt" label="Updated At" />
        <TextField label="userid" source="userid" />
      </SimpleShowLayout>
    </Show>
  );
};
