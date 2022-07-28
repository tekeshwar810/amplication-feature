import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { BranchService } from "./branch.service";
import { BranchControllerBase } from "./base/branch.controller.base";
import { AclValidateRequestInterceptor } from "src/interceptors/aclValidateRequest.interceptor";
import { Branch } from "./base/Branch";
import { BranchCodeWhereInput } from "./base/BranchCodeWhereInput";
import * as errors from "../errors";
import { BadRequestException, Param, Req, Response, UploadedFile, UploadedFiles, UseInterceptors, ValidationPipe } from "@nestjs/common";
import { BranchWhereUniqueInput } from "./base/BranchWhereUniqueInput";
import { BranchQueryInput } from "./base/BranchQueryInput";
import { FileFieldsInterceptor, FileInterceptor, FilesInterceptor } from "@nestjs/platform-express";
import { Express,Request } from 'express'
import path from 'path'
import { ApiBody, ApiConsumes } from "@nestjs/swagger";
import { imageFileFilter } from "src/util/FileValidator";
@swagger.ApiTags("branches")
@common.Controller("branches")
export class BranchController extends BranchControllerBase {
  constructor(
    protected readonly service: BranchService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @common.Put("/assignBranchManager/:id/:branchManagerId")
  @nestAccessControl.UseRoles({
    resource: "Branch",
    action: "update",
    possession: "own",
  })
  @swagger.ApiOkResponse({ type: Branch })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @swagger.ApiForbiddenResponse({ type: errors.ForbiddenException })
    async getUserByName(
    @common.Query() query: BranchQueryInput,
    @common.Param() params: BranchWhereUniqueInput
  ): Promise<object>{
    const result =  await this.service.getBranchByCode(params,query);
    if (result.success) {
      return result;
    }else{
      return result;
    }
  }


  @common.Post('upload')
  @ApiConsumes('multipart/form-data')
  @ApiBody({
    schema: {
      type: 'object',
      properties: {
        // comment: { 
        //   type: 'string' 
          
        //   },
        front: {
          type: 'string',
          format: 'binary',
          required:true
        },
        back: {
          type: 'string',
          format: 'binary',
          required:true
        },
      },
    },
  })
  @UseInterceptors(FileFieldsInterceptor([
    {name:'front', maxCount: 1},
    {name:'back', maxCount: 1}
  ],
  {fileFilter:imageFileFilter}
 ))
  uploadFile(@Req() req:any,@UploadedFiles() files:{front?: Express.Multer.File[],back?: Express.Multer.File[] }) {
    console.log('file',files.front);
    if(req.fileValidationError){
      throw new BadRequestException('invaild file, only img file upload...')
    }
    return files
  }
}


