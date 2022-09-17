import Header from "../common/Header";
import EventsListsStyle from "./EventsListStyle";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { CircularProgress } from "@mui/material";
import EventsTable from "./EventsTable";

const EventsList = () => {
  const [events, setEvents] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  const getEvents = async () => {
    setIsLoading(true);
    try {
      const response = await axios.get("/api/events/all");
      setEvents(response.data);
      setIsLoading(false);
    } catch (error: any) {
      setError(error);
      console.log(error);
    }
  };

  useEffect(() => {
    getEvents();
  }, []);
  return (
    <EventsListsStyle>
      <Header style={{ fontSize: 48 }}>Events List</Header>
      {isLoading ? (
        <CircularProgress data-testid="loading-spinner" size={150} />
      ) : (
        <EventsTable events={events} />
      )}
    </EventsListsStyle>
  );
};
export default EventsList;
