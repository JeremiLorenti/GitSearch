import { RepositoryUpdateManyWithoutCommitsInput } from "./RepositoryUpdateManyWithoutCommitsInput";

export type CommitUpdateInput = {
  author?: string | null;
  date?: Date | null;
  message?: string | null;
  repositories?: RepositoryUpdateManyWithoutCommitsInput;
};
