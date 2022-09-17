import "@testing-library/jest-dom";
import React from "react";
import { render, screen } from "@testing-library/react";
import EventsTable from "./EventsTable";

describe("<EventsTable/>", () => {
  const eventsMock = [
    {
      id: 1,
      firstName: "John",
      lastName: "Doe",
      email: "john@doe.com",
      eventDate: "2021-01-01",
    },
    {
      id: 2,
      firstName: "Jane",
      lastName: "Doe",
      email: "jane@doe.com",
      eventDate: "2021-01-01",
    },
  ];

  describe("Layout - when the list is rendered", () => {
    it("has table rendered", () => {
      render(<EventsTable events={eventsMock} />);
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
      render(<EventsTable events={eventsMock} />);
      const header = screen.getByRole("columnheader", { name: headerName });
      expect(header).toBeInTheDocument();
    });

    it("has body in the table", () => {
      render(<EventsTable events={eventsMock} />);
      const body = screen.getAllByRole("rowgroup");
      expect(body).toBeDefined();
    });

    it("has a row in the table", () => {
      render(<EventsTable events={eventsMock} />);
      const row = screen.getAllByRole("row");
      expect(row).toBeDefined();
    });
  });
});
