import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { DemoService } from "./demo.service";
import { DemoControllerBase } from "./base/demo.controller.base";

@swagger.ApiTags("demos")
@common.Controller("demos")
export class DemoController extends DemoControllerBase {
  constructor(
    protected readonly service: DemoService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
