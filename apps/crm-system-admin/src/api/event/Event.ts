import { Ticket } from "../ticket/Ticket";

export type Event = {
  createdAt: Date;
  date: Date | null;
  description: string | null;
  fee: number | null;
  id: string;
  tickets?: Array<Ticket>;
  title: string | null;
  updatedAt: Date;
};
