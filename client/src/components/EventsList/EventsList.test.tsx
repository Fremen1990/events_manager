import "@testing-library/jest-dom";
import React from "react";
import { render, screen, waitFor } from "@testing-library/react";
import EventsList from "./EventsList";

describe("<EventsList/>", () => {
  describe("Layout - when the list is rendered", () => {
    it("has header with name: 'Events List'", () => {
      render(<EventsList />);
      const header = screen.getByRole("heading", { name: "Events List" });
      expect(header).toBeInTheDocument();
    });
    it("has a list of events", () => {
      render(<EventsList />);
      const list = screen.getByRole("list");
      expect(list).toBeInTheDocument();
    });

    it("has table rendered", () => {
      render(<EventsList />);
      const table = screen.getByRole("table");
      expect(table).toBeInTheDocument();
    });
    it.each`
      headerName
      ${"No"}
      ${"First name"}
      ${"Last name"}
      ${"Email"}
      ${"Event date"}
      ${"Edit"}
      ${"Delete"}
    `("has '$headerName' column in the table", ({ headerName }) => {
      render(<EventsList />);
      const header = screen.getByRole("columnheader", { name: headerName });
      expect(header).toBeInTheDocument();
    });

    it("has body in the table", () => {
      render(<EventsList />);
      const body = screen.getAllByRole("rowgroup");
      expect(body).toBeDefined();
    });

    it("has a row in the table", () => {
      render(<EventsList />);
      const row = screen.getAllByRole("row");
      expect(row).toBeDefined();
    });

    it("has a cell in the table", () => {
      render(<EventsList />);
      const cell = screen.getAllByRole("cell");
      expect(cell).toBeDefined();
    });
  });
});
