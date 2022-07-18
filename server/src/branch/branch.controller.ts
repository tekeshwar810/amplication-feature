import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { BranchService } from "./branch.service";
import { BranchControllerBase } from "./base/branch.controller.base";
import { AclValidateRequestInterceptor } from "src/interceptors/aclValidateRequest.interceptor";
import { Branch } from "./base/Branch";
import { BranchCodeWhereInput } from "./base/BranchCodeWhereInput";
import * as errors from "../errors";
import { ValidationPipe } from "@nestjs/common";

@swagger.ApiTags("branches")
@common.Controller("branches")
export class BranchController extends BranchControllerBase {
  constructor(
    protected readonly service: BranchService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @common.Post("/getBranchByBranchCode")
  @nestAccessControl.UseRoles({
    resource: "Branch",
    action: "read",
    possession: "own",
  })
  @swagger.ApiOkResponse({ type: Branch })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @swagger.ApiForbiddenResponse({ type: errors.ForbiddenException })
   async getUserByName(
    @common.Body(new ValidationPipe()) body: BranchCodeWhereInput,
  ): Promise<Branch | null>{
    const branchCode = body.branchCode    
    const result =  this.service.getBranchByCode(branchCode);
    if (result === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(body.branchCode)}`
      );
    }
    return result;
  }
}
