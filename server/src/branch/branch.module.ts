import { Module } from "@nestjs/common";
import { BranchModuleBase } from "./base/branch.module.base";
import { BranchService } from "./branch.service";
import { BranchController } from "./branch.controller";
import { BranchResolver } from "./branch.resolver";
import { MulterModule } from "@nestjs/platform-express";
import path from 'path'
import { diskStorage } from "multer";
import { imageFileFilter } from "src/util/FileValidator";

@Module({
  imports: [BranchModuleBase,  MulterModule.register({
    storage:diskStorage({
      destination:'./uploads',
      filename: function (req, file, cb) {
        cb(null, Date.now() + '-' + file.originalname)
      },
    }),
    limits: {
      fileSize:10000
    }
  })],
  controllers: [BranchController],
  providers: [BranchService, BranchResolver],
  exports: [BranchService],
})
export class BranchModule {}
