import { render, screen, fireEvent } from "@testing-library/react";
import Home from "../pages/Home";
import "@testing-library/jest-dom";

test("Home page renders add button", () => {
  render(<Home />);

  const newTaskElement = screen.getByTestId("newTaskId");
  expect(newTaskElement).toBeInTheDocument();
});
