import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { MembershipTypeServiceBase } from "./base/membershipType.service.base";

@Injectable()
export class MembershipTypeService extends MembershipTypeServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
