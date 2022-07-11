import { Injectable } from "@nestjs/common";
import { PrismaService } from "nestjs-prisma";
import { BranchServiceBase } from "./base/branch.service.base";

@Injectable()
export class BranchService extends BranchServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
