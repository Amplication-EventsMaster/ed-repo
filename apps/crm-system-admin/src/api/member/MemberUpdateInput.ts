import { MembershipTypeWhereUniqueInput } from "../membershipType/MembershipTypeWhereUniqueInput";
import { TicketUpdateManyWithoutMembersInput } from "./TicketUpdateManyWithoutMembersInput";

export type MemberUpdateInput = {
  comment?: string;
  email?: string;
  firstName?: string;
  lastName?: string;
  membershipType?: MembershipTypeWhereUniqueInput | null;
  tickets?: TicketUpdateManyWithoutMembersInput;
};
