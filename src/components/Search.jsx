import React, { useState, useEffect } from "react";
import Temps from "./Temps";

export default function Search() {
  const [cities, setCities] = useState('Lyon');
  const [country, setCountry] = useState(undefined);
  const [weather, setWeather] = useState([]);
  const [tempMax, setTempMax] = useState(null);
  const [tempMin, setTempMin] = useState(null);

  const Api_key = "98b7465353d383f3d0f3bc4a284a48ae";

  useEffect(() => {
    fetch(
      `http://api.openweathermap.org/data/2.5/weather?q=${cities},${country}&appid=${Api_key}`
    )
      .then((res) => res.json())
      .then((data) => {
        setWeather(data.city);
        setCities("");
        console.log("api", data);
        // setTempMax(data.main.temp_max);
        // console.log("max", data.main.temp_max);
      });
  }, []);

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
