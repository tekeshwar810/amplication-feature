import * as common from "@nestjs/common";
import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { ExpenseResolverBase } from "./base/expense.resolver.base";
import { Expense } from "./base/Expense";
import { ExpenseService } from "./expense.service";

@graphql.Resolver(() => Expense)
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
export class ExpenseResolver extends ExpenseResolverBase {
  constructor(
    protected readonly service: ExpenseService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
