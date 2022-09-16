import * as React from "react";
import { Edit, SimpleForm, EditProps, TextInput } from "react-admin";

export const ExpenseEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="exprensename" source="exprensename" />
      </SimpleForm>
    </Edit>
  );
};
