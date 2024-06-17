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
  Event as PrismaEvent,
  Ticket as PrismaTicket,
} from "@prisma/client";

export class EventServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count(args: Omit<Prisma.EventCountArgs, "select">): Promise<number> {
    return this.prisma.event.count(args);
  }

  async events<T extends Prisma.EventFindManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.EventFindManyArgs>
  ): Promise<PrismaEvent[]> {
    return this.prisma.event.findMany<Prisma.EventFindManyArgs>(args);
  }
  async event<T extends Prisma.EventFindUniqueArgs>(
    args: Prisma.SelectSubset<T, Prisma.EventFindUniqueArgs>
  ): Promise<PrismaEvent | null> {
    return this.prisma.event.findUnique(args);
  }
  async createEvent<T extends Prisma.EventCreateArgs>(
    args: Prisma.SelectSubset<T, Prisma.EventCreateArgs>
  ): Promise<PrismaEvent> {
    return this.prisma.event.create<T>(args);
  }
  async updateEvent<T extends Prisma.EventUpdateArgs>(
    args: Prisma.SelectSubset<T, Prisma.EventUpdateArgs>
  ): Promise<PrismaEvent> {
    return this.prisma.event.update<T>(args);
  }
  async deleteEvent<T extends Prisma.EventDeleteArgs>(
    args: Prisma.SelectSubset<T, Prisma.EventDeleteArgs>
  ): Promise<PrismaEvent> {
    return this.prisma.event.delete(args);
  }

  async findTickets(
    parentId: string,
    args: Prisma.TicketFindManyArgs
  ): Promise<PrismaTicket[]> {
    return this.prisma.event
      .findUniqueOrThrow({
        where: { id: parentId },
      })
      .tickets(args);
  }
}
