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
  const [eventToEdit, setEventToEdit] = useState<EventFormBody | null>(null);
  const [currentEventId, setCurrentEventId] = useState<string | null>(null);

  const initialForm = { firstName: "", lastName: "", email: "", eventDate: "" };

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
      // setLoading(true); //  if not calling api not needed
      const response = await axios.delete(`/api/events/${id}`);
      const newEvents = events.filter((event: any) => event.id !== id); // Faster, without querying the server
      // getEvents(); // Slower, with querying the server
      setEvents(newEvents);
      setEditForm(false);
      // setLoading(false);//  if not calling api not needed
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
    setErrors(initialForm);
    setEditForm(true);
    setEventToEdit(formData);
    setCurrentEventId(id);
  };

  const submitUpdateForm = async (
    id: string | null | undefined,
    formData: EventFormBody
  ): Promise<void> => {
    try {
      setDisabled(true);
      setLoading(true);
      const response = await axios.put(`/api/events/${id}`, formData);
      if (response.status === 200) {
        await getEvents();
        setSuccess(true);
        // setEditForm(false);
      }

      setDisabled(false);
      setLoading(false);
    } catch (error: any) {
      console.log(error);
      setErrors(error.response.data.validationErrors);
      setLoading(false);
      setDisabled(false);
    }
  };

  return (
    <EventsContext.Provider
      value={{
        currentEventId,
        eventToEdit,
        errors,
        events,
        getEvents,
        loading,
        deleteEvent,
        addEvent,
        updateEvent,
        editForm,
        setEditForm,
        disabled,
        setDisabled,
        success,
        setSuccess,
        setErrors,
        submitUpdateForm,
      }}
    >
      {children}
    </EventsContext.Provider>
  );
};

export default EventsProvider;
