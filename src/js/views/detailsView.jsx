import React, { useContext, useState } from "react";
import { Link, useLocation } from "react-router-dom";

export const DetailsView = (data) => {
  const location = useLocation()
  let loc = location.state

  let p1 =
    loc.type == "character" ? (
      <strong>Gender: </strong>
    ) : loc.type == "vehicle" ? (
      <strong>Model: </strong>
    ) : loc.type == "planet" ? (
      <strong>Population:  </strong>
    ) : (
      ""
    );

  let p1Data =
    loc.type == "character"
      ? loc.data.gender
      : loc.type == "vehicle"
      ? loc.data.model
      : loc.type == "planet"
      ? loc.data.population: "";

  let p2 =
    loc.type == "character" ? (
      <strong>Hair Color: </strong>
    ) : loc.type == "vehicle" ? (
      <strong>Manufacturer: </strong>
    ) : loc.type == "planet" ?
      <strong>Diameter: </strong>: "";
  

  let p2Data =
    loc.type == "character"
      ? loc.data.hair_color
      : loc.type == "vehicle"
      ? loc.data.manufacturer
      : loc.type == "planet"
      ? loc.data.diameter: "";

  let p3 =
    loc.type == "character" ? (
      <strong>Eye Color: </strong>
    ) : loc.type == "vehicle" ? (
      <strong>Class: </strong>
    ) : loc.type == "planet" ?
      <strong>Climate: </strong>: "";

  let p3Data =
    loc.type == "character"
      ? loc.data.eye_color
      : loc.type == "vehicle"
      ? loc.data.vehicle_class
      : loc.type == "planet"
      ? loc.data.climate: "";

      let p4 =
    loc.type == "character" ? (
      <strong>Birth-Year: </strong>
    ) : loc.type == "vehicle" ? (
      <strong>Cargo Capacity: </strong>
    ) : loc.type == "planet" ? (
      <strong>Orbital Period:  </strong>
    ) : (
      ""
    );

  let p4Data =
    loc.type == "character"
      ? loc.data.birth_year
      : loc.type == "vehicle"
      ? loc.data.cargo_capacity + "kg"
      : loc.type == "planet"
      ? loc.data.orbital_period: "";

  let p5 =
    loc.type == "character" ? (
      <strong>Weight: </strong>
    ) : loc.type == "vehicle" ? (
      <strong>Pilots: </strong>
    ) : loc.type == "planet" ?
      <strong>Rotation Period: </strong>: "";
  

  let p5Data =
    loc.type == "character"
      ? loc.data.mass + "kg"
      : loc.type == "vehicle"
      ? loc.data.crew
      : loc.type == "planet"
      ? loc.data.rotation_period: "";

  let p6 =
    loc.type == "character" ? (
      <strong>Height: </strong>
    ) : loc.type == "vehicle" ? (
      <strong>Length: </strong>
    ) : loc.type == "planet" ?
      <strong>Terrain: </strong>: "";

  let p6Data =
    loc.type == "character"
      ? loc.data.height + "cm"
      : loc.type == "vehicle"
      ? loc.data.length
      : loc.type == "planet"
      ? loc.data.terrain: "";

  console.log(loc.data)
  console.log(loc.type)
  
  return (
    <div className="container col-10 p-4">
      <div className="d-flex">
        <div className="col-6 border solid me-3">
          <img
            style={{ height: "300px" }}
            src="https://wallpapers.com/images/featured/blank-white-7sn5o1woonmklx1h.jpg"
          />
        </div> 
        <div className="col-6 text-center"><h1>{loc.data.name}</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam veritatis tempora unde voluptatibus natus amet deleniti exercitationem, perferendis, temporibus at ipsam ducimus saepe alias libero nemo consequatur quibusdam ullam cupiditate expedita beatae nulla dolorum rem reprehenderit? Laboriosam cupiditate adipisci, suscipit fugiat, nam minus maiores, praesentium repudiandae tempore earum doloremque velit?
        </p>
        </div>
      </div>
      <div className="border-top border-danger mt-5 text-center">
        <div className="row mt-3">
        <p className="col-2">{p1}{p1Data}</p>
        <p className="col-2">{p2}{p2Data}</p>
        <p className="col-2">{p3}{p3Data}</p>
        <p className="col-2">{p4}{p4Data}</p>
        <p className="col-2">{p5}{p5Data}</p>
        <p className="col-2">{p6}{p6Data}</p>
        </div>
        <Link to="/"><button type="button" className="bg-primary text-light border none shadow p-2 mb-5 mt-3 rounded">Back To Home</button></Link>
      </div>
    </div>
  );
};
