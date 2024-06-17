import { MembershipTypeWhereUniqueInput } from "../membershipType/MembershipTypeWhereUniqueInput";
import { TicketCreateNestedManyWithoutMembersInput } from "./TicketCreateNestedManyWithoutMembersInput";

export type MemberCreateInput = {
  comment: string;
  email: string;
  firstName: string;
  lastName: string;
  membershipType?: MembershipTypeWhereUniqueInput | null;
  tickets?: TicketCreateNestedManyWithoutMembersInput;
};
