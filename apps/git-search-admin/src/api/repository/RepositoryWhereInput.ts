import { CommitWhereUniqueInput } from "../commit/CommitWhereUniqueInput";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { OwnerWhereUniqueInput } from "../owner/OwnerWhereUniqueInput";
import { IntNullableFilter } from "../../util/IntNullableFilter";
import { TagWhereUniqueInput } from "../tag/TagWhereUniqueInput";

export type RepositoryWhereInput = {
  commit?: CommitWhereUniqueInput;
  dateAdded?: DateTimeNullableFilter;
  description?: StringNullableFilter;
  id?: StringFilter;
  lastCommit?: DateTimeNullableFilter;
  name?: StringNullableFilter;
  owner?: OwnerWhereUniqueInput;
  stars?: IntNullableFilter;
  tag?: TagWhereUniqueInput;
};
