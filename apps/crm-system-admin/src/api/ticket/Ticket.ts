import { Event } from "../event/Event";
import { Member } from "../member/Member";

export type Ticket = {
  createdAt: Date;
  event?: Event | null;
  id: string;
  member?: Member | null;
  purchaseDate: Date | null;
  ticketNumber: string | null;
  updatedAt: Date;
};
