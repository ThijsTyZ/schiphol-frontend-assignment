import React, { useCallback } from "react";
import { Flight, SortBy, SortDirection } from "./types";
import "./FlightsTable.scss";

export type FlightsTableProps = {
  flights: ReadonlyArray<Flight>;
  sortBy: SortBy;
  sortDirection: SortDirection;
  onHeaderClick: (field: SortBy) => void;
};

function FlightsTable({ flights, ...rest }: FlightsTableProps) {
  return (
    <table className="FlightsTable">
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
  field: SortBy;
} & Omit<FlightsTableProps, "flights">;

function TableHeader({
  label,
  field,
  sortBy,
  sortDirection,
  onHeaderClick,
}: TableHeaderProps) {
  const onClick = useCallback(() => {
    onHeaderClick(field);
  }, [field, onHeaderClick]);

  return (
    <th scope="col" onClick={onClick}>
      {label}
      {field && field === sortBy && (sortDirection === "asc" ? <>↓</> : <>↑</>)}
    </th>
  );
}

export default FlightsTable;
