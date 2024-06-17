import { Module } from "@nestjs/common";
import { RecipientModuleBase } from "./base/recipient.module.base";
import { RecipientService } from "./recipient.service";
import { RecipientController } from "./recipient.controller";

@Module({
  imports: [RecipientModuleBase],
  controllers: [RecipientController],
  providers: [RecipientService],
  exports: [RecipientService],
})
export class RecipientModule {}
