import { Injectable } from "@nestjs/common";
import { PrismaService } from "nestjs-prisma";
import { BranchServiceBase } from "./base/branch.service.base";

@Injectable()
export class BranchService extends BranchServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }

  async getBranchByCode(branchCode:string) {
    const userData:any = await this.prisma.branch.findMany({
      where: { 
        branchCode: branchCode        
       },
       select:{
        createdAt: true,
        address: true,
       }
  });
  
  return userData

  }
}
