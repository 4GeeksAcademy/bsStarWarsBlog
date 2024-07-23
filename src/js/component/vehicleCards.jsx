import React, { useContext } from "react";
import { Context } from "../store/appContext.jsx";
import { Cards } from "./cards.jsx";

export const VehicleCards = () => {
    const { store, actions } = useContext(Context);
    return (
        <div className="container">
        <div>
          <h3 className="text-danger text-start">Vehicles</h3>
        </div>
        <div className="row flex-nowrap overflow-scroll">
          {store.vehicles.length != 0 &&
            store.vehicles.map((vehicles) => {
              return <Cards key={vehicles.name} data={vehicles} type='vehicle'/>;
            })}
        </div>
      </div>
    );
};