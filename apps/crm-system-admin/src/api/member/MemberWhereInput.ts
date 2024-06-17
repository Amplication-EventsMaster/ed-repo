import { StringFilter } from "../../util/StringFilter";
import { MembershipTypeWhereUniqueInput } from "../membershipType/MembershipTypeWhereUniqueInput";
import { TicketListRelationFilter } from "../ticket/TicketListRelationFilter";

export type MemberWhereInput = {
  comment?: StringFilter;
  email?: StringFilter;
  firstName?: StringFilter;
  id?: StringFilter;
  lastName?: StringFilter;
  membershipType?: MembershipTypeWhereUniqueInput;
  tickets?: TicketListRelationFilter;
};
