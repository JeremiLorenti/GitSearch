import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  DateTimeInput,
  ReferenceArrayInput,
  SelectArrayInput,
} from "react-admin";

import { RepositoryTitle } from "../repository/RepositoryTitle";

export const CommitEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="author" source="author" />
        <DateTimeInput label="date" source="date" />
        <TextInput label="message" multiline source="message" />
        <ReferenceArrayInput
          source="repositories"
          reference="Repository"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={RepositoryTitle} />
        </ReferenceArrayInput>
      </SimpleForm>
    </Edit>
  );
};
