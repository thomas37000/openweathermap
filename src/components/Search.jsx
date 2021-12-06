import React, { useState, useEffect } from "react";

export default function Search() {
  const [cities, setCities] = useState("");
  const [weather, setWeather] = useState([]);

  useEffect(() => {
    fetch(
      `http://api.openweathermap.org/data/2.5/forecast?id=524901&appid=98b7465353d383f3d0f3bc4a284a48ae`
    )
      .then((res) => res.json())
      .then((data) => {
        setWeather(data);
        setCities("");
        console.log("api", data);
      });
  }, []);

  return (
    <>
      <div className="search">
        <input
          type="text"
          name="search"
          id="searchBar"
          className="search-bar"
          placeholder="Lyon"
        />
      </div>
    </>
  );
}
