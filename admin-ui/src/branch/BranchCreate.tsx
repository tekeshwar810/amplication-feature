import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  NumberInput,
} from "react-admin";

export const BranchCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="address" multiline source="address" />
        <TextInput label="branchCode" source="branchCode" />
        <NumberInput
          step={1}
          label="branchmanagerid"
          source="branchmanagerid"
        />
        <TextInput label="branchName" source="branchName" />
      </SimpleForm>
    </Create>
  );
};
