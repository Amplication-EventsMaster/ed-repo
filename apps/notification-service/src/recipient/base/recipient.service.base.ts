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
  Recipient as PrismaRecipient,
  Notification as PrismaNotification,
} from "@prisma/client";

export class RecipientServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count(
    args: Omit<Prisma.RecipientCountArgs, "select">
  ): Promise<number> {
    return this.prisma.recipient.count(args);
  }

  async recipients<T extends Prisma.RecipientFindManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.RecipientFindManyArgs>
  ): Promise<PrismaRecipient[]> {
    return this.prisma.recipient.findMany<Prisma.RecipientFindManyArgs>(args);
  }
  async recipient<T extends Prisma.RecipientFindUniqueArgs>(
    args: Prisma.SelectSubset<T, Prisma.RecipientFindUniqueArgs>
  ): Promise<PrismaRecipient | null> {
    return this.prisma.recipient.findUnique(args);
  }
  async createRecipient<T extends Prisma.RecipientCreateArgs>(
    args: Prisma.SelectSubset<T, Prisma.RecipientCreateArgs>
  ): Promise<PrismaRecipient> {
    return this.prisma.recipient.create<T>(args);
  }
  async updateRecipient<T extends Prisma.RecipientUpdateArgs>(
    args: Prisma.SelectSubset<T, Prisma.RecipientUpdateArgs>
  ): Promise<PrismaRecipient> {
    return this.prisma.recipient.update<T>(args);
  }
  async deleteRecipient<T extends Prisma.RecipientDeleteArgs>(
    args: Prisma.SelectSubset<T, Prisma.RecipientDeleteArgs>
  ): Promise<PrismaRecipient> {
    return this.prisma.recipient.delete(args);
  }

  async findNotifications(
    parentId: string,
    args: Prisma.NotificationFindManyArgs
  ): Promise<PrismaNotification[]> {
    return this.prisma.recipient
      .findUniqueOrThrow({
        where: { id: parentId },
      })
      .notifications(args);
  }
}
