import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  ReferenceInput,
  SelectInput,
  DateTimeInput,
  TextInput,
} from "react-admin";

import { EventTitle } from "../event/EventTitle";
import { MemberTitle } from "../member/MemberTitle";

export const TicketCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <ReferenceInput source="event.id" reference="Event" label="event">
          <SelectInput optionText={EventTitle} />
        </ReferenceInput>
        <ReferenceInput source="member.id" reference="Member" label="member">
          <SelectInput optionText={MemberTitle} />
        </ReferenceInput>
        <DateTimeInput label="purchaseDate" source="purchaseDate" />
        <TextInput label="ticketNumber" source="ticketNumber" />
      </SimpleForm>
    </Create>
  );
};
