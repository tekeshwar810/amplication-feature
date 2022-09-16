import * as React from "react";
import { Create, SimpleForm, CreateProps, TextInput } from "react-admin";

export const ExpenseCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="exprensename" source="exprensename" />
      </SimpleForm>
    </Create>
  );
};
