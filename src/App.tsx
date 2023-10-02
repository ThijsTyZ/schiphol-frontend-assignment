import React, { useCallback, useEffect, useState } from "react";
import "./App.scss";
import { Flight, SortDirection, SortBy } from "./types";
import { getFlights } from "./api";
import FlightsTable from "./FlightsTable";

type AppProps = {
  apiUrl: string;
};

function App({ apiUrl }: AppProps) {
  const [query, setQuery] = useState<string>("");
  const [flights, setFlights] = useState<ReadonlyArray<Flight>>();
  const [sortDirection, setSortDirection] = useState<SortDirection>("asc");
  const [sortBy, setSortBy] = useState<SortBy>("date");

  const onChange = useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(event.target.value);
  }, []);

  const sort = useCallback((sortBy: SortBy, sortDirection: SortDirection) => {
    setSortBy(sortBy);
    setSortDirection(sortDirection);
  }, []);

  useEffect(() => {
    if (query.length >= 3) {
      getFlights(apiUrl, query, {
        limit: 5,
        sortDirection,
        sortBy,
      }).then(setFlights);
    } else {
      setFlights(undefined);
    }
  }, [apiUrl, query, sortBy, sortDirection]);

  return (
    <div className="App">
      <label>
        Search:
        <input onChange={onChange} placeholder="query" />
      </label>

      {flights ? (
        flights.length > 0 ? (
          <FlightsTable
            flights={flights}
            sortBy={sortBy}
            sortDirection={sortDirection}
            sort={sort}
          />
        ) : (
          <h2>No flights are found for "{query}"</h2>
        )
      ) : (
        <h2>Please type at least 3 characters in the search field</h2>
      )}
    </div>
  );
}

export default App;
