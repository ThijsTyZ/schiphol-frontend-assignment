import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import { Flight } from "./types";

function App() {
  const [flights, setFlights] = useState<ReadonlyArray<Flight>>();

  const onChange = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const query = event.target.value.trim();

    try {
      if (query.length >= 3) {
        const results = (await (await fetch("flights.json")).json())
          .flights as ReadonlyArray<Flight>;

        setFlights(
          results.filter((flight) =>
            flight.airport.toLowerCase().includes(query.toLowerCase()),
          ),
        );
      } else {
        setFlights(undefined);
      }
    } catch (error) {
      console.error(error);
    }
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
