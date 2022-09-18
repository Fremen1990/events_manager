import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import React from "react";
import EventItem from "./EventItem";
import userEvent from "@testing-library/user-event";
import { EventsContext } from "../../context/EventsContext";

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
    const button = screen.getByTestId("edit-button");
    expect(button).toBeInTheDocument();
  });

  it('has a button with name "Delete" in the table', () => {
    render(<EventItem event={eventMock} index={1} />);
    const button = screen.getByTestId("delete-button");
    expect(button).toBeInTheDocument();
  });

  it('calls "onEdit" callback when the "Edit" button is clicked', async () => {
    const updateEvent: any = jest.fn();
    render(
      <EventsContext.Provider value={{ updateEvent }}>
        <EventItem event={eventMock} index={1} />
      </EventsContext.Provider>
    );
    const button = screen.getByTestId("edit-button");
    await userEvent.click(button);
    expect(updateEvent).toHaveBeenCalled();
  });

  it('calls "onDelete" callback when the "Delete" button is clicked', () => {
    const deleteEvent = jest.fn();
    render(
      <EventsContext.Provider value={{ deleteEvent }}>
        <EventItem event={eventMock} index={1} />
      </EventsContext.Provider>
    );
    const button = screen.getByTestId("delete-button");
    button.click();
    expect(deleteEvent).toHaveBeenCalled();
  });
});
