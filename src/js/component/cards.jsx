import React, { useContext, useEffect } from "react";
import { Context } from "../store/appContext.jsx";
import { Link } from "react-router-dom";

export const Cards = (data) => {
  const { store, actions } = useContext(Context);

  let p1 =
    data.type == "character" ? (
      <strong>Gender: </strong>
    ) : data.type == "vehicle" ? (
      <strong>Model: </strong>
    ) : data.type == "planet" ? (
      <strong>Population:  </strong>
    ) : (
      ""
    );

  let p1Data =
    data.type == "character"
      ? data.data.gender
      : data.type == "vehicle"
      ? data.data.model
      : data.type == "planet"
      ? data.data.population: "";

  let p2 =
    data.type == "character" ? (
      <strong>Hair Color: </strong>
    ) : data.type == "vehicle" ? (
      <strong>Manufacturer: </strong>
    ) : data.type == "planet" ?
      <strong>Diameter: </strong>: "";
  

  let p2Data =
    data.type == "character"
      ? data.data.hair_color
      : data.type == "vehicle"
      ? data.data.manufacturer
      : data.type == "planet"
      ? data.data.diameter: "";

  let p3 =
    data.type == "character" ? (
      <strong>Eye Color: </strong>
    ) : data.type == "vehicle" ? (
      <strong>Class: </strong>
    ) : data.type == "planet" ?
      <strong>Climate: </strong>: "";

  let p3Data =
    data.type == "character"
      ? data.data.eye_color
      : data.type == "vehicle"
      ? data.data.vehicle_class
      : data.type == "planet"
      ? data.data.climate: "";
  return (
    <div className="container col-3 m-2">
      <div className="card" style={{ width: "20rem" }}>
        <img
          src="https://blank.page/ogimage.png"
          className="card-img-top border solid"
          alt="..."
        />
        <div className="card-body text-start">
          <h5 className="card-title">{data.data.name}</h5>
          <p className="card-text mb-1">
            {p1}
            {p1Data}
          </p>
          <p className="card-text mb-1">
            {p2}
            {p2Data}
          </p>
          <p className="card-text mb-1">
            {p3}
            {p3Data}
          </p>
          <div>
            <Link to="/DetailsView" state={data}>
              <button className="btn btn-outline-primary" type="button">
                Details
              </button>
            </Link>
            <button className="btn btn-outline-warning text-end" type="button" onClick={() => actions.addFavorites(data)}>
              <i class="fa regular fa-heart"></i>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
