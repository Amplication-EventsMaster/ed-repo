import { Ticket as TTicket } from "../api/ticket/Ticket";

export const TICKET_TITLE_FIELD = "ticketNumber";

export const TicketTitle = (record: TTicket): string => {
  return record.ticketNumber?.toString() || String(record.id);
};
