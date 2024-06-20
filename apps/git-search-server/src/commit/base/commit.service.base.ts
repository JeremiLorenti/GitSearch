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
  Commit as PrismaCommit,
  Repository as PrismaRepository,
} from "@prisma/client";
import { CommitRecentInput } from "../CommitRecentInput";

export class CommitServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count(args: Omit<Prisma.CommitCountArgs, "select">): Promise<number> {
    return this.prisma.commit.count(args);
  }

  async commits(args: Prisma.CommitFindManyArgs): Promise<PrismaCommit[]> {
    return this.prisma.commit.findMany(args);
  }
  async commit(
    args: Prisma.CommitFindUniqueArgs
  ): Promise<PrismaCommit | null> {
    return this.prisma.commit.findUnique(args);
  }
  async createCommit(args: Prisma.CommitCreateArgs): Promise<PrismaCommit> {
    return this.prisma.commit.create(args);
  }
  async updateCommit(args: Prisma.CommitUpdateArgs): Promise<PrismaCommit> {
    return this.prisma.commit.update(args);
  }
  async deleteCommit(args: Prisma.CommitDeleteArgs): Promise<PrismaCommit> {
    return this.prisma.commit.delete(args);
  }

  async findRepositories(
    parentId: string,
    args: Prisma.RepositoryFindManyArgs
  ): Promise<PrismaRepository[]> {
    return this.prisma.commit
      .findUniqueOrThrow({
        where: { id: parentId },
      })
      .repositories(args);
  }
  async GetRecentCommits(args: string): Promise<string> {
    throw new Error("Not implemented");
  }
  async GetRecentCommitsAction(
    args: CommitRecentInput
  ): Promise<CommitRecentInput[]> {
    throw new Error("Not implemented");
  }
}