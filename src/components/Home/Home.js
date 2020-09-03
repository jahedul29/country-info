import React, { useEffect } from "react";
import { useState } from "react";
import "./Home.css";
import { Link } from "react-router-dom";

const Home = () => {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    const url = `https://restcountries.eu/rest/v2/all`;

    fetch(url)
      .then((res) => res.json())
      .then((data) => setCountries(data));
  }, []);

  return (
    <>
      <div className="flags">
        {countries.map((country) => (
          <Link to={`/country/${country.alpha3Code}`}>
            <div className="flag-container">
              <div className="name">
                <h2>{country.name}</h2>
              </div>
              <img className="flag-img" src={country.flag} alt="" />
            </div>
          </Link>
        ))}
      </div>
    </>
  );
};

export default Home;
