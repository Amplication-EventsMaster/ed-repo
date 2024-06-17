import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { MembershipTypeService } from "./membershipType.service";
import { MembershipTypeControllerBase } from "./base/membershipType.controller.base";

@swagger.ApiTags("membershipTypes")
@common.Controller("membershipTypes")
export class MembershipTypeController extends MembershipTypeControllerBase {
  constructor(
    protected readonly service: MembershipTypeService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
