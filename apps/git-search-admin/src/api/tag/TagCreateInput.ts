import { RepositoryCreateNestedManyWithoutTagsInput } from "./RepositoryCreateNestedManyWithoutTagsInput";

export type TagCreateInput = {
  name?: string | null;
  repositories?: RepositoryCreateNestedManyWithoutTagsInput;
};
