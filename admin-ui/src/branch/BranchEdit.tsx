import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  NumberInput,
} from "react-admin";

export const BranchEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
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
    </Edit>
  );
};
