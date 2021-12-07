import axios from "axios";
import React, { useState, useEffect } from "react";
import { fetchWeather } from "../api/api";
import Temps from "./Temps";

export default function Search() {
  const [cities, setCities] = useState("Lyon");
  const [country, setCountry] = useState(undefined);
  const [weather, setWeather] = useState({});
  const [tempMax, setTempMax] = useState(null);
  const [tempMin, setTempMin] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const search = async (e) => {
    if (e.key === "Enter") {
      const res = await fetchWeather(cities);
      setWeather(res);
      setCities("");
      console.log("api", res);
    }
  };

  const handleChange = (e) => setCities(e.target.value);

  return (
    <>
      <div className="search">
        <input
          type="text"
          name="search"
          id="searchBar"
          className="search-bar"
          placeholder="Lyon"
          value={cities}
          onChange={handleChange}
        />
        <div>{cities}</div>
        <div>
          <Temps city={cities} />
        </div>
      </div>
    </>
  );
}
