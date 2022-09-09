import { Injectable } from "@nestjs/common";
import { PrismaService } from "nestjs-prisma";
import { TestingServiceBase } from "./base/testing.service.base";

@Injectable()
export class TestingService extends TestingServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
