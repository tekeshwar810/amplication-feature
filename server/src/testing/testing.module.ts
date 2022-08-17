import { Module } from "@nestjs/common";
import { TestingModuleBase } from "./base/testing.module.base";
import { TestingService } from "./testing.service";
import { TestingController } from "./testing.controller";
import { TestingResolver } from "./testing.resolver";

@Module({
  imports: [TestingModuleBase],
  controllers: [TestingController],
  providers: [TestingService, TestingResolver],
  exports: [TestingService],
})
export class TestingModule {}
