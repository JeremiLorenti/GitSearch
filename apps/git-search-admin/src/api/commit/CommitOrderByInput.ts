import { SortOrder } from "../../util/SortOrder";

export type CommitOrderByInput = {
  author?: SortOrder;
  createdAt?: SortOrder;
  date?: SortOrder;
  id?: SortOrder;
  message?: SortOrder;
  updatedAt?: SortOrder;
};
