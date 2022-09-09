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
import { CreateDemoArgs } from "./CreateDemoArgs";
import { UpdateDemoArgs } from "./UpdateDemoArgs";
import { DeleteDemoArgs } from "./DeleteDemoArgs";
import { DemoFindManyArgs } from "./DemoFindManyArgs";
import { DemoFindUniqueArgs } from "./DemoFindUniqueArgs";
import { Demo } from "./Demo";
import { DemoService } from "../demo.service";

@graphql.Resolver(() => Demo)
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
export class DemoResolverBase {
  constructor(
    protected readonly service: DemoService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}

  @graphql.Query(() => MetaQueryPayload)
  @nestAccessControl.UseRoles({
    resource: "Demo",
    action: "read",
    possession: "any",
  })
  async _demosMeta(
    @graphql.Args() args: DemoFindManyArgs
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
  @graphql.Query(() => [Demo])
  @nestAccessControl.UseRoles({
    resource: "Demo",
    action: "read",
    possession: "any",
  })
  async demos(@graphql.Args() args: DemoFindManyArgs): Promise<Demo[]> {
    return this.service.findMany(args);
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => Demo, { nullable: true })
  @nestAccessControl.UseRoles({
    resource: "Demo",
    action: "read",
    possession: "own",
  })
  async demo(@graphql.Args() args: DemoFindUniqueArgs): Promise<Demo | null> {
    const result = await this.service.findOne(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => Demo)
  @nestAccessControl.UseRoles({
    resource: "Demo",
    action: "create",
    possession: "any",
  })
  async createDemo(@graphql.Args() args: CreateDemoArgs): Promise<Demo> {
    return await this.service.create({
      ...args,
      data: args.data,
    });
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => Demo)
  @nestAccessControl.UseRoles({
    resource: "Demo",
    action: "update",
    possession: "any",
  })
  async updateDemo(@graphql.Args() args: UpdateDemoArgs): Promise<Demo | null> {
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

  @graphql.Mutation(() => Demo)
  @nestAccessControl.UseRoles({
    resource: "Demo",
    action: "delete",
    possession: "any",
  })
  async deleteDemo(@graphql.Args() args: DeleteDemoArgs): Promise<Demo | null> {
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
