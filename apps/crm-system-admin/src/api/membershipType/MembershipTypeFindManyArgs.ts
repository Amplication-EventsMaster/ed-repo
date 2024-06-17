import { MembershipTypeWhereInput } from "./MembershipTypeWhereInput";
import { MembershipTypeOrderByInput } from "./MembershipTypeOrderByInput";

export type MembershipTypeFindManyArgs = {
  where?: MembershipTypeWhereInput;
  orderBy?: Array<MembershipTypeOrderByInput>;
  skip?: number;
  take?: number;
};
