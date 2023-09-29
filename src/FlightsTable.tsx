import React, { useCallback } from "react";
import { Flight, SortBy, SortDirection } from "./types";

export type FlightsTableProps = {
  flights: ReadonlyArray<Flight>;
  sortBy: SortBy;
  sortDirection: SortDirection;
  sort: (sortBy: SortBy, sortDirection: SortDirection) => void;
};

function FlightsTable({ flights, ...rest }: FlightsTableProps) {
  return (
    <table className="flights">
      <caption>Flight search results</caption>
      <thead>
        <tr>
          <TableHeader label="Date" field="date" {...rest} />
          <TableHeader label="Airport" field="airport" {...rest} />
          <TableHeader label="Flight Number" field="flightNumber" {...rest} />
        </tr>
      </thead>
      <tbody>
        {flights?.map((flight) => (
          <tr key={flight.flightIdentifier}>
            <td>
              {flight.date} {flight.expectedTime}
            </td>
            <td>{flight.airport}</td>
            <td>{flight.flightNumber}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

type TableHeaderProps = {
  label: string;
  field?: SortBy;
} & Omit<FlightsTableProps, "flights">;

function TableHeader({
  label,
  field,
  sortBy,
  sortDirection,
  sort,
}: TableHeaderProps) {
  const onClick = useCallback(() => {
    if (field)
      sort(
        field,
        field === sortBy
          ? sortDirection === "asc"
            ? "desc"
            : "asc"
          : sortDirection,
      );
  }, [field, sortBy, sortDirection, sort]);

  return (
    <th scope="col" onClick={field && onClick}>
      {label}
      {field && field === sortBy && (sortDirection === "asc" ? <>↓</> : <>↑</>)}
    </th>
  );
}

export default FlightsTable;
