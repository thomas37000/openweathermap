import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { fetchWeather } from "../api/api";
import axios from "axios";
import "./Temps.css";

const Temps = () => {
  const [cold] = useState("It's cold");
  const [warm] = useState("It's warm");
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
            <div key={list.id}>
              {list.city} - {list.country}
            </div>
          </div>
        </>
      );
    });

  return (
    <div className="search">
      <label>
        Choose a City and press Enter
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
      </label>

      {weather.main && (
        <>
          <div className={weather.main.temp < 15 ? "cold-bg" : "warm-bg"}>
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
            <div className="temp">{weather.main.temp < 15 ? cold : warm}</div>
          </div>
        </>
      )}

      <div className="vacation">
        Do you want to go in vacanation in a warm City in Winter, here some
        examples where the temperature is superior at 15°
        <div className="warm-cities">{fetchJsonWarmList}</div>
      </div>
    </div>
  );
};

Temps.propTypes = {
  name: PropTypes.string.isRequired,
  main: PropTypes.shape({
    temp: PropTypes.number.isRequired,
  }),
};

export default Temps;
