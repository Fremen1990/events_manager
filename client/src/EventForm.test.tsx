import React from "react";
import { render, screen } from "@testing-library/react";
import EventForm from "./EventForm";

describe("<EventForm/>", () => {
  it("has header", () => {
    render(<EventForm />);
    const header = screen.getByRole("heading", { name: "Create Event" });
    expect(header).toBeInTheDocument();
  });
});
