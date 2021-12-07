import React, { useState } from "react";
import PropTypes from "prop-types";

const Temps = ({ name, main, sys, temps_max, temps_min, weather }) => {
  const [cold, setCold] = useState("Il fait froid");
  const [warm, setWarm] = useState("Il fait chaud");

  return (
    <div className="city">
      <h2 className="city-name">
        <span>{name}</span>
        {/* <sup>{sys.country}</sup> */}
      </h2>
      {/* <div className="city-temp">
        {Math.round(main.temp)}
        <sup>&deg;C</sup>
      </div> */}
      {/* <div className="info">
        <img
          className="city-icon"
          src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}
          alt={weather.weather[0].description}
        /> 
        <p>{weather[0].description}</p>
      </div> */}
    </div>
  );
};

Temps.propTypes = {};

export default Temps;
