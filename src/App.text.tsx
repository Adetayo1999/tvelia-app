import { screen, render } from "@testing-library/react";
import App from "./App";

test("The App Component Renders Correctly", () => {
  render(<App />);
  const titleElement = screen.getByText(/hello world/i);
  expect(titleElement).toBeInTheDocument();
});
