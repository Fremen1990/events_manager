import Header from "../common/Header";
import EventsListsStyle from "./EventsListStyle";
import React, { useContext, useEffect } from "react";
import { CircularProgress } from "@mui/material";
import EventsTable from "./EventsTable";
import { EventsContext } from "../../context/EventsContext";
import { EventsContextType } from "../../types/EventFormTypes";

const EventsList = () => {
  const { getEvents, loading } = useContext(EventsContext) as EventsContextType;

  useEffect(() => {
    getEvents && getEvents();
  }, []);
  return (
    <EventsListsStyle>
      <Header style={{ fontSize: 48 }}>Events List</Header>
      {loading ? (
        <CircularProgress data-testid="loading-spinner" size={150} />
      ) : (
        <EventsTable />
      )}
    </EventsListsStyle>
  );
};
export default EventsList;
