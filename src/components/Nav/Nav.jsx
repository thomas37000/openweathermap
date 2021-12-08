import React from "react";
import { Link } from "react-router-dom";
import "./Nav.css";

const Nav = () => {
  return (
    <>
      <div className="navbar">
        <div className="nav-links">
          <Link to="/" className="name-link">
            search
          </Link>
        </div>
        <div className="nav-links">
          <Link to="/temps" className="name-link">
            Warm or Cold ?
          </Link>
        </div>
      </div>
    </>
  );
};

export default Nav;
