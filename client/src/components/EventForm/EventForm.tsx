import React, { useContext, useState } from "react";
import Alert from "@mui/material/Alert";
import InputField from "../common/InputField";
import LoadingButton from "../LoadingButton/LoadingButton";
import { EventFormBody, EventsContextType } from "../../types/EventFormTypes";
import EventFormStyles from "./EventFormStyle";
import Header from "../common/Header";
import Container from "../Layout/Container";
import { EventsContext } from "../../context/EventsContext";

const EventForm = () => {
  const [formData, setFormData] = useState<EventFormBody>({
    firstName: "",
    lastName: "",
    email: "",
    eventDate: "",
  });

  const {
    addEvent,
    disabled,
    loading,
    success,
    errors,
    setSuccess,
    setErrors,
  } = useContext(EventsContext) as EventsContextType;

  const onInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    event.preventDefault();
    const { id, value } = event.target;
    setFormData({ ...formData, [id]: value });
    setErrors && setErrors({ ...errors, [id]: "" });
  };

  const handleSubmitForm = async (
    event: React.FormEvent<HTMLFormElement>
  ): Promise<void> => {
    event.preventDefault();
    if (addEvent) addEvent(formData);
  };

  const handleSuccessMessage = () => {
    setSuccess && setSuccess(false);
  };

  return (
    <EventFormStyles onSubmit={handleSubmitForm}>
      <Header>Create Event</Header>
      <InputField
        onChange={onInputChange}
        error={errors && !!errors.firstName}
        helperText={errors && errors.firstName}
        type="text"
        required
        id="firstName"
        label="First name"
        variant="outlined"
        data-testid="first-name"
      />

      <InputField
        onChange={onInputChange}
        error={errors && !!errors.lastName}
        helperText={errors && errors.lastName}
        type="text"
        required
        id="lastName"
        label="Last name"
        variant="outlined"
        data-testid="last-name"
      />

      <InputField
        onChange={onInputChange}
        error={errors && !!errors.email}
        helperText={errors && errors.email}
        type="email"
        required
        id="email"
        label="Email"
        variant="outlined"
        data-testid="email"
      />

      <InputField
        onChange={onInputChange}
        error={errors && !!errors.eventDate}
        helperText={errors && errors.eventDate}
        type="date"
        required
        id="eventDate"
        label="Event date"
        variant="outlined"
        InputLabelProps={{
          shrink: true,
        }}
        data-testid="event-date"
      />

      <Container>
        {success && success ? (
          <Alert
            severity="success"
            variant="filled"
            closeText="Close"
            onClose={handleSuccessMessage}
          >
            Event added 💪
          </Alert>
        ) : (
          <LoadingButton
            loading={loading && loading}
            handleSubmitForm={handleSubmitForm}
            disabled={disabled && disabled}
            data-testid="add-event-button"
            role="button"
          >
            Add Event
          </LoadingButton>
        )}
      </Container>
    </EventFormStyles>
  );
};
export default EventForm;
