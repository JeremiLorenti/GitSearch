import { Repository } from "../repository/Repository";

export type Commit = {
  author: string | null;
  createdAt: Date;
  date: Date | null;
  id: string;
  message: string | null;
  repositories?: Array<Repository>;
  updatedAt: Date;
};
