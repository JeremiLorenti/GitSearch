import { RepositoryCreateNestedManyWithoutOwnersInput } from "./RepositoryCreateNestedManyWithoutOwnersInput";

export type OwnerCreateInput = {
  email?: string | null;
  name?: string | null;
  repositories?: RepositoryCreateNestedManyWithoutOwnersInput;
};
