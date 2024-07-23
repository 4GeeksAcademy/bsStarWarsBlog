import React, { useContext } from "react";
import { Context } from "../store/appContext.jsx";
import { Cards } from "./cards.jsx";

export const PlanetCards = () => {
    const { store, actions } = useContext(Context);

    return (
        <div className="container">
        <div>
          <h3 className="text-danger text-start">Planets</h3>
        </div>
        <div className="row flex-nowrap overflow-scroll">
          {store.planets.length != 0 &&
            store.planets.map((planets) => {
              return <Cards key={planets.name} data={planets} type={'planet'}/>;
            })}
        </div>
      </div>
    );
};