import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { MemberListRelationFilter } from "../member/MemberListRelationFilter";

export type MembershipTypeWhereInput = {
  description?: StringNullableFilter;
  id?: StringFilter;
  members?: MemberListRelationFilter;
  name?: StringNullableFilter;
};
