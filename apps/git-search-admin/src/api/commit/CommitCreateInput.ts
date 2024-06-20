import { RepositoryCreateNestedManyWithoutCommitsInput } from "./RepositoryCreateNestedManyWithoutCommitsInput";

export type CommitCreateInput = {
  author?: string | null;
  date?: Date | null;
  message?: string | null;
  repositories?: RepositoryCreateNestedManyWithoutCommitsInput;
};
