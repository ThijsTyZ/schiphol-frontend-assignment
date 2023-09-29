import React, { useState } from "react";
import "./App.css";
import { Flight, Sort, SortBy } from "./types";
import { getFlights } from "./api";

function App() {
  const [flights, setFlights] = useState<ReadonlyArray<Flight>>();
  const [sort, setSort] = useState<Sort>("asc");
  const [sortBy, setSortBy] = useState<SortBy>("date");

  const onChange = async (event: React.ChangeEvent<HTMLInputElement>) => {
    setFlights(await getFlights(event.target.value.trim(), { limit: 5 }));
  };

  return (
    <div className="App">
      <label>
        Search:
        <input onChange={onChange} placeholder="query" />
      </label>

      {flights ? (
        flights?.map((flight) => (
          <div key={flight.flightIdentifier}>
            <h2>{flight.flightNumber}</h2>
            <p>{flight.airport}</p>
          </div>
        ))
      ) : (
        <h2>Please type at least 3 characters in the input field</h2>
      )}
    </div>
  );
}

export default App;
