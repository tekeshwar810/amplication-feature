import { CanActivate, ExecutionContext,  Injectable } from "@nestjs/common";
import { PrismaService } from "nestjs-prisma";
import { UserServiceBase } from "./base/user.service.base";
import { PasswordService } from "../auth/password.service";
import { UserFindUniqueArgs } from "./base/UserFindUniqueArgs";
import { User } from "@prisma/client";
import { UserRoleWhereInput } from "./base/UserRoleWhereInput";
import { Observable } from "rxjs";

@Injectable()
export class UserService extends UserServiceBase {
  constructor(
    protected readonly prisma: PrismaService,
    protected readonly passwordService: PasswordService
  ) {
    super(prisma, passwordService);
  }


  async getUserByName(roles:Array<string>) {


       
      // const ctx = context.switchToHttp()
      // const request:any = ctx.getRequest<Request>()

  
    const userData:any = await this.prisma.user.findMany({
      where: { 
        roles: {
          hasEvery: roles,
        },
       },
       select:{
        createdAt: true,
        email: true,
       }
  });
  
  return userData


}
}
function context(context: any, ExecutionContext: any) {
  throw new Error("Function not implemented.");
}

