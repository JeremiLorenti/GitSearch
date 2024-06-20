import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { RepositoryListRelationFilter } from "../repository/RepositoryListRelationFilter";

export type TagWhereInput = {
  id?: StringFilter;
  name?: StringNullableFilter;
  repositories?: RepositoryListRelationFilter;
};
