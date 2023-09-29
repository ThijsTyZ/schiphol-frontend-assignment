import React, { useCallback, useEffect, useState } from "react";
import "./App.scss";
import { Flight, SortDirection, SortBy } from "./types";
import { getFlights } from "./api";
import FlightsTable from "./FlightsTable";

function App() {
  const [query, setQuery] = useState<string>("san");
  const [flights, setFlights] = useState<ReadonlyArray<Flight>>();
  const [sortDirection, setSortDirection] = useState<SortDirection>("asc");
  const [sortBy, setSortBy] = useState<SortBy>("date");

  const onChange = useCallback(
    async (event: React.ChangeEvent<HTMLInputElement>) => {
      setFlights(await getFlights(event.target.value.trim(), { limit: 5 }));
    },
    [],
  );

  const sort = useCallback(
    (sortBy: SortBy, sortDirection: SortDirection) => {
      setSortBy(sortBy);
      setSortDirection(sortDirection);
    },
    [sortBy, sortDirection],
  );

  useEffect(() => {
    getFlights(query, { limit: 5, sortDirection, sortBy }).then(setFlights);
  }, [query, sortBy, sortDirection]);

  return (
    <div className="App">
      <label>
        Search:
        <input onChange={onChange} placeholder="query" />
      </label>

      {flights ? (
        <FlightsTable
          flights={flights}
          sortBy={sortBy}
          sortDirection={sortDirection}
          sort={sort}
        />
      ) : (
        <h2>Please type at least 3 characters in the search field</h2>
      )}
    </div>
  );
}

export default App;
