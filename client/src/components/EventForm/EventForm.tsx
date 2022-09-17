import React, { useState } from "react";
import axios from "axios";
import Alert from "@mui/material/Alert";
import InputField from "../common/InputField";
import LoadingButton from "../LoadingButton/LoadingButton";
import { EventFormBody, ValidationErrors } from "../../types/EventFormTypes";
import EventFormStyles from "./EventFormStyle";
import Header from "../common/Header";
import Container from "../Layout/Container";

const EventForm = () => {
  const [disabled, setDisabled] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);
  const [success, setSuccess] = useState<boolean>(false);
  const [errors, setErrors] = useState<ValidationErrors>({});
  const [formData, setFormData] = useState<EventFormBody>({
    firstName: "",
    lastName: "",
    email: "",
    eventDate: "",
  });

  const onInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    event.preventDefault();
    const { id, value } = event.target;
    setFormData({ ...formData, [id]: value });
    setErrors({ ...errors, [id]: "" });
  };

  const handleSubmitForm = async (
    event: React.FormEvent<HTMLFormElement>
  ): // formData: EventFormBody
  Promise<void> =>
    // formData: EventFormBody
    {
      event.preventDefault();
      try {
        setDisabled(true);
        setLoading(true);
        const response = await axios.post("/api/events", formData);
        if (response.status === 201) {
          setSuccess(true);
        }

        setDisabled(false);
        setLoading(false);
      } catch (error: any) {
        setErrors(error.response.data.validationErrors);
        setLoading(false);
        setDisabled(false);
      }
    };

  return (
    <EventFormStyles onSubmit={handleSubmitForm}>
      <Header>Create Event</Header>
      <InputField
        onChange={onInputChange}
        error={!!errors.firstName}
        helperText={errors.firstName}
        type="text"
        required
        id="firstName"
        label="First name"
        variant="outlined"
        data-testid="first-name"
      />

      <InputField
        onChange={onInputChange}
        error={!!errors.lastName}
        helperText={errors.lastName}
        type="text"
        required
        id="lastName"
        label="Last name"
        variant="outlined"
        data-testid="last-name"
      />

      <InputField
        onChange={onInputChange}
        error={!!errors.email}
        helperText={errors.email}
        type="email"
        required
        id="email"
        label="Email"
        variant="outlined"
        data-testid="email"
      />

      <InputField
        onChange={onInputChange}
        error={!!errors.eventDate}
        helperText={errors.eventDate}
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
        {success ? (
          <Alert
            severity="success"
            variant="filled"
            closeText="Close"
            onClose={() => setSuccess(false)}
          >
            Event added 💪
          </Alert>
        ) : (
          <LoadingButton
            loading={loading}
            handleSubmitForm={handleSubmitForm}
            disabled={disabled}
            data-testid="add-event-button"
          />
        )}
      </Container>
    </EventFormStyles>
  );
};
export default EventForm;
