import { TicketCreateNestedManyWithoutEventsInput } from "./TicketCreateNestedManyWithoutEventsInput";

export type EventCreateInput = {
  date?: Date | null;
  description?: string | null;
  fee?: number | null;
  tickets?: TicketCreateNestedManyWithoutEventsInput;
  title?: string | null;
};
