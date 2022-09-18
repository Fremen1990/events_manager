import React, { createContext, useState } from "react";
import {
  EventFormBody,
  EventsContextType,
  ValidationErrors,
} from "../types/EventFormTypes";
import { PropsWithChildren } from "react";
import axios from "axios";

export const EventsContext = createContext<EventsContextType>({});

const EventsProvider: React.FC<PropsWithChildren> = ({ children }) => {
  const [events, setEvents] = useState<any>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [success, setSuccess] = useState<boolean>(false);
  const [errors, setErrors] = useState<ValidationErrors>({});
  const [disabled, setDisabled] = useState<boolean>(false);
  const [editForm, setEditForm] = useState<boolean>(false);

  const getEvents = async () => {
    setLoading(true);
    try {
      const response = await axios.get("/api/events/all");
      setEvents(response.data);
      setLoading(false);
    } catch (error: any) {
      setErrors(error);
      console.log(error);
    }
  };

  const deleteEvent = async (id: string): Promise<void> => {
    try {
      setLoading(true);
      const response = await axios.delete(`/api/events/${id}`);
      const newEvents = events.filter((event: any) => event.id !== id); // Faster, without querying the server
      // getEvents(); // Slower, with querying the server
      setEvents(newEvents);
      setLoading(false);
    } catch (error: any) {
      setErrors(error);
      console.log(error);
    }
  };

  const addEvent = async (formData: EventFormBody): Promise<void> => {
    try {
      setDisabled(true);
      setLoading(true);
      const response = await axios.post("/api/events", formData);
      if (response.status === 201) {
        setSuccess(true);
        setEvents([response.data.event, ...events]);
      }

      setDisabled(false);
      setLoading(false);
    } catch (error: any) {
      setErrors(error.response.data.validationErrors);
      setLoading(false);
      setDisabled(false);
    }
  };

  const updateEvent = async (
    id: string,
    formData: EventFormBody
  ): Promise<void> => {
    console.log("UPDATE EVENT");
  };

  return (
    <EventsContext.Provider
      value={{
        errors,
        events,
        getEvents,
        loading,
        deleteEvent,
        addEvent,
        updateEvent,
        setEditForm,
        disabled,
        success,
        setSuccess,
        setErrors,
      }}
    >
      {children}
    </EventsContext.Provider>
  );
};

export default EventsProvider;
