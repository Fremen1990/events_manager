import Header from "../common/Header";
import EventsListsStyle from "./EventsListStyle";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { CircularProgress } from "@mui/material";
import EventsTable from "./EventsTable";

const EventsList = () => {
  const [events, setEvents] = useState([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
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

  const deleteEvent = async (id: number) => {
    try {
      setIsLoading(true);
      const response = await axios.delete(`/api/events/${id}`);
      const newEvents = events.filter((event: any) => event.id !== id); // Faster, without querying the server
      // getEvents(); // Slower, with querying the server
      setEvents(newEvents);
      setIsLoading(false);

      console.log("CALLLLSED FROM TEST MOCK!!!!!!!!!!!!");
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
        <EventsTable events={events} deleteEvent={deleteEvent} />
      )}
    </EventsListsStyle>
  );
};
export default EventsList;
