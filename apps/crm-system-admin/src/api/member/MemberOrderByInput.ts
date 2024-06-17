import { SortOrder } from "../../util/SortOrder";

export type MemberOrderByInput = {
  comment?: SortOrder;
  createdAt?: SortOrder;
  email?: SortOrder;
  firstName?: SortOrder;
  id?: SortOrder;
  lastName?: SortOrder;
  membershipTypeId?: SortOrder;
  updatedAt?: SortOrder;
};
