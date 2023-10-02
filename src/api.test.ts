import { getFlights } from "./api";
import json from "../public/flights.json";

const url = "http://localhost:3000/schiphol-frontend-assignment/flights.json";

test("getFlights should return the content of the JSON when there is no query and no limit", async () => {
  const flights = await getFlights(url, "");
  expect(flights).toEqual(json.flights);
});

test("getFlights should return a limited list", async () => {
  const flights = await getFlights(url, "", { limit: 10 });
  expect(flights?.length).toEqual(10);
});

test("getFlights should return a filtered list", async () => {
  const flights = await getFlights(url, "san");

  flights?.forEach((flight) =>
    expect(flight.airport.toLowerCase()).toContain("san"),
  );
});

test("getFlights should return a sorted list by date ascending", async () => {
  const flights = await getFlights(url, "", { sortBy: "date" });

  expect(
    new Date(`${flights?.[0].date} ${flights?.[0].expectedTime}`).getTime(),
  ).toBeLessThan(
    new Date(
      `${flights?.[flights?.length - 1].date} ${flights?.[flights?.length - 1]
        .expectedTime}`,
    ).getTime(),
  );
});

test("getFlights should return a sorted list by date descending", async () => {
  const flights = await getFlights(url, "", {
    sortBy: "date",
    sortDirection: "desc",
  });

  expect(
    new Date(`${flights?.[0].date} ${flights?.[0].expectedTime}`).getTime(),
  ).toBeGreaterThan(
    new Date(
      `${flights?.[flights?.length - 1].date} ${flights?.[flights?.length - 1]
        .expectedTime}`,
    ).getTime(),
  );
});
