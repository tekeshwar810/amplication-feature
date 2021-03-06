/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/docs/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as common from "@nestjs/common";
import * as graphql from "@nestjs/graphql";
import * as apollo from "apollo-server-express";
import * as nestAccessControl from "nest-access-control";
import { GqlDefaultAuthGuard } from "../../auth/gqlDefaultAuth.guard";
import * as gqlACGuard from "../../auth/gqlAC.guard";
import { isRecordNotFoundError } from "../../prisma.util";
import { MetaQueryPayload } from "../../util/MetaQueryPayload";
import { Public } from "../../decorators/public.decorator";
import { CreateBranchArgs } from "./CreateBranchArgs";
import { UpdateBranchArgs } from "./UpdateBranchArgs";
import { DeleteBranchArgs } from "./DeleteBranchArgs";
import { BranchFindManyArgs } from "./BranchFindManyArgs";
import { BranchFindUniqueArgs } from "./BranchFindUniqueArgs";
import { Branch } from "./Branch";
import { User } from "../../user/base/User";
import { BranchService } from "../branch.service";

@graphql.Resolver(() => Branch)
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
export class BranchResolverBase {
  constructor(
    protected readonly service: BranchService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}

  @Public()
  @graphql.Query(() => MetaQueryPayload)
  async _branchesMeta(
    @graphql.Args() args: BranchFindManyArgs
  ): Promise<MetaQueryPayload> {
    const results = await this.service.count({
      ...args,
      skip: undefined,
      take: undefined,
    });
    return {
      count: results,
    };
  }

  @Public()
  @graphql.Query(() => [Branch])
  async branches(@graphql.Args() args: BranchFindManyArgs): Promise<Branch[]> {
    return this.service.findMany(args);
  }

  @Public()
  @graphql.Query(() => Branch, { nullable: true })
  async branch(
    @graphql.Args() args: BranchFindUniqueArgs
  ): Promise<Branch | null> {
    const result = await this.service.findOne(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @Public()
  @graphql.Mutation(() => Branch)
  async createBranch(@graphql.Args() args: CreateBranchArgs): Promise<Branch> {
    return await this.service.create({
      ...args,
      data: {
        ...args.data,

        branchmanagerid: args.data.branchmanagerid
          ? {
              connect: args.data.branchmanagerid,
            }
          : undefined,

        test: args.data.test
          ? {
              connect: args.data.test,
            }
          : undefined,
      },
    });
  }

  @Public()
  @graphql.Mutation(() => Branch)
  async updateBranch(
    @graphql.Args() args: UpdateBranchArgs
  ): Promise<Branch | null> {
    try {
      return await this.service.update({
        ...args,
        data: {
          ...args.data,

          branchmanagerid: args.data.branchmanagerid
            ? {
                connect: args.data.branchmanagerid,
              }
            : undefined,

          test: args.data.test
            ? {
                connect: args.data.test,
              }
            : undefined,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new apollo.ApolloError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @Public()
  @graphql.Mutation(() => Branch)
  async deleteBranch(
    @graphql.Args() args: DeleteBranchArgs
  ): Promise<Branch | null> {
    try {
      return await this.service.delete(args);
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new apollo.ApolloError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @Public()
  @graphql.ResolveField(() => User, { nullable: true })
  async branchmanagerid(
    @graphql.Parent() parent: Branch
  ): Promise<User | null> {
    const result = await this.service.getBranchmanagerid(parent.id);

    if (!result) {
      return null;
    }
    return result;
  }

  @Public()
  @graphql.ResolveField(() => User, { nullable: true })
  async test(@graphql.Parent() parent: Branch): Promise<User | null> {
    const result = await this.service.getTest(parent.id);

    if (!result) {
      return null;
    }
    return result;
  }
}
