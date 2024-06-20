import { Repository } from "../repository/Repository";

export type Tag = {
  createdAt: Date;
  id: string;
  name: string | null;
  repositories?: Array<Repository>;
  updatedAt: Date;
};
