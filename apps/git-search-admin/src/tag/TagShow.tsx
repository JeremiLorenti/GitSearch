import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  DateField,
  TextField,
  ReferenceManyField,
  Datagrid,
  ReferenceField,
} from "react-admin";

import { COMMIT_TITLE_FIELD } from "../commit/CommitTitle";
import { OWNER_TITLE_FIELD } from "../owner/OwnerTitle";
import { TAG_TITLE_FIELD } from "./TagTitle";

export const TagShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <DateField source="createdAt" label="Created At" />
        <TextField label="ID" source="id" />
        <TextField label="name" source="name" />
        <DateField source="updatedAt" label="Updated At" />
        <ReferenceManyField
          reference="Repository"
          target="tagId"
          label="Repositories"
        >
          <Datagrid rowClick="show">
            <ReferenceField
              label="Commit"
              source="commit.id"
              reference="Commit"
            >
              <TextField source={COMMIT_TITLE_FIELD} />
            </ReferenceField>
            <DateField source="createdAt" label="Created At" />
            <TextField label="dateAdded" source="dateAdded" />
            <TextField label="description" source="description" />
            <TextField label="ID" source="id" />
            <TextField label="lastCommit" source="lastCommit" />
            <TextField label="name" source="name" />
            <ReferenceField label="Owner" source="owner.id" reference="Owner">
              <TextField source={OWNER_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="stars" source="stars" />
            <ReferenceField label="Tag" source="tag.id" reference="Tag">
              <TextField source={TAG_TITLE_FIELD} />
            </ReferenceField>
            <DateField source="updatedAt" label="Updated At" />
          </Datagrid>
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};
