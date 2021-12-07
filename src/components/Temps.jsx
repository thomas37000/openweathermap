import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { fetchWeather } from "../api/api";
import axios from "axios";
import "./Temps.css";

const Temps = ({ name, temps_max, temps_min }) => {
  const [cold] = useState("Il fait froid");
  const [warm] = useState("Il fait chaud");
  const [cities, setCities] = useState("");
  const [weather, setWeather] = useState({});
  const [warmCities, setWarmCities] = useState([]);

  const search = async (e) => {
    if (e.key === "Enter") {
      const res = await fetchWeather(cities);
      setWeather(res);
      setCities("");
      console.log("api", res);
    }
  };

  const handleChange = (e) => setCities(e.target.value);

  useEffect(() => {
    const loadJsonWarmList = async () => {
      setTimeout(async () => {
        const res = await axios.get(
          "https://raw.githubusercontent.com/thomas37000/openweathermap/main/src/components/WarmList.json"
        );
        setWarmCities(res.data);
        console.log("warm", res.data);
      }, 500);
    };
    loadJsonWarmList();
  }, []);

  const fetchJsonWarmList =
    warmCities &&
    warmCities.map((list, i) => {
      return (
        <>
          <div className="warm-list">
            <div>{list.city}</div>
            {/* <div>{list.country}</div> */}
          </div>
        </>
      );
    });

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

      <div className="vacation">
        Do you want to go in vacanation in a warm City, here some examples where
        the temperature is superior at 25°
        <div>{fetchJsonWarmList}</div>
      </div>
    </div>
  );
};

Temps.propTypes = {};

export default Temps;
