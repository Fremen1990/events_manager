import React from "react";
import { render, screen } from "@testing-library/react";
import EventForm from "./EventForm";
import userEvent from "@testing-library/user-event";

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
      ${"Event Date"}
    `("has input field for $label", ({ label }) => {
      const input = screen.getByLabelText(label);
      expect(input).toBeInTheDocument();
    });

    it.each`
      label           | type       | id
      ${"First name"} | ${"text"}  | ${"firstName"}
      ${"Last name"}  | ${"text"}  | ${"lastName"}
      ${"Email"}      | ${"email"} | ${"email"}
      ${"Event Date"} | ${"date"}  | ${"eventDate"}
    `("has input field for '$label' with type '$type'", ({ label, type }) => {
      const input = screen.getByLabelText(label);
      expect(input).toBeInTheDocument();
      expect(input).toHaveAttribute("type", type);
    });

    it("has Add Event button", () => {
      const button = screen.getByRole("button", { name: "Add Event" });
      expect(button).toBeInTheDocument();
    });
    it("disables button initially", () => {
      const button = screen.getByRole("button", { name: "Add Event" });
      expect(button).toBeDisabled();
    });
  });

  describe("Interactions - when the user is filling the form", () => {
    it("enables button when first field is filled", () => {
      render(<EventForm />);
      const firstNameInput = screen.getByLabelText("First name");
      userEvent.type(firstNameInput, "Testing Joe");
      const button = screen.getByRole("button", { name: "Add Event" });
      expect(button).toBeEnabled();
    });
  });
});
