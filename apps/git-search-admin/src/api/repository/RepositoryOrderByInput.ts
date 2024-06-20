import { SortOrder } from "../../util/SortOrder";

export type RepositoryOrderByInput = {
  commitId?: SortOrder;
  createdAt?: SortOrder;
  dateAdded?: SortOrder;
  description?: SortOrder;
  id?: SortOrder;
  lastCommit?: SortOrder;
  name?: SortOrder;
  ownerId?: SortOrder;
  stars?: SortOrder;
  tagId?: SortOrder;
  updatedAt?: SortOrder;
};
