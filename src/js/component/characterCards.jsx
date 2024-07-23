import React, { useContext } from "react";
import { Context } from "../store/appContext.jsx";
import { Cards } from "./cards.jsx";

export const CharacterCards = () => {
  const { store, actions } = useContext(Context);
  return (
    <div className="container">
      <div>
        <h3 className="text-danger text-start">Characters</h3>
      </div>
      <div className="row flex-nowrap overflow-scroll">
        {store.characters.length != 0 &&
          store.characters.map((characters) => {
            return <Cards key={characters.name} data={characters} type="character"/>;
          })}
      </div>
    </div>
  );
};
