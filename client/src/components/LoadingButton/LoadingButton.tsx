import Container from "../Layout/Container";
import { CircularProgress } from "@mui/material";
import Button from "@mui/material/Button";
import React from "react";

const LoadingButton = ({
  loading,
  handleSubmitForm,
  disabled,
  children,
}: any) => {
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
          {children}
        </Button>
      )}
    </Container>
  );
};

export default LoadingButton;
