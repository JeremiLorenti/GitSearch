import { RepositoryUpdateManyWithoutTagsInput } from "./RepositoryUpdateManyWithoutTagsInput";

export type TagUpdateInput = {
  name?: string | null;
  repositories?: RepositoryUpdateManyWithoutTagsInput;
};
