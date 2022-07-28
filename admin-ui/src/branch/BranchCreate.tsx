import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";
import { UserTitle } from "../user/UserTitle";

export const BranchCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="address" multiline source="address" />
        <TextInput label="branchCode" source="branchCode" />
        <ReferenceInput
          source="user.id"
          reference="User"
          label="branchmanagerid"
        >
          <SelectInput optionText={UserTitle} />
        </ReferenceInput>
        <TextInput label="branchName" source="branchName" />
        <TextInput label="location" source="location" />
        <TextInput label="status" source="status" />
        <ReferenceInput source="user.id" reference="User" label="test">
          <SelectInput optionText={UserTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Create>
  );
};
