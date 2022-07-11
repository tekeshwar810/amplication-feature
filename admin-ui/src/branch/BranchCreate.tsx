import * as React from "react";
import { Create, SimpleForm, CreateProps, TextInput } from "react-admin";

export const BranchCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="address" multiline source="address" />
        <TextInput label="branchCode" source="branchCode" />
        <TextInput label="branchName" source="branchName" />
      </SimpleForm>
    </Create>
  );
};
