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
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { CreateFiArgs } from "./CreateFiArgs";
import { UpdateFiArgs } from "./UpdateFiArgs";
import { DeleteFiArgs } from "./DeleteFiArgs";
import { FiFindManyArgs } from "./FiFindManyArgs";
import { FiFindUniqueArgs } from "./FiFindUniqueArgs";
import { Fi } from "./Fi";
import { FiService } from "../fi.service";

@graphql.Resolver(() => Fi)
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
export class FiResolverBase {
  constructor(
    protected readonly service: FiService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}

  @graphql.Query(() => MetaQueryPayload)
  @nestAccessControl.UseRoles({
    resource: "Fi",
    action: "read",
    possession: "any",
  })
  async _fisMeta(
    @graphql.Args() args: FiFindManyArgs
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

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => [Fi])
  @nestAccessControl.UseRoles({
    resource: "Fi",
    action: "read",
    possession: "any",
  })
  async fis(@graphql.Args() args: FiFindManyArgs): Promise<Fi[]> {
    return this.service.findMany(args);
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => Fi, { nullable: true })
  @nestAccessControl.UseRoles({
    resource: "Fi",
    action: "read",
    possession: "own",
  })
  async fi(@graphql.Args() args: FiFindUniqueArgs): Promise<Fi | null> {
    const result = await this.service.findOne(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => Fi)
  @nestAccessControl.UseRoles({
    resource: "Fi",
    action: "create",
    possession: "any",
  })
  async createFi(@graphql.Args() args: CreateFiArgs): Promise<Fi> {
    return await this.service.create({
      ...args,
      data: args.data,
    });
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => Fi)
  @nestAccessControl.UseRoles({
    resource: "Fi",
    action: "update",
    possession: "any",
  })
  async updateFi(@graphql.Args() args: UpdateFiArgs): Promise<Fi | null> {
    try {
      return await this.service.update({
        ...args,
        data: args.data,
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

  @graphql.Mutation(() => Fi)
  @nestAccessControl.UseRoles({
    resource: "Fi",
    action: "delete",
    possession: "any",
  })
  async deleteFi(@graphql.Args() args: DeleteFiArgs): Promise<Fi | null> {
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
}
