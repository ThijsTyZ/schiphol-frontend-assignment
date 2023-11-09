export type Flight = {
  flightIdentifier: FlightIdentifier;
  flightNumber: FlightNumber;
  airport: string;
  date: string;
  expectedTime: string;
  originalTime: string;
  url: string;
  score: string;
};

export type SortDirection = "asc" | "desc";
export type SortBy = "date" | "airport" | "flightNumber";

export type FlightIdentifier = TypedString<"FlightIdentifier">;
export type FlightNumber = TypedString<"FlightNumber">;

type TypedString<T extends string> = string & { __type: T };
