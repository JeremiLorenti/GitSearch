import { Commit } from "../commit/Commit";
import { Owner } from "../owner/Owner";
import { Tag } from "../tag/Tag";

export type Repository = {
  commit?: Commit | null;
  createdAt: Date;
  dateAdded: Date | null;
  description: string | null;
  id: string;
  lastCommit: Date | null;
  name: string | null;
  owner?: Owner | null;
  stars: number | null;
  tag?: Tag | null;
  updatedAt: Date;
};
