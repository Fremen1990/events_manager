import "@testing-library/jest-dom";
import { render } from "@testing-library/react";
import EventsList from "./components/EventsList/EventsList";
import EventsProvider from "./context/EventsContext";
import App from "./App";

describe("<App />", () => {
  it("displays Events List", () => {
    const { getByText } = render(<EventsList />);
    expect(getByText("Events List")).toBeInTheDocument();
  });

  it("displays Edit Event form when 'edit' button is clicked", () => {
    const { getByText } = render(
      <EventsProvider>
        <App />
      </EventsProvider>
    );
    expect(getByText("Edit Event")).toBeInTheDocument();
  });
});
