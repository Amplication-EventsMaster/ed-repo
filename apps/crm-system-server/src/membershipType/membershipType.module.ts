import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { MembershipTypeModuleBase } from "./base/membershipType.module.base";
import { MembershipTypeService } from "./membershipType.service";
import { MembershipTypeController } from "./membershipType.controller";
import { MembershipTypeResolver } from "./membershipType.resolver";

@Module({
  imports: [MembershipTypeModuleBase, forwardRef(() => AuthModule)],
  controllers: [MembershipTypeController],
  providers: [MembershipTypeService, MembershipTypeResolver],
  exports: [MembershipTypeService],
})
export class MembershipTypeModule {}
