import { EventWhereUniqueInput } from "../event/EventWhereUniqueInput";
import { StringFilter } from "../../util/StringFilter";
import { MemberWhereUniqueInput } from "../member/MemberWhereUniqueInput";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";

export type TicketWhereInput = {
  event?: EventWhereUniqueInput;
  id?: StringFilter;
  member?: MemberWhereUniqueInput;
  purchaseDate?: DateTimeNullableFilter;
  ticketNumber?: StringNullableFilter;
};
