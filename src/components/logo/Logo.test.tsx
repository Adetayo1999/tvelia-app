import { render, screen } from "@testing-library/react";
import Logo from ".";

test("the logo component renders correctly", () => {
  render(<Logo />);
  const logoTitle = screen.getByText(/velia/i);
  expect(logoTitle).toBeInTheDocument();
});
