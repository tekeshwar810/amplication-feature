import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { TestingService } from "./testing.service";
import { TestingControllerBase } from "./base/testing.controller.base";

@swagger.ApiTags("testings")
@common.Controller("testings")
export class TestingController extends TestingControllerBase {
  constructor(
    protected readonly service: TestingService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
