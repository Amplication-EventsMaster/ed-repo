/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { ArgsType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { NotificationTypeWhereUniqueInput } from "./NotificationTypeWhereUniqueInput";
import { ValidateNested } from "class-validator";
import { Type } from "class-transformer";
import { NotificationTypeUpdateInput } from "./NotificationTypeUpdateInput";

@ArgsType()
class UpdateNotificationTypeArgs {
  @ApiProperty({
    required: true,
    type: () => NotificationTypeWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => NotificationTypeWhereUniqueInput)
  @Field(() => NotificationTypeWhereUniqueInput, { nullable: false })
  where!: NotificationTypeWhereUniqueInput;

  @ApiProperty({
    required: true,
    type: () => NotificationTypeUpdateInput,
  })
  @ValidateNested()
  @Type(() => NotificationTypeUpdateInput)
  @Field(() => NotificationTypeUpdateInput, { nullable: false })
  data!: NotificationTypeUpdateInput;
}

export { UpdateNotificationTypeArgs as UpdateNotificationTypeArgs };
