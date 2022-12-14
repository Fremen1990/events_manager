import Header from "../common/Header";
import EventsListsStyle from "./EventsListStyle";
import React, { useContext, useEffect } from "react";
import EventsTable from "./EventsTable";
import { EventsContext } from "../../context/EventsContext";
import { EventsContextType } from "../../types/EventFormTypes";

const EventsList = () => {
  const { getEvents, events } = useContext(EventsContext) as EventsContextType;

  useEffect(() => {
    getEvents && getEvents();
  }, []);

  return (
    <EventsListsStyle>
      <Header style={{ fontSize: 48 }}>Events List</Header>
      {events && events.length === 0 ? (
        <h2 style={{ marginTop: "15%" }}>There is no events on the list yet</h2>
      ) : (
        <EventsTable />
      )}
    </EventsListsStyle>
  );
};
export default EventsList;
