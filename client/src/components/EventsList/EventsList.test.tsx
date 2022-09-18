import "@testing-library/jest-dom";
import React from "react";
import { render, screen } from "@testing-library/react";
import EventsList from "./EventsList";
import { rest } from "msw";
import { setupServer } from "msw/node";
import userEvent from "@testing-library/user-event";
import EventsProvider from "../../context/EventsContext";

describe("<EventsList/>", () => {
  it("has header with name: 'Events List'", () => {
    render(<EventsList />);
    const header = screen.getByRole("heading", { name: "Events List" });
    expect(header).toBeInTheDocument();
  });

  describe("Interactions - when the list is rendered", () => {
    const responseMock = [
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

    const server = setupServer(
      rest.get("api/events/all", async (req, res, ctx) => {
        return res(ctx.status(200), ctx.json(responseMock));
      })
    );

    const renderEventListWithProvider = () => {
      render(
        <EventsProvider>
          <EventsList />
        </EventsProvider>
      );
    };

    beforeEach(() => {
      server.resetHandlers();
    });

    beforeAll(() => server.listen());

    afterAll(() => server.close());

    it("has table rendered", async () => {
      render(<EventsList />);
      const table = await screen.findByRole("table");
      expect(table).toBeInTheDocument();
    });

    it('has a button with name "Edit" in the table', async () => {
      renderEventListWithProvider();
      const buttons = await screen.findAllByRole("button", { name: "Edit" });
      expect(buttons.length).toBeGreaterThan(0);
    });

    it('has a button with name "Delete" in the table', async () => {
      renderEventListWithProvider();
      const buttons = await screen.findAllByRole("button", { name: "Delete" });
      expect(buttons.length).toBeGreaterThan(0);
    });

    it("has a cell in the table", async () => {
      renderEventListWithProvider();
      const cells = await screen.findAllByRole("cell");
      expect(cells.length).toBeGreaterThan(0);
    });

    it("gets the data from the server", async () => {
      renderEventListWithProvider();
      expect((await screen.findAllByText("John")).length).toBeGreaterThan(0);
    });

    it("deletes the event", async () => {
      renderEventListWithProvider();
      const John = await screen.findAllByText("John");
      expect(John[0]).toBeInTheDocument();
      const buttons = await screen.findAllByRole("button", { name: "Delete" });
      userEvent.click(buttons[0]);
      expect(John[0]).not.toBeInTheDocument();
    });

    it("displays message when there is no data", async () => {
      server.use(
        rest.get("api/events/all", async (req, res, ctx) => {
          return res(ctx.status(200), ctx.json([]));
        })
      );
      renderEventListWithProvider();
      const message = await screen.findByText(
        "There is no events on the list yet"
      );
      expect(message).toBeInTheDocument();
      expect(message).toHaveTextContent("There is no events on the list yet");
    });
  });
});
