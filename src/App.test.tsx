import React from "react";
import { render } from "@testing-library/react";
import App from "./App";

test("renders an input field", () => {
  const { container } = render(<App />);

  expect(container.querySelector("input")).toBeInTheDocument();
});
