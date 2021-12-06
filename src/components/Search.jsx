Skip to content
Search or jump to…
Pull requests
Issues
Marketplace
Explore
 
@thomas37000 
thomas37000
/
esn
Public
1
0
0
Code
Issues
1
Pull requests
Actions
Projects
Wiki
Security
Insights
Settings
esn/src/components/Form/Form.jsx /
@thomas37000
thomas37000 install dotenv
Latest commit d2946c3 23 hours ago
 History
 1 contributor
130 lines (118 sloc)  3.69 KB
  
import React, { useState } from "react";
import axios from "axios";
import PutS2n from "./PutS2n";
import "./Form.css";
import GetS2nById from "./GetS2nById";

export default function Form() {
  const [names, setNames] = useState("");
  const [rates, setRates] = useState("");
  const [images, setImages] = useState("");
  const [infos, setInfos] = useState("");
  const [cities, setCities] = useState("");
  const [dates, setDates] = useState("");
  const [s2nId, setS2nId] = useState([]);
  const [S2nList, setS2nList] = useState([]);

  const { REACT_APP_SERVER } = process.env;

  const addNewEsn = (event) => {
    event.preventDefault();
    // images ne marche et empêche le submit
    if (names || rates || infos || cities || dates) {
      axios
        .post(`${REACT_APP_SERVER}`, {
          s2n_name: names,
          rate: Number(rates),
          images: images,
          infos: infos,
          citie_name: cities,
          year: dates,
        })
        .then((res) => {
          console.log(res);
        })
        .catch((err) => console.log("error: ", err));
    }
  };

  const handleSelectModify = (e) => {
    const id = e.target.value;
    GetS2nById({ setS2nId, id, setInfos });
  };

  /* update s2n*/
  const modifyS2n = () => {
    const id = s2nId.id;
    PutS2n(infos, id);
  };

  return (
    <>
      <div className="form-container">
        <form onSubmit={addNewEsn}>
          <label htmlFor="name">
            Esn name:
            <input
              type="text"
              name="s2n_name"
              placeholder="Beapp"
              onChange={(event) => setNames(event.target.value)}
              value={infos.names || s2nId.names}
            />
          </label>

          <label htmlFor="name">
            Esn Description:
            <textarea
              placeholder="it's a S2n with 300 employees..."
              onChange={(event) => setInfos(event.target.value)}
              className="texte-infos"
              value={infos.infos || s2nId.infos}
            />
          </label>

          <label htmlFor="rate">
            rate:
            <input
              type="text"
              name="rate"
              placeholder="4,5"
              onChange={(event) => setRates(event.target.value)}
              value={infos.rate || s2nId.rate}
            />
          </label>

          <label htmlFor="rate">
            citie:
            <input
              type="text"
              name="cities"
              placeholder="Nantes"
              onChange={(event) => setCities(event.target.value)}
              value={infos.cities || s2nId.cities}
            />
          </label>

          <label htmlFor="id-date">year: </label>
          <input
            type="number"
            placeholder="2018"
            onChange={(event) => setDates(event.target.value)}
            value={infos.dates || s2nId.dates}
          />

          <label htmlFor="logo">logo / image</label>
          <input
            type="file"
            // make invisible "no File choses", native with the input file
            style={{ color: "transparent" }}
            onChange={(e) => setImages(e.target.files[0])}
            className="uplaod-img"
            accept="image/*"
            value={infos.images || s2nId.images}
          />

          <input type="submit" value="Submit" className="submit" />
          <select name="s2n" id="s2n" onChange={handleSelectModify}>
            <option value="">Choose an S2n to modify</option>
            {S2nList.map((put) => (
              <option value={put.id}>{put.names}</option>
            ))}
          </select>
          <button type="button" onClick={modifyS2n}>
            Modify
          </button>
        </form>
      </div>
    </>
  );
}
