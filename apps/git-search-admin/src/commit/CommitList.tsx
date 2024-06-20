import * as React from "react";
import { List, Datagrid, ListProps, TextField, DateField } from "react-admin";
import Pagination from "../Components/Pagination";

export const CommitList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"Commits"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <TextField label="author" source="author" />
        <DateField source="createdAt" label="Created At" />
        <TextField label="date" source="date" />
        <TextField label="ID" source="id" />
        <TextField label="message" source="message" />
        <DateField source="updatedAt" label="Updated At" />
      </Datagrid>
    </List>
  );
};
