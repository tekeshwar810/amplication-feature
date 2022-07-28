import { Injectable } from "@nestjs/common";
import { PrismaService } from "nestjs-prisma";
import { BranchServiceBase } from "./base/branch.service.base";

@Injectable()
export class BranchService extends BranchServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }

  async getBranchByCode(params:any,query:any) {
    const condition:any = {}
    console.log(typeof query.assign)
    if(query.assign == 'true'){
      condition.branchmanageridId = params.branchManagerId
    }else{
      condition.branchmanageridId = null
    }
    
    const branchData:any = await this.prisma.branch.update({
      where: { 
        id: params.id
       },
       data: condition
  });
  if(branchData){
   if(query.assign == 'true'){
      return {msg:'assign successfully',success:true}
  }else{
    return {msg:'unassign successfully',success:true}
  }
  }else{
    return {msg:'assign successfully not',success:false}
  }
  }
}
