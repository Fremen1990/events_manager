import React, { useContext } from "react";
import EventItem from "./EventItem";
import { Event, EventsContextType } from "../../types/EventFormTypes";
import { EventsContext } from "../../context/EventsContext";
import { CircularProgress } from "@mui/material";
import styled from "styled-components";

const TrItem = styled.tr`
  cursor: pointer;
  &:hover {
    background-color: #4caf50;
    font-weight: bold;
  }
`;

const EventsTable = ({}: any) => {
  const { events, loading } = useContext(EventsContext) as EventsContextType;

  return (
    <table
      style={{
        borderCollapse: "collapse",
      }}
    >
      <thead>
        <tr>
          <th>No</th>
          <th>First name</th>
          <th>Last name</th>
          <th>Email</th>
          <th>Event date</th>
          <th>From now</th>
        </tr>
      </thead>
      <tbody>
        {loading && loading ? (
          <CircularProgress data-testid="loading-spinner" size={150} />
        ) : (
          events &&
          events.map((event: Event, index: number) => (
            <TrItem key={event.id} style={{ borderBottom: "1px solid black" }}>
              <EventItem event={event} index={index} />
            </TrItem>
          ))
        )}
      </tbody>
    </table>
  );
};

export default EventsTable;
