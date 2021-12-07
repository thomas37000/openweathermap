import React, { useState } from "react";
import { fetchWeather } from "../api/api";

export default function Search() {
  const [cities, setCities] = useState("Lyon");
  const [weather, setWeather] = useState({});

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
          onKeyPress={search}
        />

        {weather.main && (
          <div className="city">
            <h2 className="city-name">
              <span>{weather.name}</span>
            </h2>
            <div className="city-temp">
              <h3>
                {Math.round(weather.main.temp)}
                <sup>&deg;C</sup>
              </h3>
            </div>
          </div>
        )}
      </div>
    </>
  );
}
