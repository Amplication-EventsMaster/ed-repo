/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { NotificationWhereUniqueInput } from "../../notification/base/NotificationWhereUniqueInput";
import { ApiProperty } from "@nestjs/swagger";

@InputType()
class NotificationUpdateManyWithoutRecipientsInput {
  @Field(() => [NotificationWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [NotificationWhereUniqueInput],
  })
  connect?: Array<NotificationWhereUniqueInput>;

  @Field(() => [NotificationWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [NotificationWhereUniqueInput],
  })
  disconnect?: Array<NotificationWhereUniqueInput>;

  @Field(() => [NotificationWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [NotificationWhereUniqueInput],
  })
  set?: Array<NotificationWhereUniqueInput>;
}

export { NotificationUpdateManyWithoutRecipientsInput as NotificationUpdateManyWithoutRecipientsInput };
