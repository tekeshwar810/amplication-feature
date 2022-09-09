import { Injectable } from "@nestjs/common";
import { PrismaService } from "nestjs-prisma";
import { DemoServiceBase } from "./base/demo.service.base";

@Injectable()
export class DemoService extends DemoServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
