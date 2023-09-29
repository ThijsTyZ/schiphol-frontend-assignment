import { Flight } from "./types";

export async function getFlights(
  query: string,
  options?: { limit?: number; sort?: "asc" | "desc"; sortBy?: keyof Flight },
): Promise<ReadonlyArray<Flight> | undefined> {
  try {
    if (query.length >= 3) {
      // TODO: as the filtering and sorting is done in the client side, the response can be cached so we only lead it once.
      const results = (await (await fetch("flights.json")).json())
        .flights as ReadonlyArray<Flight>;

      return results
        .filter((flight) =>
          flight.airport.toLowerCase().includes(query.toLowerCase()),
        )
        .slice(0, options?.limit);
    }
  } catch (error) {
    console.error(error);
  }
  return undefined;
}
