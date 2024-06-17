import { EventWhereUniqueInput } from "../event/EventWhereUniqueInput";
import { MemberWhereUniqueInput } from "../member/MemberWhereUniqueInput";

export type TicketUpdateInput = {
  event?: EventWhereUniqueInput | null;
  member?: MemberWhereUniqueInput | null;
  purchaseDate?: Date | null;
  ticketNumber?: string | null;
};
