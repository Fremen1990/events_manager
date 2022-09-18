import React, { useContext, useEffect, useState } from "react";
import Alert from "@mui/material/Alert";
import InputField from "../common/InputField";
import LoadingButton from "../LoadingButton/LoadingButton";
import { EventFormBody, EventsContextType } from "../../types/EventFormTypes";
import EventFormStyles from "./EventFormStyle";
import Header from "../common/Header";
import Container from "../Layout/Container";
import { EventsContext } from "../../context/EventsContext";

const EventForm = () => {
  const initialForm = { firstName: "", lastName: "", email: "", eventDate: "" };

  const [formData, setFormData] = useState<EventFormBody>(initialForm);
  const { firstName, lastName, email, eventDate } = formData;

  const {
    currentEventId,
    addEvent,
    disabled,
    loading,
    success,
    errors,
    setSuccess,
    setErrors,
    setEditForm,
    editForm,
    eventToEdit,
    submitUpdateForm,
    setDisabled,
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

    if (success) {
      setFormData(initialForm);
    }
  };

  const handleSubmitUpdateForm = async (
    event: React.FormEvent<HTMLFormElement>
  ): Promise<void> => {
    event.preventDefault();

    if (editForm && eventToEdit)
      submitUpdateForm &&
        submitUpdateForm(currentEventId && currentEventId, formData);

    if (success) setFormData(initialForm);
  };

  const handleCancel = () => {
    setFormData(initialForm);
    setErrors && setErrors(initialForm);
    setEditForm && setEditForm(false);
  };

  const handleCloseMessage = () => {
    setSuccess && setSuccess(false);
    setEditForm && setEditForm(false);
    setFormData(initialForm);
  };

  useEffect(() => {
    if (editForm) {
      eventToEdit && setFormData(eventToEdit);
    }
  }, [editForm, eventToEdit]);

  return (
    <EventFormStyles onSubmit={handleSubmitForm}>
      <Header>{editForm && editForm ? "Edit Event" : "Create Event"}</Header>
      <InputField
        value={firstName}
        disabled={loading}
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
        value={lastName}
        disabled={loading}
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
        value={email}
        disabled={loading}
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
        value={eventDate}
        disabled={loading}
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
            style={{ cursor: "pointer" }}
            onClick={handleCloseMessage}
            severity="success"
            variant="filled"
            closeText="Close"
            data-testid={"success-message"}
          >
            {editForm && editForm ? "Event updated 👌" : "Event added 💪"}
          </Alert>
        ) : (
          <>
            {editForm && editForm && (
              <LoadingButton
                color="warning"
                onClick={handleCancel}
                type="button"
              >
                Cancel
              </LoadingButton>
            )}

            <LoadingButton
              loading={loading && loading}
              onClick={
                editForm && editForm ? handleSubmitUpdateForm : handleSubmitForm
              }
              disabled={disabled && disabled}
              data-testid="add-event-button"
              role="button"
              type="submit"
            >
              {editForm && editForm ? "Save Changes" : "Add Event"}
            </LoadingButton>
          </>
        )}
      </Container>
    </EventFormStyles>
  );
};
export default EventForm;
