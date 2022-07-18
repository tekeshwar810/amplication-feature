import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { UserService } from "./user.service";
import { UserControllerBase } from "./base/user.controller.base";
import {Request} from 'express'

import * as nestMorgan from "nest-morgan";
// import * as basicAuthGuard from "../auth/basicAuth.guard";
import * as errors from "../errors";
import { User } from "./base/User"; //model file
import { UserWhereUniqueInput } from "./base/UserWhereUniqueInput";
import { AclValidateRequestInterceptor } from "src/interceptors/aclValidateRequest.interceptor";
import { UserCreateInput } from "./base/UserCreateInput";
import { UserRoleWhereInput } from "./base/UserRoleWhereInput";
import { Response, UseGuards } from "@nestjs/common";
import { AuthGuard } from "@nestjs/passport";

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


  @common.UseInterceptors(AclValidateRequestInterceptor)
  @common.Get("/getUserByName/:roles")
  // @UseGuards(AuthGuard('jwt'))
  @nestAccessControl.UseRoles({
    resource: "User",
    action: "update",
    possession: "own",
  })
  @swagger.ApiOkResponse({ type: User })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @swagger.ApiForbiddenResponse({ type: errors.ForbiddenException })
   async getUserByName(
    // @common.Body() body: UserCreateInput,
    @common.Param() params : UserRoleWhereInput,
    
  ): Promise<User | null>{
    let roles = params.roles
    let userAry:Array<string> = roles
    
    const result =  this.service.getUserByName(userAry);
    if (result === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params.roles)}`
      );
    }
    return result;
  }
}
