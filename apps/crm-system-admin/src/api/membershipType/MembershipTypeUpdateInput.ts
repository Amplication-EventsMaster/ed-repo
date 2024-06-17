import { MemberUpdateManyWithoutMembershipTypesInput } from "./MemberUpdateManyWithoutMembershipTypesInput";

export type MembershipTypeUpdateInput = {
  description?: string | null;
  members?: MemberUpdateManyWithoutMembershipTypesInput;
  name?: string | null;
};
