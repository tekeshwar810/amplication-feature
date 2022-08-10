import { MiddlewareConsumer, Module } from "@nestjs/common";
import { UserModuleBase } from "./base/user.module.base";
import { UserService } from "./user.service";
import { UserController } from "./user.controller";
import { UserResolver } from "./user.resolver";
import { UserMiddelware } from "./user.middleware";

@Module({
  imports: [UserModuleBase],
  controllers: [UserController],
  providers: [UserService, UserResolver],
  exports: [UserService],
})
export class UserModule {
  constructor(){}
    configure(consumer:MiddlewareConsumer) {
        consumer.apply(UserMiddelware).forRoutes('users/getUserSearch')
        
    }
}
