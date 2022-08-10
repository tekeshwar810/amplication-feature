import { Field, ObjectType } from "@nestjs/graphql";
// @ts-ignore
// eslint-disable-next-line
import { User } from "../user/user";

@ObjectType()
export class UserInfo implements Partial<User> {
  @Field(() => String)
  email!: string;
  @Field(() => [String])
  roles!: string[];
  @Field(() => String, { nullable: true })
  accessToken?: string;
}
