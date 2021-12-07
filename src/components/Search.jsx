import axios from "axios";
import React, { useState, useEffect } from "react";
import Temps from "./Temps";

export default function Search() {
  const [cities, setCities] = useState("Lyon");
  const [country, setCountry] = useState(undefined);
  const [weather, setWeather] = useState([]);
  const [tempMax, setTempMax] = useState(null);
  const [tempMin, setTempMin] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const Api_key = "98b7465353d383f3d0f3bc4a284a48ae";

  useEffect(() => {
    const loadApi = async () => {
      setTimeout(async () => {
        try {
          const res = await axios.get(
            `http://api.openweathermap.org/data/2.5/weather?q=${cities},${country}&appid=${Api_key}`
          );
          setWeather(res.data);
          console.log("api", res.data);
          // console.log("test", res.data.cities);
        } catch (error) {
          setError(error);
        } finally {
          setLoading(false);
        }
      }, 500);
    };

    loadApi();
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
