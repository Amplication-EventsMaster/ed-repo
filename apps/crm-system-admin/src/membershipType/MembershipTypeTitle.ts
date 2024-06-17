import { MembershipType as TMembershipType } from "../api/membershipType/MembershipType";

export const MEMBERSHIPTYPE_TITLE_FIELD = "name";

export const MembershipTypeTitle = (record: TMembershipType): string => {
  return record.name?.toString() || String(record.id);
};
