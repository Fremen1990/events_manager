import React, { MouseEventHandler, useState } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import styled from "styled-components";
import axios from "axios";
import { CircularProgress } from "@mui/material";
import Alert from "@mui/material/Alert";

const EventFormStyles = styled.form`
  min-width: 350px;
  border: 1px solid #ccc;
  padding: 30px;
  display: flex;
  flex-direction: column;
`;

const InputField = styled(TextField)`
  margin: 1rem 0;
  font-family: "Permanent Marker", cursive;
`;

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const LoadingButton = ({ loading, handleSubmitForm, disabled }: any) => {
  return (
    <Container>
      {loading ? (
        <CircularProgress data-testid="loading-button" />
      ) : (
        <Button
          onClick={handleSubmitForm}
          variant="contained"
          disabled={disabled}
          size="large"
        >
          Add Event
        </Button>
      )}
    </Container>
  );
};

const Header = styled.h1`
  font-family: "Permanent Marker", cursive;
  text-align: center;
`;

interface EventFormBody {
  firstName: string;
  lastName: string;
  email: string;
  eventDate: string;
}

interface ValidationErrors {
  firstName?: string;
  lastName?: string;
  email?: string;
  eventDate?: string;
}

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
        // color="success"
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
        // color="success"
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
        // color="success"
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
        // color="success"
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

      <div>
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
      </div>
    </EventFormStyles>
  );
};
export default EventForm;
