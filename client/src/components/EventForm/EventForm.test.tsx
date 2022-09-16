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
    it("enables button when first field is filled", () => {
      render(<EventForm />);
      const firstNameInput = screen.getByLabelText(/First name/i);
      userEvent.type(firstNameInput, "Testing Joe");
      const button = screen.getByRole("button", { name: "Add Event" });
      expect(button).toBeEnabled();
    });
  });
});
