import { RepositoryUpdateManyWithoutOwnersInput } from "./RepositoryUpdateManyWithoutOwnersInput";

export type OwnerUpdateInput = {
  email?: string | null;
  name?: string | null;
  repositories?: RepositoryUpdateManyWithoutOwnersInput;
};
