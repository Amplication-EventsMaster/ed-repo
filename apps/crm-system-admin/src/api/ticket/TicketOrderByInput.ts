import { SortOrder } from "../../util/SortOrder";

export type TicketOrderByInput = {
  createdAt?: SortOrder;
  eventId?: SortOrder;
  id?: SortOrder;
  memberId?: SortOrder;
  purchaseDate?: SortOrder;
  ticketNumber?: SortOrder;
  updatedAt?: SortOrder;
};
