import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Search from "../components/Search";

const Routter = () => {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Search />} />
      </Routes>
    </Router>
  );
};

export default Routter;
