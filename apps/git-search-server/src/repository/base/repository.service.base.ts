/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { PrismaService } from "../../prisma/prisma.service";

import {
  Prisma,
  Repository as PrismaRepository,
  Commit as PrismaCommit,
  Owner as PrismaOwner,
  Tag as PrismaTag,
} from "@prisma/client";

import { RepositoryFilterInput } from "../RepositoryFilterInput";
import { RepositorySearchInput } from "../RepositorySearchInput";
import { RepositorySortInput } from "../RepositorySortInput";

export class RepositoryServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count(
    args: Omit<Prisma.RepositoryCountArgs, "select">
  ): Promise<number> {
    return this.prisma.repository.count(args);
  }

  async repositories(
    args: Prisma.RepositoryFindManyArgs
  ): Promise<PrismaRepository[]> {
    return this.prisma.repository.findMany(args);
  }
  async repository(
    args: Prisma.RepositoryFindUniqueArgs
  ): Promise<PrismaRepository | null> {
    return this.prisma.repository.findUnique(args);
  }
  async createRepository(
    args: Prisma.RepositoryCreateArgs
  ): Promise<PrismaRepository> {
    return this.prisma.repository.create(args);
  }
  async updateRepository(
    args: Prisma.RepositoryUpdateArgs
  ): Promise<PrismaRepository> {
    return this.prisma.repository.update(args);
  }
  async deleteRepository(
    args: Prisma.RepositoryDeleteArgs
  ): Promise<PrismaRepository> {
    return this.prisma.repository.delete(args);
  }

  async getCommit(parentId: string): Promise<PrismaCommit | null> {
    return this.prisma.repository
      .findUnique({
        where: { id: parentId },
      })
      .commit();
  }

  async getOwner(parentId: string): Promise<PrismaOwner | null> {
    return this.prisma.repository
      .findUnique({
        where: { id: parentId },
      })
      .owner();
  }

  async getTag(parentId: string): Promise<PrismaTag | null> {
    return this.prisma.repository
      .findUnique({
        where: { id: parentId },
      })
      .tag();
  }
  async FilterRepositoriesByStars(args: string): Promise<string> {
    throw new Error("Not implemented");
  }
  async FilterRepositoriesByStarsAction(
    args: RepositoryFilterInput
  ): Promise<RepositoryFilterInput[]> {
    throw new Error("Not implemented");
  }
  async SearchRepositories(args: string): Promise<string> {
    throw new Error("Not implemented");
  }
  async SearchRepositoriesAction(
    args: RepositorySearchInput
  ): Promise<RepositorySearchInput[]> {
    throw new Error("Not implemented");
  }
  async SortRepositoriesByDateAdded(args: string): Promise<string> {
    throw new Error("Not implemented");
  }
  async SortRepositoriesByDateAddedAction(
    args: RepositorySortInput
  ): Promise<RepositorySortInput[]> {
    throw new Error("Not implemented");
  }
}