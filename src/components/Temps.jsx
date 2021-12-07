import React, { useState } from "react";
import PropTypes from "prop-types";
import { fetchWeather } from "../api/api";

const Temps = ({ name, temps_max, temps_min }) => {
  const [cold] = useState("Il fait froid");
  const [warm] = useState("Il fait chaud");
  const [cities, setCities] = useState("");
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
        <>
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
          <div>{weather.main.temp < 15 ? cold : warm}</div>
        </>
      )}
    </div>
  );
};

Temps.propTypes = {};

export default Temps;
