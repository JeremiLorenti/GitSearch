import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  ReferenceInput,
  SelectInput,
  DateTimeInput,
  TextInput,
  NumberInput,
} from "react-admin";

import { CommitTitle } from "../commit/CommitTitle";
import { OwnerTitle } from "../owner/OwnerTitle";
import { TagTitle } from "../tag/TagTitle";

export const RepositoryEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <ReferenceInput source="commit.id" reference="Commit" label="Commit">
          <SelectInput optionText={CommitTitle} />
        </ReferenceInput>
        <DateTimeInput label="dateAdded" source="dateAdded" />
        <TextInput label="description" multiline source="description" />
        <DateTimeInput label="lastCommit" source="lastCommit" />
        <TextInput label="name" source="name" />
        <ReferenceInput source="owner.id" reference="Owner" label="Owner">
          <SelectInput optionText={OwnerTitle} />
        </ReferenceInput>
        <NumberInput step={1} label="stars" source="stars" />
        <ReferenceInput source="tag.id" reference="Tag" label="Tag">
          <SelectInput optionText={TagTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Edit>
  );
};
