import "@testing-library/jest-dom";
import { render } from "@testing-library/react";
import EventsList from "./components/EventsList/EventsList";
import App from "./App";

describe("<App />", () => {
  it("displays Events List", () => {
    const { getByText } = render(<EventsList />);
    expect(getByText("Events List")).toBeInTheDocument();
  });

  it("displays Edit Event form when 'edit' button is clicked", () => {
    const { getByText } = render(<App />);
    expect(getByText("Create Event")).toBeInTheDocument();
  });
});
