import * as React from "react";
import {
  List,
  Datagrid,
  ListProps,
  ReferenceField,
  TextField,
  DateField,
} from "react-admin";
import Pagination from "../Components/Pagination";
import { COMMIT_TITLE_FIELD } from "../commit/CommitTitle";
import { OWNER_TITLE_FIELD } from "../owner/OwnerTitle";
import { TAG_TITLE_FIELD } from "../tag/TagTitle";

export const RepositoryList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"Repositories"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <ReferenceField label="Commit" source="commit.id" reference="Commit">
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
    </List>
  );
};
