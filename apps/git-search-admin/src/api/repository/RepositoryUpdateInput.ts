import { CommitWhereUniqueInput } from "../commit/CommitWhereUniqueInput";
import { OwnerWhereUniqueInput } from "../owner/OwnerWhereUniqueInput";
import { TagWhereUniqueInput } from "../tag/TagWhereUniqueInput";

export type RepositoryUpdateInput = {
  commit?: CommitWhereUniqueInput | null;
  dateAdded?: Date | null;
  description?: string | null;
  lastCommit?: Date | null;
  name?: string | null;
  owner?: OwnerWhereUniqueInput | null;
  stars?: number | null;
  tag?: TagWhereUniqueInput | null;
};
