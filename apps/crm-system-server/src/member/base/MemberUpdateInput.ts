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
import { MembershipTypeWhereUniqueInput } from "../../membershipType/base/MembershipTypeWhereUniqueInput";
import { Type } from "class-transformer";
import { TicketUpdateManyWithoutMembersInput } from "./TicketUpdateManyWithoutMembersInput";

@InputType()
class MemberUpdateInput {
  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  comment?: string;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  email?: string;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  firstName?: string;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  lastName?: string;

  @ApiProperty({
    required: false,
    type: () => MembershipTypeWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => MembershipTypeWhereUniqueInput)
  @IsOptional()
  @Field(() => MembershipTypeWhereUniqueInput, {
    nullable: true,
  })
  membershipType?: MembershipTypeWhereUniqueInput | null;

  @ApiProperty({
    required: false,
    type: () => TicketUpdateManyWithoutMembersInput,
  })
  @ValidateNested()
  @Type(() => TicketUpdateManyWithoutMembersInput)
  @IsOptional()
  @Field(() => TicketUpdateManyWithoutMembersInput, {
    nullable: true,
  })
  tickets?: TicketUpdateManyWithoutMembersInput;
}

export { MemberUpdateInput as MemberUpdateInput };
