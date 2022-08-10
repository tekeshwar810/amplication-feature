import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { UserService } from "./user.service";
import { UserControllerBase } from "./base/user.controller.base";
import { Request } from 'express'
import { Get } from "@nestjs/common";

import * as nestMorgan from "nest-morgan";
// import * as basicAuthGuard from "../auth/basicAuth.guard";
import * as errors from "../errors";
import { User } from "./base/User"; //model file
import { UserWhereUniqueInput } from "./base/UserWhereUniqueInput";
import { AclValidateRequestInterceptor } from "src/interceptors/aclValidateRequest.interceptor";
import { UserCreateInput } from "./base/UserCreateInput";
import { UserRoleWhereInput } from "./base/UserRoleWhereInput";
import { Req, Response, UseGuards } from "@nestjs/common";
import { AuthGuard } from "@nestjs/passport";
import  log  from "src/util/logger";
import { Logger } from "winston";
import { Public } from "src/decorators/public.decorator";
import { Console } from "winston/lib/winston/transports";
import { RoleGuard } from "./role.guard";


@swagger.ApiTags("users")
@common.Controller("users")
export class UserController extends UserControllerBase {
  constructor(
    protected readonly service: UserService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
  @Public()
  // @Public()  by using Public decorator we can run without token api
  @Get("/getUserByName/:roles")
  // @UseGuards(AuthGuard('jwt'))
  // @nestAccessControl.UseRoles({
  //   resource: "User",
  //   action: "update",
  //   possession: "own",
  // })
  @swagger.ApiOkResponse({ type: User })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @swagger.ApiForbiddenResponse({ type: errors.ForbiddenException })
   async getUserByName(
    // @common.Body() body: UserCreateInput,
    @common.Param() params : UserRoleWhereInput,
    @Req() req : Request
  ): Promise<User | null>{
    let roles = params.roles
    let userAry:Array<string> = roles



    
    
    log.logger.info(`get user by name api run`)
    const result =  await this.service.getUserByName(userAry);
    if (result === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params.roles)}`
      );
    }
    return result;
  }

  
  @Get("/getUserSearch")
  // @UseGuards(AuthGuard('jwt'))
  // @nestAccessControl.UseRoles({
  //   resource: "User",
  //   action: "update",
  //   possession: "own",
  // })
  @UseGuards(AuthGuard('jwt'),new RoleGuard('fiadmin'))
  @swagger.ApiOkResponse({ type: User })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @swagger.ApiForbiddenResponse({ type: errors.ForbiddenException })
   async getUserSearch(
    // @common.Body() body: UserCreateInput,
    // @common.Param() params : UserRoleWhereInput,
    @Req() req : Request
  ): Promise<String>{
    
    // console.log('searching',req.headers)
    // let roles = params.roles
    // let userAry:Array<string> = roles
    
    // d.logger.info(`get user by name api run`)
    // const result =  await this.service.getUserByName(userAry);
    // if (result === null) {
    //   throw new errors.NotFoundException(
    //     `No resource was found for ${JSON.stringify(params.roles)}`
    //   );
    // }
    return 'testing';
  }
}

