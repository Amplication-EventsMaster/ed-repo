import { TicketUpdateManyWithoutEventsInput } from "./TicketUpdateManyWithoutEventsInput";

export type EventUpdateInput = {
  date?: Date | null;
  description?: string | null;
  fee?: number | null;
  tickets?: TicketUpdateManyWithoutEventsInput;
  title?: string | null;
};
