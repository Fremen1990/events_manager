import "@testing-library/jest-dom";
import { render } from "@testing-library/react";
import EventsList from "./components/EventsList/EventsList";

describe("<App />", () => {
  describe("displays Events List", () => {
    it("displays Events List", () => {
      const { getByText } = render(<EventsList />);
      expect(getByText("Events List")).toBeInTheDocument();
    });
  });
});
