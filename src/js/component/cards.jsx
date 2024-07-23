import React, { useContext } from "react";
import { Context } from "../store/appContext.jsx";
import { Link } from "react-router-dom";

export const Cards = (data, type) => {
  const { store, actions } = useContext(Context);
  let p1 =
    type == "character"
      ? "Gender: "
      : type == "vehicle"
      ? "Name: "
      : type == "planets"
      ? "Name: "
      : "";
  let p1Data =
    type == "character"
      ? data.data.gender
      : type == "vehicle"
      ? data.data.name
      : type == "planets"
      ? data.data.name
      : "";
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
          <p className="card-text mb-1">Hair Color: {data.data.hair_color}</p>
          <p className="card-text mb-1">Eye Color: {data.data.eye_color}</p>
          <p className="card-text mb-1">Home Planet: {data.data.birth_year}</p>
          <div>
            <Link to="/DetailsView">
              <button className="btn btn-outline-primary" type="button">
                Details
              </button>
            </Link>
            <button className="btn btn-outline-primary text-end" type="button">
              <i class="fa regular fa-heart"></i>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
