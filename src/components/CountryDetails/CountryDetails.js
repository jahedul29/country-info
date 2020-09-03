import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Row, Col } from "react-bootstrap";
import "./CountryDetails.css";

const CountryDetails = () => {
  const { alpha3Code } = useParams();

  const [country, setCountry] = useState([]);

  useEffect(() => {
    const url = `https://restcountries.eu/rest/v2/alpha/${alpha3Code}`;

    fetch(url)
      .then((res) => res.json())
      .then((data) => setCountry(data));
  }, []);

  const {
    name,
    nativeName,
    population,
    region,
    subregion,
    timezones,
    area,
    flag,
    currencies,
  } = country;

  console.log(timezones && timezones[0]);
  return (
    <div>
      <h1>Country Details</h1>
      <Row>
        <Col className="p-4" md={6} sm={12}>
          <img
            style={{ border: "2px solid #125353" }}
            className="w-100"
            src={flag}
            alt=""
          />
        </Col>
        <Col
          className="d-flex flex-column align-items-center p-4"
          md={6}
          sm={12}
        >
          <h1 className="country-name">{name}</h1>
          <p>
            {" "}
            <span>Native Name:</span> {nativeName}
          </p>
          <p>
            {" "}
            <span>Area:</span> {area} &nbsp;km²
          </p>
          <p>
            <span>Population:</span> {population}
          </p>
          <p>
            <span>Region:</span> {region}
          </p>
          <p>
            <span>Sub-Region:</span> {subregion}
          </p>
          <p>
            <span>Currency:</span> {currencies && currencies[0].name}
          </p>
          <p>
            <span>TimeZone:</span> {timezones && timezones[0]}
          </p>
        </Col>
      </Row>
    </div>
  );
};

export default CountryDetails;
