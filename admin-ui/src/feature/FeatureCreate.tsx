import * as React from "react";
import { Create, SimpleForm, CreateProps, TextInput } from "react-admin";

export const FeatureCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="feature name" source="featureName" />
      </SimpleForm>
    </Create>
  );
};
