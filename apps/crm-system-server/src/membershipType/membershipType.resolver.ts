import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { MembershipTypeResolverBase } from "./base/membershipType.resolver.base";
import { MembershipType } from "./base/MembershipType";
import { MembershipTypeService } from "./membershipType.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => MembershipType)
export class MembershipTypeResolver extends MembershipTypeResolverBase {
  constructor(
    protected readonly service: MembershipTypeService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
