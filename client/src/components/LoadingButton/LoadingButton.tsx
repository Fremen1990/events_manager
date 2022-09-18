import Container from "../Layout/Container";
import { CircularProgress } from "@mui/material";
import Button from "@mui/material/Button";
import React from "react";

const LoadingButton = ({
  loading,
  onClick,
  disabled,
  children,
  color,
  type,
}: any) => {
  return (
    <Container>
      {loading ? (
        <CircularProgress data-testid="loading-button" />
      ) : (
        <Button
          type={type}
          onClick={onClick}
          variant="contained"
          disabled={disabled}
          size="large"
          color={color}
        >
          {children}
        </Button>
      )}
    </Container>
  );
};

export default LoadingButton;
