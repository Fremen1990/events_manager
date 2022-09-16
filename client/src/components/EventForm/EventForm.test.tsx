import React from "react";
import { act, render, screen, waitFor } from "@testing-library/react";
import EventForm from "./EventForm";
import userEvent from "@testing-library/user-event";
import { setupServer } from "msw/node";
import { rest } from "msw";

describe("<EventForm/>", () => {
  describe("Layout - when the form is rendered", () => {
    beforeEach(() => {
      render(<EventForm />);
    });

    it("has header with name: 'Create Event'", () => {
      const header = screen.getByRole("heading", { name: "Create Event" });
      expect(header).toBeInTheDocument();
    });

    it.each`
      label
      ${"First name"}
      ${"Last name"}
      ${"Email"}
      ${"Event date"}
    `("has input field: '$label'", ({ label }) => {
      const RegLabel = new RegExp(label, "i");
      const input = screen.getByLabelText(RegLabel);
      expect(input).toBeInTheDocument();
    });

    it.each`
      label           | type
      ${"First name"} | ${"text"}
      ${"Last name"}  | ${"text"}
      ${"Email"}      | ${"email"}
      ${"Event date"} | ${"date"}
    `("has input '$label' with property type='$type': ", ({ label, type }) => {
      const RegLabel = new RegExp(label, "i");
      const input = screen.getByLabelText(RegLabel);
      expect(input).toHaveProperty("type", type);
    });

    it("has 'Add Event' button", () => {
      const button = screen.getByRole("button", { name: "Add Event" });
      expect(button).toBeInTheDocument();
    });
    it("disables button initially", () => {
      const button = screen.getByRole("button", { name: "Add Event" });
      expect(button).toBeDisabled();
    });
  });

  describe("Interactions - when the user is filling the form", () => {
    let requestBody: any;
    let counter = 0;
    const server = setupServer(
      rest.post("/api/events", async (req, res, ctx) => {
        requestBody = await req.json();
        counter++;
        return res(ctx.status(201));
      })
    );

    beforeEach(() => {
      server.resetHandlers();
      counter = 0;
    });
    beforeAll(() => server.listen());

    afterAll(() => server.close());

    let firstNameInput, lastNameInput, emailInput, eventDateInput, button: any;

    const setup = () => {
      render(<EventForm />);
      firstNameInput = screen.getByLabelText(/First name/i);
      lastNameInput = screen.getByLabelText(/Last name/i);
      emailInput = screen.getByLabelText(/Email/i);
      eventDateInput = screen.getByLabelText(/Event date/i);
      userEvent.type(firstNameInput, "Testing Joe");
      userEvent.type(lastNameInput, "Testing Joyington");
      userEvent.type(emailInput, "joe@joyington.com");
      userEvent.type(eventDateInput, "2021-10-10");
      button = screen.getByRole("button", { name: "Add Event" });
    };

    it("enables button when first field is filled", () => {
      setup();
      expect(button).toBeEnabled();
    });

    it("sends First name, Last name, Email, Event date to the server when clicking button", async () => {
      setup();
      userEvent.click(button);
      await screen.findByText(/Event added/i);

      expect(requestBody).toEqual({
        firstName: "Testing Joe",
        lastName: "Testing Joyington",
        email: "joe@joyington.com",
        eventDate: "2021-10-10",
      });
    });

    it("disables button when there is an ongoing api call", async () => {
      setup();
      await waitFor(() => userEvent.click(button));
      await waitFor(() => userEvent.click(button));
      await screen.findByText(/Event added/i);
      await expect(counter).toEqual(1);
    });

    it("displays spinner after clicking submit button", async () => {
      setup();
      await waitFor(() => userEvent.click(button));
      expect(screen.getByTestId("loading-button")).toBeInTheDocument();
    });

    it("displays success message after successful api call", async () => {
      setup();
      const successMessage = new RegExp("Event added", "i");
      expect(screen.queryByText(successMessage)).not.toBeInTheDocument();
      await waitFor(() => userEvent.click(button));
      const result = await screen.findByText(successMessage);
      expect(result).toBeInTheDocument();
    });

    it("hides success message after clicking close button", async () => {
      setup();
      const successMessage = new RegExp("Event added", "i");
      await waitFor(() => userEvent.click(button));
      await screen.findByText(successMessage);
      const closeButton = screen.getByRole("button", { name: "Close" });
      userEvent.click(closeButton);
      expect(screen.queryByText(successMessage)).not.toBeInTheDocument();
    });
  });
});
