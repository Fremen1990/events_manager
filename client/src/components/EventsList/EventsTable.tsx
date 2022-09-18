import React, { useContext } from "react";
import EventItem from "./EventItem";
import { Event, EventsContextType } from "../../types/EventFormTypes";
import { EventsContext } from "../../context/EventsContext";
import { CircularProgress } from "@mui/material";

const EventsTable = ({}: any) => {
  const { events, loading } = useContext(EventsContext) as EventsContextType;

  return (
    <table>
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
            <tr key={event.id}>
              <EventItem event={event} index={index} />
            </tr>
          ))
        )}
      </tbody>
    </table>
  );
};

export default EventsTable;
