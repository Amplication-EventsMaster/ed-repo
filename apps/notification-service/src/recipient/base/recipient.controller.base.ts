/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { isRecordNotFoundError } from "../../prisma.util";
import * as errors from "../../errors";
import { Request } from "express";
import { plainToClass } from "class-transformer";
import { ApiNestedQuery } from "../../decorators/api-nested-query.decorator";
import { RecipientService } from "../recipient.service";
import { RecipientCreateInput } from "./RecipientCreateInput";
import { Recipient } from "./Recipient";
import { RecipientFindManyArgs } from "./RecipientFindManyArgs";
import { RecipientWhereUniqueInput } from "./RecipientWhereUniqueInput";
import { RecipientUpdateInput } from "./RecipientUpdateInput";
import { NotificationFindManyArgs } from "../../notification/base/NotificationFindManyArgs";
import { Notification } from "../../notification/base/Notification";
import { NotificationWhereUniqueInput } from "../../notification/base/NotificationWhereUniqueInput";

export class RecipientControllerBase {
  constructor(protected readonly service: RecipientService) {}
  @common.Post()
  @swagger.ApiCreatedResponse({ type: Recipient })
  async createRecipient(
    @common.Body() data: RecipientCreateInput
  ): Promise<Recipient> {
    return await this.service.createRecipient({
      data: data,
      select: {
        contactInfo: true,
        createdAt: true,
        firstName: true,
        id: true,
        lastName: true,
        preferredNotificationType: true,
        updatedAt: true,
      },
    });
  }

  @common.Get()
  @swagger.ApiOkResponse({ type: [Recipient] })
  @ApiNestedQuery(RecipientFindManyArgs)
  async recipients(@common.Req() request: Request): Promise<Recipient[]> {
    const args = plainToClass(RecipientFindManyArgs, request.query);
    return this.service.recipients({
      ...args,
      select: {
        contactInfo: true,
        createdAt: true,
        firstName: true,
        id: true,
        lastName: true,
        preferredNotificationType: true,
        updatedAt: true,
      },
    });
  }

  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: Recipient })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async recipient(
    @common.Param() params: RecipientWhereUniqueInput
  ): Promise<Recipient | null> {
    const result = await this.service.recipient({
      where: params,
      select: {
        contactInfo: true,
        createdAt: true,
        firstName: true,
        id: true,
        lastName: true,
        preferredNotificationType: true,
        updatedAt: true,
      },
    });
    if (result === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return result;
  }

  @common.Patch("/:id")
  @swagger.ApiOkResponse({ type: Recipient })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async updateRecipient(
    @common.Param() params: RecipientWhereUniqueInput,
    @common.Body() data: RecipientUpdateInput
  ): Promise<Recipient | null> {
    try {
      return await this.service.updateRecipient({
        where: params,
        data: data,
        select: {
          contactInfo: true,
          createdAt: true,
          firstName: true,
          id: true,
          lastName: true,
          preferredNotificationType: true,
          updatedAt: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }

  @common.Delete("/:id")
  @swagger.ApiOkResponse({ type: Recipient })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async deleteRecipient(
    @common.Param() params: RecipientWhereUniqueInput
  ): Promise<Recipient | null> {
    try {
      return await this.service.deleteRecipient({
        where: params,
        select: {
          contactInfo: true,
          createdAt: true,
          firstName: true,
          id: true,
          lastName: true,
          preferredNotificationType: true,
          updatedAt: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }

  @common.Get("/:id/notifications")
  @ApiNestedQuery(NotificationFindManyArgs)
  async findNotifications(
    @common.Req() request: Request,
    @common.Param() params: RecipientWhereUniqueInput
  ): Promise<Notification[]> {
    const query = plainToClass(NotificationFindManyArgs, request.query);
    const results = await this.service.findNotifications(params.id, {
      ...query,
      select: {
        createdAt: true,
        id: true,
        message: true,

        notificationType: {
          select: {
            id: true,
          },
        },

        recipient: {
          select: {
            id: true,
          },
        },

        status: true,
        title: true,
        updatedAt: true,
      },
    });
    if (results === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return results;
  }

  @common.Post("/:id/notifications")
  async connectNotifications(
    @common.Param() params: RecipientWhereUniqueInput,
    @common.Body() body: NotificationWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      notifications: {
        connect: body,
      },
    };
    await this.service.updateRecipient({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Patch("/:id/notifications")
  async updateNotifications(
    @common.Param() params: RecipientWhereUniqueInput,
    @common.Body() body: NotificationWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      notifications: {
        set: body,
      },
    };
    await this.service.updateRecipient({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Delete("/:id/notifications")
  async disconnectNotifications(
    @common.Param() params: RecipientWhereUniqueInput,
    @common.Body() body: NotificationWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      notifications: {
        disconnect: body,
      },
    };
    await this.service.updateRecipient({
      where: params,
      data,
      select: { id: true },
    });
  }
}
