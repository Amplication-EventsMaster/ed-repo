import { MembershipType } from "../membershipType/MembershipType";
import { Ticket } from "../ticket/Ticket";

export type Member = {
  comment: string;
  createdAt: Date;
  email: string;
  firstName: string;
  id: string;
  lastName: string;
  membershipType?: MembershipType | null;
  tickets?: Array<Ticket>;
  updatedAt: Date;
};
