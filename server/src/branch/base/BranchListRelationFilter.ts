/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/docs/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { BranchWhereInput } from "./BranchWhereInput";
import { ValidateNested, IsOptional } from "class-validator";
import { Type } from "class-transformer";

@InputType()
class BranchListRelationFilter {
  @ApiProperty({
    required: false,
    type: () => BranchWhereInput,
  })
  @ValidateNested()
  @Type(() => BranchWhereInput)
  @IsOptional()
  @Field(() => BranchWhereInput, {
    nullable: true,
  })
  every?: BranchWhereInput;

  @ApiProperty({
    required: false,
    type: () => BranchWhereInput,
  })
  @ValidateNested()
  @Type(() => BranchWhereInput)
  @IsOptional()
  @Field(() => BranchWhereInput, {
    nullable: true,
  })
  some?: BranchWhereInput;

  @ApiProperty({
    required: false,
    type: () => BranchWhereInput,
  })
  @ValidateNested()
  @Type(() => BranchWhereInput)
  @IsOptional()
  @Field(() => BranchWhereInput, {
    nullable: true,
  })
  none?: BranchWhereInput;
}
export { BranchListRelationFilter };
