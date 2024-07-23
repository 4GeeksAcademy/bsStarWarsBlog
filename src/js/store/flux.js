const getState = ({ getStore, getActions, setStore }) => {
  return {
    store: {
      characters: [],
      vehicles: [],
      planets: [],
    },
    actions: {
      getCharacters: () => {
        fetch("https://swapi.dev/api/people/")
          .then((res) => res.json())
          .then((data) => {
            /* data.results.map((iter) => {
              setStore({ characters: [iter] });
            }); */
            setStore({ characters: data.results });
          })
          .catch((error) => console.error(error));
      },
      getVehicles: () => {
        fetch("https://swapi.dev/api/vehicles/")
          .then((res) => res.json())
          .then((data) => {
            setStore({ vehicles: data.results });
          })
          .catch((error) => console.error(error));
      },
    },
  };
};

export default getState;
