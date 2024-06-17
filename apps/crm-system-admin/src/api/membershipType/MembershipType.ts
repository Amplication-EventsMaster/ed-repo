import { Member } from "../member/Member";

export type MembershipType = {
  createdAt: Date;
  description: string | null;
  id: string;
  members?: Array<Member>;
  name: string | null;
  updatedAt: Date;
};
