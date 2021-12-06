import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Search from "../components/Search";
import Temps from "../components/Temps";
import Nav from "../components/Nav/Nav";

const Routter = () => {
  return (
    <Router>
      <Nav />
      <Routes>
        <Route exact path="/" element={<Search />} />
        <Route exact path="/temps" element={<Temps />} />
      </Routes>
    </Router>
  );
};

export default Routter;
