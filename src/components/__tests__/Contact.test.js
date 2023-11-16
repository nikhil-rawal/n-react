import { render, screen } from "@testing-library/react";
import Contact from "../Contact";

test("Should load contact us page/component", () => {
  render(<Contact />);

  const heading = screen.getByRole("heading");

  //Assertion
  expect(heading).toBeInTheDocument();
});
