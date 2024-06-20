import { StringNullableFilter } from "../../util/StringNullableFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { RepositoryListRelationFilter } from "../repository/RepositoryListRelationFilter";

export type CommitWhereInput = {
  author?: StringNullableFilter;
  date?: DateTimeNullableFilter;
  id?: StringFilter;
  message?: StringNullableFilter;
  repositories?: RepositoryListRelationFilter;
};
