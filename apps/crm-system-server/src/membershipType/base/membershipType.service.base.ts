/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { PrismaService } from "../../prisma/prisma.service";
import {
  Prisma,
  MembershipType as PrismaMembershipType,
  Member as PrismaMember,
} from "@prisma/client";

export class MembershipTypeServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count(
    args: Omit<Prisma.MembershipTypeCountArgs, "select">
  ): Promise<number> {
    return this.prisma.membershipType.count(args);
  }

  async membershipTypes<T extends Prisma.MembershipTypeFindManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.MembershipTypeFindManyArgs>
  ): Promise<PrismaMembershipType[]> {
    return this.prisma.membershipType.findMany<Prisma.MembershipTypeFindManyArgs>(
      args
    );
  }
  async membershipType<T extends Prisma.MembershipTypeFindUniqueArgs>(
    args: Prisma.SelectSubset<T, Prisma.MembershipTypeFindUniqueArgs>
  ): Promise<PrismaMembershipType | null> {
    return this.prisma.membershipType.findUnique(args);
  }
  async createMembershipType<T extends Prisma.MembershipTypeCreateArgs>(
    args: Prisma.SelectSubset<T, Prisma.MembershipTypeCreateArgs>
  ): Promise<PrismaMembershipType> {
    return this.prisma.membershipType.create<T>(args);
  }
  async updateMembershipType<T extends Prisma.MembershipTypeUpdateArgs>(
    args: Prisma.SelectSubset<T, Prisma.MembershipTypeUpdateArgs>
  ): Promise<PrismaMembershipType> {
    return this.prisma.membershipType.update<T>(args);
  }
  async deleteMembershipType<T extends Prisma.MembershipTypeDeleteArgs>(
    args: Prisma.SelectSubset<T, Prisma.MembershipTypeDeleteArgs>
  ): Promise<PrismaMembershipType> {
    return this.prisma.membershipType.delete(args);
  }

  async findMembers(
    parentId: string,
    args: Prisma.MemberFindManyArgs
  ): Promise<PrismaMember[]> {
    return this.prisma.membershipType
      .findUniqueOrThrow({
        where: { id: parentId },
      })
      .members(args);
  }
}
