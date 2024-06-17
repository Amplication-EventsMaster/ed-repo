import { MemberCreateNestedManyWithoutMembershipTypesInput } from "./MemberCreateNestedManyWithoutMembershipTypesInput";

export type MembershipTypeCreateInput = {
  description?: string | null;
  members?: MemberCreateNestedManyWithoutMembershipTypesInput;
  name?: string | null;
};
