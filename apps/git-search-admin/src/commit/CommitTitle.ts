import { Commit as TCommit } from "../api/commit/Commit";

export const COMMIT_TITLE_FIELD = "author";

export const CommitTitle = (record: TCommit): string => {
  return record.author?.toString() || String(record.id);
};
