import React from "react";
import { act, render, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import App from "./App";
import { screen } from "@testing-library/dom";

const apiUrl =
  "http://localhost:3000/schiphol-frontend-assignment/flights.json";

test("App should render an input field", () => {
  const { container } = render(<App apiUrl={apiUrl} />);

  expect(container.querySelector("input")).toBeInTheDocument();
});

test("App should renders flight results", async () => {
  act(() => {
    render(<App apiUrl={apiUrl} />);
  });

  const input = screen.getByPlaceholderText("query");

  act(() => {
    userEvent.type(input, "san");
  });
  expect(input).toHaveValue("san");

  await waitFor(async () => {
    expect((await screen.findAllByText("San Francisco")).length).toEqual(2);
    expect((await screen.findAllByText("Santiago")).length).toEqual(1);
    expect((await screen.findAllByText("Santiago Com")).length).toEqual(1);
    expect((await screen.findAllByText("Sandefjord")).length).toEqual(1);
  });
});

test("App should renders no results message", async () => {
  act(() => {
    render(<App apiUrl={apiUrl} />);
  });

  const input = screen.getByPlaceholderText("query");

  act(() => {
    userEvent.type(input, "this does not exist");
  });

  await waitFor(async () => {
    expect(
      await screen.findByText('No flights are found for "this does not exist"'),
    ).toBeInTheDocument();
  });
});
