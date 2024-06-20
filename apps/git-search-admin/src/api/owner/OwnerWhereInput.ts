import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { RepositoryListRelationFilter } from "../repository/RepositoryListRelationFilter";

export type OwnerWhereInput = {
  email?: StringNullableFilter;
  id?: StringFilter;
  name?: StringNullableFilter;
  repositories?: RepositoryListRelationFilter;
};
