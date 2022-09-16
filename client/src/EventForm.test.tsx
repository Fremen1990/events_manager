import React from "react";
import { render, screen } from "@testing-library/react";
import EventForm from "./EventForm";

describe("<EventForm/>", () => {
  it("has header", () => {
    render(<EventForm />);
    const header = screen.getByRole("heading", { name: "Create Event" });
    expect(header).toBeInTheDocument();
  });

  it("has First name input", () => {
    render(<EventForm />);
    const input = screen.getByLabelText("First name");
    expect(input).toBeInTheDocument();
  });

  it("has Last name input", () => {
    render(<EventForm />);
    const input = screen.getByLabelText("Last name");
    expect(input).toBeInTheDocument();
  });

  it("has Email input", () => {
    render(<EventForm />);
    const input = screen.getByLabelText("Email");
    expect(input).toBeInTheDocument();
  });

  it("has Date input", () => {
    render(<EventForm />);
    const input = screen.getByLabelText(/date/i);
    expect(input).toBeInTheDocument();
  });

  it("has 'Event Date' input with type date", () => {
    render(<EventForm />);
    const input = screen.getByLabelText(/date/i);
    expect(input).toHaveAttribute("type", "date");
  });

  it("has Add Event button", () => {
    render(<EventForm />);
    const button = screen.getByRole("button", { name: "Add Event" });
    expect(button).toBeInTheDocument();
  });
  it("disables button initially", () => {
    render(<EventForm />);
    const button = screen.getByRole("button", { name: "Add Event" });
    expect(button).toBeDisabled();
  });
});
