import React from "react";
import "../../styles/home.css";
import { CharacterCards } from "../component/characterCards.jsx";
import { VehicleCards } from "../component/vehicleCards.jsx";
import { PlanetCards } from "../component/planetCards.jsx";

export const Home = () => (
  <div className="text-center mt-5">
    <CharacterCards />
    <div className="mt-5">
      <VehicleCards />
    </div>
    <div className="mt-5">
      <PlanetCards />
    </div>
  </div>
);
