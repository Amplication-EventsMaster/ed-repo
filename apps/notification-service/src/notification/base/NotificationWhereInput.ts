/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { StringFilter } from "../../util/StringFilter";
import { Type } from "class-transformer";
import { IsOptional, ValidateNested, IsEnum } from "class-validator";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { NotificationTypeWhereUniqueInput } from "../../notificationType/base/NotificationTypeWhereUniqueInput";
import { RecipientWhereUniqueInput } from "../../recipient/base/RecipientWhereUniqueInput";
import { EnumNotificationStatus } from "./EnumNotificationStatus";

@InputType()
class NotificationWhereInput {
  @ApiProperty({
    required: false,
    type: StringFilter,
  })
  @Type(() => StringFilter)
  @IsOptional()
  @Field(() => StringFilter, {
    nullable: true,
  })
  id?: StringFilter;

  @ApiProperty({
    required: false,
    type: StringNullableFilter,
  })
  @Type(() => StringNullableFilter)
  @IsOptional()
  @Field(() => StringNullableFilter, {
    nullable: true,
  })
  message?: StringNullableFilter;

  @ApiProperty({
    required: false,
    type: () => NotificationTypeWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => NotificationTypeWhereUniqueInput)
  @IsOptional()
  @Field(() => NotificationTypeWhereUniqueInput, {
    nullable: true,
  })
  notificationType?: NotificationTypeWhereUniqueInput;

  @ApiProperty({
    required: false,
    type: () => RecipientWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => RecipientWhereUniqueInput)
  @IsOptional()
  @Field(() => RecipientWhereUniqueInput, {
    nullable: true,
  })
  recipient?: RecipientWhereUniqueInput;

  @ApiProperty({
    required: false,
    enum: EnumNotificationStatus,
  })
  @IsEnum(EnumNotificationStatus)
  @IsOptional()
  @Field(() => EnumNotificationStatus, {
    nullable: true,
  })
  status?: "Option1";

  @ApiProperty({
    required: false,
    type: StringNullableFilter,
  })
  @Type(() => StringNullableFilter)
  @IsOptional()
  @Field(() => StringNullableFilter, {
    nullable: true,
  })
  title?: StringNullableFilter;
}

export { NotificationWhereInput as NotificationWhereInput };