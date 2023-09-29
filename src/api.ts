import { Flight, SortDirection } from "./types";

export async function getFlights(
  query: string,
  options?: {
    limit?: number;
    sortDirection?: SortDirection;
    sortBy?: keyof Flight;
  },
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
        .sort((flight1, flight2) => {
          switch (options?.sortBy) {
            case undefined:
              return 0;
            case "date": {
              return (
                new Date(`${flight1.date} ${flight1.expectedTime}`).getTime() -
                new Date(`${flight2.date} ${flight2.expectedTime}`).getTime()
              );
            }
            case "airport": {
              return flight1.airport.localeCompare(flight2.airport);
            }
            case "flightNumber": {
              return flight1.airport.localeCompare(flight2.airport);
            }
            default: {
              throw new Error(`Invalid sortBy option: ${options?.sortBy}`);
            }
          }
        })
        .sort(() => (options?.sortDirection === "desc" ? -1 : 1))

        .slice(0, options?.limit);
    }
  } catch (error) {
    console.error(error);
  }
  return undefined;
}
