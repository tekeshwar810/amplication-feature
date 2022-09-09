/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/docs/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import * as defaultAuthGuard from "../../auth/defaultAuth.guard";
import { isRecordNotFoundError } from "../../prisma.util";
import * as errors from "../../errors";
import { Request } from "express";
import { plainToClass } from "class-transformer";
import { ApiNestedQuery } from "../../decorators/api-nested-query.decorator";
import { UserService } from "../user.service";
import { Public } from "../../decorators/public.decorator";
import { UserCreateInput } from "./UserCreateInput";
import { UserWhereInput } from "./UserWhereInput";
import { UserWhereUniqueInput } from "./UserWhereUniqueInput";
import { UserFindManyArgs } from "./UserFindManyArgs";
import { UserUpdateInput } from "./UserUpdateInput";
import { User } from "./User";
import { BranchFindManyArgs } from "../../branch/base/BranchFindManyArgs";
import { Branch } from "../../branch/base/Branch";
import { BranchWhereUniqueInput } from "../../branch/base/BranchWhereUniqueInput";
@swagger.ApiBearerAuth()
@common.UseGuards(defaultAuthGuard.DefaultAuthGuard, nestAccessControl.ACGuard)
export class UserControllerBase {
  constructor(
    protected readonly service: UserService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}

  @Public()
  @common.Post()
  @swagger.ApiCreatedResponse({ type: User })
  @swagger.ApiForbiddenResponse({ type: errors.ForbiddenException })
  async create(@common.Body() data: UserCreateInput): Promise<User> {
    return await this.service.create({
      data: data,
      select: {
        createdAt: true,
        email: true,
        firstName: true,
        id: true,
        lastName: true,
        roles: true,
        updatedAt: true,
        userId: true,
        username: true,
      },
    });
  }

  @Public()
  @common.Get()
  @swagger.ApiOkResponse({ type: [User] })
  @swagger.ApiForbiddenResponse()
  @ApiNestedQuery(UserFindManyArgs)
  async findMany(@common.Req() request: Request): Promise<User[]> {
    const args = plainToClass(UserFindManyArgs, request.query);
    return this.service.findMany({
      ...args,
      select: {
        createdAt: true,
        email: true,
        firstName: true,
        id: true,
        lastName: true,
        roles: true,
        updatedAt: true,
        userId: true,
        username: true,
      },
    });
  }

  @Public()
  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: User })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @swagger.ApiForbiddenResponse({ type: errors.ForbiddenException })
  async findOne(
    @common.Param() params: UserWhereUniqueInput
  ): Promise<User | null> {
    const result = await this.service.findOne({
      where: params,
      select: {
        createdAt: true,
        email: true,
        firstName: true,
        id: true,
        lastName: true,
        roles: true,
        updatedAt: true,
        userId: true,
        username: true,
      },
    });
    if (result === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return result;
  }

  @Public()
  @common.Patch("/:id")
  @swagger.ApiOkResponse({ type: User })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @swagger.ApiForbiddenResponse({ type: errors.ForbiddenException })
  async update(
    @common.Param() params: UserWhereUniqueInput,
    @common.Body() data: UserUpdateInput
  ): Promise<User | null> {
    try {
      return await this.service.update({
        where: params,
        data: data,
        select: {
          createdAt: true,
          email: true,
          firstName: true,
          id: true,
          lastName: true,
          roles: true,
          updatedAt: true,
          userId: true,
          username: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }

  @Public()
  @common.Delete("/:id")
  @swagger.ApiOkResponse({ type: User })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @swagger.ApiForbiddenResponse({ type: errors.ForbiddenException })
  async delete(
    @common.Param() params: UserWhereUniqueInput
  ): Promise<User | null> {
    try {
      return await this.service.delete({
        where: params,
        select: {
          createdAt: true,
          email: true,
          firstName: true,
          id: true,
          lastName: true,
          roles: true,
          updatedAt: true,
          userId: true,
          username: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }

  @Public()
  @common.Get("/:id/branches")
  @ApiNestedQuery(BranchFindManyArgs)
  async findManyBranches(
    @common.Req() request: Request,
    @common.Param() params: UserWhereUniqueInput
  ): Promise<Branch[]> {
    const query = plainToClass(BranchFindManyArgs, request.query);
    const results = await this.service.findBranches(params.id, {
      ...query,
      select: {
        address: true,
        branchCode: true,

        branchmanagerid: {
          select: {
            id: true,
          },
        },

        branchName: true,
        createdAt: true,
        id: true,
        location: true,
        status: true,

        test: {
          select: {
            id: true,
          },
        },

        updatedAt: true,
      },
    });
    if (results === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return results;
  }

  @Public()
  @common.Post("/:id/branches")
  async connectBranches(
    @common.Param() params: UserWhereUniqueInput,
    @common.Body() body: BranchWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      branches: {
        connect: body,
      },
    };
    await this.service.update({
      where: params,
      data,
      select: { id: true },
    });
  }

  @Public()
  @common.Patch("/:id/branches")
  async updateBranches(
    @common.Param() params: UserWhereUniqueInput,
    @common.Body() body: BranchWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      branches: {
        set: body,
      },
    };
    await this.service.update({
      where: params,
      data,
      select: { id: true },
    });
  }

  @Public()
  @common.Delete("/:id/branches")
  async disconnectBranches(
    @common.Param() params: UserWhereUniqueInput,
    @common.Body() body: BranchWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      branches: {
        disconnect: body,
      },
    };
    await this.service.update({
      where: params,
      data,
      select: { id: true },
    });
  }

  @Public()
  @common.Get("/:id/test")
  @ApiNestedQuery(BranchFindManyArgs)
  async findManyTest(
    @common.Req() request: Request,
    @common.Param() params: UserWhereUniqueInput
  ): Promise<Branch[]> {
    const query = plainToClass(BranchFindManyArgs, request.query);
    const results = await this.service.findTest(params.id, {
      ...query,
      select: {
        address: true,
        branchCode: true,

        branchmanagerid: {
          select: {
            id: true,
          },
        },

        branchName: true,
        createdAt: true,
        id: true,
        location: true,
        status: true,

        test: {
          select: {
            id: true,
          },
        },

        updatedAt: true,
      },
    });
    if (results === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return results;
  }

  @Public()
  @common.Post("/:id/test")
  async connectTest(
    @common.Param() params: UserWhereUniqueInput,
    @common.Body() body: BranchWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      test: {
        connect: body,
      },
    };
    await this.service.update({
      where: params,
      data,
      select: { id: true },
    });
  }

  @Public()
  @common.Patch("/:id/test")
  async updateTest(
    @common.Param() params: UserWhereUniqueInput,
    @common.Body() body: BranchWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      test: {
        set: body,
      },
    };
    await this.service.update({
      where: params,
      data,
      select: { id: true },
    });
  }

  @Public()
  @common.Delete("/:id/test")
  async disconnectTest(
    @common.Param() params: UserWhereUniqueInput,
    @common.Body() body: BranchWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      test: {
        disconnect: body,
      },
    };
    await this.service.update({
      where: params,
      data,
      select: { id: true },
    });
  }
}
