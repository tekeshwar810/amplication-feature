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
import { BranchService } from "../branch.service";
import { Public } from "../../decorators/public.decorator";
import { BranchCreateInput } from "./BranchCreateInput";
import { BranchWhereInput } from "./BranchWhereInput";
import { BranchWhereUniqueInput } from "./BranchWhereUniqueInput";
import { BranchFindManyArgs } from "./BranchFindManyArgs";
import { BranchUpdateInput } from "./BranchUpdateInput";
import { Branch } from "./Branch";
@swagger.ApiBearerAuth()
@common.UseGuards(defaultAuthGuard.DefaultAuthGuard, nestAccessControl.ACGuard)
export class BranchControllerBase {
  constructor(
    protected readonly service: BranchService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}

  @Public()
  @common.Post()
  @swagger.ApiCreatedResponse({ type: Branch })
  @swagger.ApiForbiddenResponse({ type: errors.ForbiddenException })
  async create(@common.Body() data: BranchCreateInput): Promise<Branch> {
    return await this.service.create({
      data: {
        ...data,

        branchmanagerid: data.branchmanagerid
          ? {
              connect: data.branchmanagerid,
            }
          : undefined,

        test: data.test
          ? {
              connect: data.test,
            }
          : undefined,
      },
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
  }

  @Public()
  @common.Get()
  @swagger.ApiOkResponse({ type: [Branch] })
  @swagger.ApiForbiddenResponse()
  @ApiNestedQuery(BranchFindManyArgs)
  async findMany(@common.Req() request: Request): Promise<Branch[]> {
    const args = plainToClass(BranchFindManyArgs, request.query);
    return this.service.findMany({
      ...args,
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
  }

  @Public()
  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: Branch })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @swagger.ApiForbiddenResponse({ type: errors.ForbiddenException })
  async findOne(
    @common.Param() params: BranchWhereUniqueInput
  ): Promise<Branch | null> {
    const result = await this.service.findOne({
      where: params,
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
    if (result === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return result;
  }

  @Public()
  @common.Patch("/:id")
  @swagger.ApiOkResponse({ type: Branch })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @swagger.ApiForbiddenResponse({ type: errors.ForbiddenException })
  async update(
    @common.Param() params: BranchWhereUniqueInput,
    @common.Body() data: BranchUpdateInput
  ): Promise<Branch | null> {
    try {
      return await this.service.update({
        where: params,
        data: {
          ...data,

          branchmanagerid: data.branchmanagerid
            ? {
                connect: data.branchmanagerid,
              }
            : undefined,

          test: data.test
            ? {
                connect: data.test,
              }
            : undefined,
        },
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
  @swagger.ApiOkResponse({ type: Branch })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @swagger.ApiForbiddenResponse({ type: errors.ForbiddenException })
  async delete(
    @common.Param() params: BranchWhereUniqueInput
  ): Promise<Branch | null> {
    try {
      return await this.service.delete({
        where: params,
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
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }
}
