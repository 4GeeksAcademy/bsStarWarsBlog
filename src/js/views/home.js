import React from "react";
import "../../styles/home.css";
//import { Cards } from "../component/cards.jsx";
import { CharacterCards } from "../component/characterCards.jsx";
import { VehicleCards } from "../component/vehicleCards.jsx";

export const Home = () => (
  <div className="text-center mt-5">
	<CharacterCards />
  <VehicleCards />
  </div>
);
