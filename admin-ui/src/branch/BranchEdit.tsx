import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";
import { UserTitle } from "../user/UserTitle";

export const BranchEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
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
    </Edit>
  );
};
