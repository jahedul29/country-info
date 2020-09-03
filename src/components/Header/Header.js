import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="header">
      <Link to="/home">
        <h3 style={{ color: "#d2eb34", fontWeight: "650" }}>CountryInfo</h3>
      </Link>
    </div>
  );
};

export default Header;
