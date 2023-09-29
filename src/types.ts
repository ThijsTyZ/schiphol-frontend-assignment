export type Flight = {
  flightIdentifier: string;
  flightNumber: string;
  airport: string;
  date: string;
  expectedTime: string;
  originalTime: string;
  url: string;
  score: string;
};

export type SortDirection = "asc" | "desc";
export type SortBy = "date" | "airport" | "flightNumber";
