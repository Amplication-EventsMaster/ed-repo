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
import { IsString, IsOptional, ValidateNested } from "class-validator";
import { NotificationCreateNestedManyWithoutRecipientsInput } from "./NotificationCreateNestedManyWithoutRecipientsInput";
import { Type } from "class-transformer";

@InputType()
class RecipientCreateInput {
  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  contactInfo?: string | null;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  firstName?: string | null;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  lastName?: string | null;

  @ApiProperty({
    required: false,
    type: () => NotificationCreateNestedManyWithoutRecipientsInput,
  })
  @ValidateNested()
  @Type(() => NotificationCreateNestedManyWithoutRecipientsInput)
  @IsOptional()
  @Field(() => NotificationCreateNestedManyWithoutRecipientsInput, {
    nullable: true,
  })
  notifications?: NotificationCreateNestedManyWithoutRecipientsInput;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  preferredNotificationType?: string | null;
}

export { RecipientCreateInput as RecipientCreateInput };
