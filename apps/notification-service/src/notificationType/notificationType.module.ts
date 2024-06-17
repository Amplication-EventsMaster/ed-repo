import { Module } from "@nestjs/common";
import { NotificationTypeModuleBase } from "./base/notificationType.module.base";
import { NotificationTypeService } from "./notificationType.service";
import { NotificationTypeController } from "./notificationType.controller";

@Module({
  imports: [NotificationTypeModuleBase],
  controllers: [NotificationTypeController],
  providers: [NotificationTypeService],
  exports: [NotificationTypeService],
})
export class NotificationTypeModule {}
