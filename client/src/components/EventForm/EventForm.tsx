import React from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import styled from "styled-components";

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

const EventForm = () => {
  const [disabled, setDisabled] = React.useState(true);
  const [firstName, setFirstName] = React.useState("");
  const [lastName, setLastName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [eventDate, setEventDate] = React.useState("");

  const onInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFirstName(event.target.value);
    setDisabled(false);
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
        data-testid="firstName"
      />

      <InputField
        // color="success"
        // error
        // helperText="First Name is required"
        type="text"
        required
        id="lastName"
        label="Last name"
        variant="outlined"
        data-testid="lastName"
      />

      <InputField
        // color="success"
        // error
        // helperText="First Name is required"
        type="email"
        required
        id="Email"
        label="Email"
        variant="outlined"
        data-testid="email"
      />

      <InputField
        // color="success"
        // error
        // helperText="First Name is required"
        type="date"
        required
        id="eventDate"
        label="Event date"
        variant="outlined"
        data-testid="eventDate"
        InputLabelProps={{
          shrink: true,
        }}
      />
      <Button variant="contained" disabled={disabled} size="large">
        Add Event
      </Button>
    </EventFormStyles>
  );
};
export default EventForm;
