import * as React from "react";
import { Edit, SimpleForm, EditProps, TextInput } from "react-admin";

export const FeatureEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="feature name" source="featureName" />
      </SimpleForm>
    </Edit>
  );
};
