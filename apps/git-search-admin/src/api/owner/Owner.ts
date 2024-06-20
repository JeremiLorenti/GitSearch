import { Repository } from "../repository/Repository";

export type Owner = {
  createdAt: Date;
  email: string | null;
  id: string;
  name: string | null;
  repositories?: Array<Repository>;
  updatedAt: Date;
};
