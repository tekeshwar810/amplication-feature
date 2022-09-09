import { Module } from "@nestjs/common";
import { DemoModuleBase } from "./base/demo.module.base";
import { DemoService } from "./demo.service";
import { DemoController } from "./demo.controller";
import { DemoResolver } from "./demo.resolver";

@Module({
  imports: [DemoModuleBase],
  controllers: [DemoController],
  providers: [DemoService, DemoResolver],
  exports: [DemoService],
})
export class DemoModule {}
