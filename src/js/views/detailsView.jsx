import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";

export const DetailsView = () => {
  return (
    <div className="container col-10 p-4">
      <div className="d-flex">
        <div className="col-6 border solid me-3">
          <img
            style={{ height: "300px" }}
            src="https://wallpapers.com/images/featured/blank-white-7sn5o1woonmklx1h.jpg"
          />
        </div> 
        <div className="col-6 text-center"><h1>Title</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugiat,
          itaque.
        </p>
        </div>
      </div>
      <div className="border-top border-danger mt-5 text-center">
        <div className="row mt-3">
        <p className="col-2">data</p>
        <p className="col-2">data</p>
        <p className="col-2">data</p>
        <p className="col-2">data</p>
        <p className="col-2">data</p>
        <p className="col-2">data</p>
        </div>
        <Link to="/"><button type="button" className="bg-primary text-light border none shadow p-2 mb-5 mt-3 rounded">Back To Home</button></Link>
      </div>
    </div>
  );
};
