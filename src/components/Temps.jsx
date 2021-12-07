import React, { useState } from "react";
import PropTypes from "prop-types";

const Temps = ({ name, temps_max, temps_min }) => {
  const [cold, setCold] = useState("Il fait froid");
  const [warm, setWarm] = useState("Il fait chaud");

  return (
    <div>
      <div className="city-name">{name}</div>
      <div className="temps">{(temps_max, temps_min)}</div>
    </div>
  );
};

Temps.propTypes = {};

export default Temps;
