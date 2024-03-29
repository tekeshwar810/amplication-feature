/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/docs/how-to/custom-code

------------------------------------------------------------------------------
  */
import { ArgsType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { TestingWhereInput } from "./TestingWhereInput";
import { Type } from "class-transformer";
import { TestingOrderByInput } from "./TestingOrderByInput";

@ArgsType()
class TestingFindManyArgs {
  @ApiProperty({
    required: false,
    type: () => TestingWhereInput,
  })
  @Field(() => TestingWhereInput, { nullable: true })
  @Type(() => TestingWhereInput)
  where?: TestingWhereInput;

  @ApiProperty({
    required: false,
    type: [TestingOrderByInput],
  })
  @Field(() => [TestingOrderByInput], { nullable: true })
  @Type(() => TestingOrderByInput)
  orderBy?: Array<TestingOrderByInput>;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @Field(() => Number, { nullable: true })
  @Type(() => Number)
  skip?: number;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @Field(() => Number, { nullable: true })
  @Type(() => Number)
  take?: number;
}

export { TestingFindManyArgs };
