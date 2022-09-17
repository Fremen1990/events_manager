import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import React from "react";
import EventItem from "./EventItem";
import userEvent from "@testing-library/user-event";

describe("Interactions - when the list is rendered", () => {
  const eventMock = {
    id: 1,
    firstName: "John",
    lastName: "Doe",
    email: "john@doe.com",
    eventDate: "2021-01-01",
  };

  it('has a button with name "Edit" in the table', () => {
    render(<EventItem event={eventMock} index={1} />);
    const buttons = screen.getByRole("button", { name: "Edit" });
    expect(buttons).toBeInTheDocument();
  });
  it('has a button with name "Delete" in the table', () => {
    render(<EventItem event={eventMock} index={1} />);
    const buttons = screen.getByRole("button", { name: "Delete" });
    expect(buttons).toBeInTheDocument();
  });
  it('calls "onEdit" callback when the "Edit" button is clicked', () => {
    const handleEditFormMock = jest.fn();
    render(
      <EventItem
        event={eventMock}
        index={1}
        handleEditForm={handleEditFormMock}
      />
    );
    const button = screen.getByRole("button", { name: "Edit" });
    userEvent.click(button);
    expect(handleEditFormMock).toHaveBeenCalled();
  });
  it('calls "onDelete" callback when the "Delete" button is clicked', () => {
    const handleDeleteMock = jest.fn();
    render(
      <EventItem event={eventMock} index={1} deleteEvent={handleDeleteMock} />
    );
    const button = screen.getByRole("button", { name: "Delete" });
    button.click();
    expect(handleDeleteMock).toHaveBeenCalled();
  });
});
