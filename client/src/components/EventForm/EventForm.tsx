import React from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import styled from "styled-components";
import axios from "axios";
import { CircularProgress } from "@mui/material";
import Alert from "@mui/material/Alert";

const EventFormStyles = styled.form`
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

interface EventFormBody {
  firstName: string;
  lastName: string;
  email: string;
  eventDate: string;
}

const EventForm = () => {
  const [disabled, setDisabled] = React.useState(true);
  const [loading, setLoading] = React.useState(false);
  const [success, setSuccess] = React.useState(false);
  const [formData, setFormData] = React.useState({
    firstName: "",
    lastName: "",
    email: "",
    eventDate: "",
  });

  const onInputChange = ({ target }: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = target;
    setFormData({ ...formData, [id]: value });
    setDisabled(false);
  };

  const handleSubmitForm =
    async (): // event: MouseEventHandler<HTMLButtonElement>,
    // formData: EventFormBody
    Promise<void> =>
      // formData: EventFormBody
      {
        // event.preventDefault();
        try {
          setDisabled(true);
          setLoading(true);
          const response = await axios.post("/api/events", formData);
          setDisabled(false);
          setLoading(false);
          setSuccess(true);
        } catch (error) {
          console.log(error);
          setLoading(false);

          setDisabled(false);
        }
      };

  return (
    <EventFormStyles>
      <h1 style={{ fontFamily: "Permanent Marker" }}>Create Event</h1>
      <InputField
        onChange={onInputChange}
        // color="success"
        // error
        // helperText="First Name is required"
        type="text"
        required
        id="firstName"
        label="First name"
        variant="outlined"
      />

      <InputField
        onChange={onInputChange}
        // color="success"
        // error
        // helperText="First Name is required"
        type="text"
        required
        id="lastName"
        label="Last name"
        variant="outlined"
      />

      <InputField
        onChange={onInputChange}
        // color="success"
        // error
        // helperText="First Name is required"
        type="email"
        required
        id="email"
        label="Email"
        variant="outlined"
      />

      <InputField
        onChange={onInputChange}
        // color="success"
        // error
        // helperText="First Name is required"
        type="date"
        required
        id="eventDate"
        label="Event date"
        variant="outlined"
        InputLabelProps={{
          shrink: true,
        }}
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
